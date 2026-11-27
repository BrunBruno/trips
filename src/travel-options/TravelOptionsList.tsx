import React, { useEffect, useMemo, useRef, useState } from "react";
import rawCsv from "../../scripts/data/normalized_risk.csv?raw";
import type { StayOption, TravelOption } from "../types";
import {
  ALL_MONTHS,
  DANGER_CONFIG,
  getFlagUrl,
  getMonthIndex,
  getPriceBadge,
  getRiskBadge,
  getRiskLevel,
  getSeasonStyle,
  isMonthInRange,
  parseCompositeRiskMap,
  RISK_FILTER_OPTIONS,
  STAY_OPT_DAYS,
  STAY_OPT_LIST,
  STAY_OPT_META,
  type EnrichedTravelOption,
  type FilterColumn,
  type RiskLevel,
  type SortField,
  type SortState,
} from "./helpers";
import { TRAVEL_DONE } from "./travel-done";
import { TRAVEL_OPTIONS } from "./travel-options";
import "./travel-options.css";

function TravelOptionsList() {
  const [data, setData] = useState<TravelOption[]>(TRAVEL_OPTIONS);

  const [sort, setSort] = useState<SortState>({
    field: "season",
    direction: "asc",
  });

  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [selectedAvgPrices, setSelectedAvgPrices] = useState<number[]>([]);
  const [selectedRisks, setSelectedRisks] = useState<RiskLevel[]>([]);
  const [selectedStayOpts, setSelectedStayOpts] = useState<StayOption[]>([]);

  const [openFilter, setOpenFilter] = useState<FilterColumn | null>(null);
  const tableWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tableWrapperRef.current &&
        !tableWrapperRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allEnrichedRows: EnrichedTravelOption[] = useMemo(() => {
    const riskMap = parseCompositeRiskMap(rawCsv);
    return data.map((option) => {
      const score = riskMap[option.code] ?? null;
      const avgPrice = (option.pricePlane + option.priceStay) / 2;
      const avgPriceLevel = Math.min(5, Math.max(1, Math.round(avgPrice)));
      const estimatedDays = STAY_OPT_DAYS[option.stayOpt] ?? 7;
      const estimatedTotalCostZL =
        option.pricePlaneZL + estimatedDays * option.priceStayZL;

      return {
        ...option,
        compositeRiskScore: score,
        riskLevel: score !== null ? getRiskLevel(score) : null,
        avgPrice,
        avgPriceLevel,
        estimatedDays,
        estimatedTotalCostZL,
      };
    });
  }, [data]);

  const rows: EnrichedTravelOption[] = useMemo(() => {
    const filtered = allEnrichedRows.filter((item) => {
      if (selectedMonths.length > 0) {
        const matchesMonth = selectedMonths.some((mIdx) =>
          isMonthInRange(mIdx, item.monthF, item.monthT),
        );
        if (!matchesMonth) return false;
      }

      if (
        selectedAvgPrices.length > 0 &&
        !selectedAvgPrices.includes(item.avgPriceLevel)
      ) {
        return false;
      }

      if (selectedRisks.length > 0) {
        if (
          item.riskLevel === null ||
          !selectedRisks.includes(item.riskLevel)
        ) {
          return false;
        }
      }

      if (
        selectedStayOpts.length > 0 &&
        !selectedStayOpts.includes(item.stayOpt)
      ) {
        return false;
      }

      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sort.field === "season") {
        const startDiff = getMonthIndex(a.monthF) - getMonthIndex(b.monthF);
        const diff =
          startDiff !== 0
            ? startDiff
            : getMonthIndex(a.monthT) - getMonthIndex(b.monthT);

        return sort.direction === "asc" ? diff : -diff;
      }

      if (sort.field === "avgPrice") {
        const priceDiff = a.estimatedTotalCostZL - b.estimatedTotalCostZL;
        return sort.direction === "asc" ? priceDiff : -priceDiff;
      }

      if (a.compositeRiskScore === null && b.compositeRiskScore === null) {
        return 0;
      }
      if (a.compositeRiskScore === null) return 1;
      if (b.compositeRiskScore === null) return -1;

      const riskDiff = a.compositeRiskScore - b.compositeRiskScore;
      return sort.direction === "asc" ? riskDiff : -riskDiff;
    });
  }, [
    allEnrichedRows,
    selectedMonths,
    selectedAvgPrices,
    selectedRisks,
    selectedStayOpts,
    sort,
  ]);

  const toggleNumberSelection = <T extends number>(
    value: T,
    setter: React.Dispatch<React.SetStateAction<T[]>>,
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const toggleStayOptSelection = (opt: StayOption) => {
    setSelectedStayOpts((prev) =>
      prev.includes(opt) ? prev.filter((v) => v !== opt) : [...prev, opt],
    );
  };

  const handleSort = (field: SortField) => {
    setSort((prev) => {
      if (prev.field === field) {
        return {
          field,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return {
        field,
        direction: "asc",
      };
    });
  };

  const renderSortIcon = (field: SortField) => {
    if (sort.field !== field) {
      return <span className="travel-sort-icon">⇅</span>;
    }
    return (
      <span className="travel-sort-icon travel-sort-icon--active">
        {sort.direction === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  const renderFilterButton = (column: FilterColumn, activeCount: number) => {
    const isActive = activeCount > 0;
    const isOpen = openFilter === column;

    const btnClass = [
      "travel-filter-btn",
      isActive ? "travel-filter-btn--active" : "",
      !isActive && isOpen ? "travel-filter-btn--open" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpenFilter((prev) => (prev === column ? null : column));
        }}
        title="Filtruj kolumnę"
        className={btnClass}
      >
        <span>▾</span>
        {isActive && <span className="travel-filter-count">{activeCount}</span>}
      </button>
    );
  };

  const renderPriceCell = (
    value: number,
    exactLabel?: string,
    breakdown?: string,
  ) => {
    const badge = getPriceBadge(value);
    return (
      <div
        title={exactLabel ?? `${badge.label} (${value}/5)`}
        className="travel-price-cell"
      >
        <span
          className="travel-price-badge"
          style={{
            color: badge.color,
            backgroundColor: badge.bg,
            border: `1px solid ${badge.border}`,
          }}
        >
          {badge.symbols}
        </span>
        {breakdown && (
          <span className="travel-price-breakdown">{breakdown}</span>
        )}
      </div>
    );
  };

  const isOptionsActive = data === TRAVEL_OPTIONS;
  const isDoneActive = data === TRAVEL_DONE;

  return (
    <div ref={tableWrapperRef}>
      <div className="no-scrollbar travel-table-scroll">
        <table className="travel-table">
          <thead>
            <tr className="travel-thead-row">
              <th className="travel-th travel-th--flag">Flaga</th>
              <th className="travel-th">Kierunek</th>
              <th className="travel-th">Region</th>

              {/* KOLUMNA: SEZON + FILTR */}
              <th className="travel-th travel-th--relative travel-th--season">
                <div className="travel-th-controls">
                  <button
                    type="button"
                    onClick={() => handleSort("season")}
                    className="travel-sort-btn"
                    title="Sortuj po sezonie"
                  >
                    <span>Sezon</span>
                    {renderSortIcon("season")}
                  </button>
                  {renderFilterButton("season", selectedMonths.length)}
                </div>

                {openFilter === "season" && (
                  <div className="travel-dropdown travel-dropdown--season">
                    <div className="travel-dropdown-header">
                      <label className="travel-dropdown-select-all">
                        <input
                          type="checkbox"
                          checked={selectedMonths.length === 0}
                          onChange={() => setSelectedMonths([])}
                        />
                        <span>Wszystkie (Sty–Gru)</span>
                      </label>
                      {selectedMonths.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedMonths([])}
                          className="travel-dropdown-clear"
                        >
                          Wyczyść
                        </button>
                      )}
                    </div>

                    <div className="travel-months-grid">
                      {ALL_MONTHS.map((monthShort, idx) => {
                        const monthNum = idx + 1;
                        const checked = selectedMonths.includes(monthNum);
                        const seasonMeta = getSeasonStyle(monthShort);

                        return (
                          <label
                            key={monthShort}
                            className={`travel-month-option ${
                              checked ? "travel-month-option--checked" : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() =>
                                toggleNumberSelection(
                                  monthNum,
                                  setSelectedMonths,
                                )
                              }
                            />
                            <span
                              className="travel-season-dot"
                              style={{ backgroundColor: seasonMeta.color }}
                            />
                            <span>{monthShort}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </th>

              {/* KOLUMNA: UNIKAĆ (dangerF - dangerT) */}
              <th className="travel-th travel-th--danger">Unikać</th>

              {/* KOLUMNA: ŚR. KOSZT + FILTR (1-5) */}
              <th className="travel-th travel-th--center travel-th--relative">
                <div className="travel-th-controls travel-th-controls--center">
                  <button
                    type="button"
                    onClick={() => handleSort("avgPrice")}
                    className="travel-sort-btn travel-sort-btn--center"
                    title="Sortuj po średnim koszcie podróży"
                  >
                    <span>Śr. koszt</span>
                    {renderSortIcon("avgPrice")}
                  </button>
                  {renderFilterButton("avgPrice", selectedAvgPrices.length)}
                </div>

                {openFilter === "avgPrice" && (
                  <div className="travel-dropdown">
                    <div className="travel-dropdown-header">
                      <label className="travel-dropdown-select-all">
                        <input
                          type="checkbox"
                          checked={selectedAvgPrices.length === 0}
                          onChange={() => setSelectedAvgPrices([])}
                        />
                        <span>Wszystkie (1–5)</span>
                      </label>
                      {selectedAvgPrices.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedAvgPrices([])}
                          className="travel-dropdown-clear"
                        >
                          Wyczyść
                        </button>
                      )}
                    </div>

                    <div className="travel-options-list">
                      {[1, 2, 3, 4, 5].map((lvl) => {
                        const checked = selectedAvgPrices.includes(lvl);
                        const meta = getPriceBadge(lvl);
                        return (
                          <label
                            key={lvl}
                            className={`travel-option-row travel-option-row--between ${
                              checked ? "travel-option-row--checked" : ""
                            }`}
                          >
                            <span className="travel-option-label">
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  toggleNumberSelection(
                                    lvl,
                                    setSelectedAvgPrices,
                                  )
                                }
                              />
                              <span>
                                {lvl} – {meta.label}
                              </span>
                            </span>
                            <span
                              className="travel-option-price-pill"
                              style={{
                                color: meta.color,
                                backgroundColor: meta.bg,
                              }}
                            >
                              {meta.symbols}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </th>

              {/* KOLUMNA: SUMARYCZNE RYZYKO + FILTR (1-4) */}
              <th className="travel-th travel-th--relative">
                <div className="travel-th-controls travel-th-controls--end">
                  <button
                    type="button"
                    onClick={() => handleSort("risk")}
                    className="travel-sort-btn travel-sort-btn--end"
                    title="Sortuj po sumarycznym ryzyku"
                  >
                    <span>Sumaryczne ryzyko</span>
                    {renderSortIcon("risk")}
                  </button>
                  {renderFilterButton("risk", selectedRisks.length)}
                </div>

                {openFilter === "risk" && (
                  <div className="travel-dropdown travel-dropdown--risk">
                    <div className="travel-dropdown-header">
                      <label className="travel-dropdown-select-all">
                        <input
                          type="checkbox"
                          checked={selectedRisks.length === 0}
                          onChange={() => setSelectedRisks([])}
                        />
                        <span>Wszystkie (1–4)</span>
                      </label>
                      {selectedRisks.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedRisks([])}
                          className="travel-dropdown-clear"
                        >
                          Wyczyść
                        </button>
                      )}
                    </div>

                    <div className="travel-options-list">
                      {RISK_FILTER_OPTIONS.map((opt) => {
                        const checked = selectedRisks.includes(opt.level);
                        return (
                          <label
                            key={opt.level}
                            className={`travel-option-row ${
                              checked ? "travel-option-row--checked" : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() =>
                                toggleNumberSelection(
                                  opt.level,
                                  setSelectedRisks,
                                )
                              }
                            />
                            <span
                              className="travel-risk-dot"
                              style={{ backgroundColor: opt.color }}
                            />
                            <span>{opt.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </th>

              {/* KOLUMNA: TYP + FILTR */}
              <th className="travel-th travel-th--center travel-th--relative travel-th--type">
                <div className="travel-th-controls travel-th-controls--center travel-th-controls--tight">
                  <span>Typ</span>
                  {renderFilterButton("stayOpt", selectedStayOpts.length)}
                </div>

                {openFilter === "stayOpt" && (
                  <div className="travel-dropdown travel-dropdown--type">
                    <div className="travel-dropdown-header">
                      <label className="travel-dropdown-select-all">
                        <input
                          type="checkbox"
                          checked={selectedStayOpts.length === 0}
                          onChange={() => setSelectedStayOpts([])}
                        />
                        <span>Wszystkie</span>
                      </label>
                      {selectedStayOpts.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedStayOpts([])}
                          className="travel-dropdown-clear"
                        >
                          Wyczyść
                        </button>
                      )}
                    </div>

                    <div className="travel-options-list">
                      {STAY_OPT_LIST.map((opt) => {
                        const checked = selectedStayOpts.includes(opt);
                        const meta = STAY_OPT_META[opt];
                        return (
                          <label
                            key={opt}
                            className={`travel-option-row ${
                              checked ? "travel-option-row--checked" : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleStayOptSelection(opt)}
                            />
                            <span>{meta.emoji}</span>
                            <span>{meta.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={8} className="travel-td--empty">
                  Brak kierunków spełniających wybrane kryteria filtrowania.
                </td>
              </tr>
            ) : (
              rows.map((item) => {
                const badge =
                  item.compositeRiskScore !== null
                    ? getRiskBadge(item.compositeRiskScore)
                    : null;
                const flagUrl = getFlagUrl(item.code);
                const styleFrom = getSeasonStyle(item.monthF);
                const styleTo = getSeasonStyle(item.monthT);

                return (
                  <tr
                    key={`${item.code}-${item.place ?? "default"}`}
                    className="travel-row"
                  >
                    <td className="travel-td">
                      {flagUrl ? (
                        <img
                          src={flagUrl}
                          alt={`Flaga: ${item.name}`}
                          className="travel-flag-img"
                        />
                      ) : (
                        <div className="travel-flag-placeholder" />
                      )}
                    </td>

                    <td className="travel-td">
                      <div className="travel-destination-name">
                        {item.name}
                        {item.place && ` (${item.place})`}
                      </div>
                    </td>

                    <td className="travel-td travel-region-cell">
                      {item.region ?? "—"}
                    </td>

                    <td className="travel-td">
                      <div className="travel-season-range">
                        <span
                          title={`Od: ${styleFrom.seasonName}`}
                          className="travel-season-pill"
                          style={{
                            color: styleFrom.color,
                            backgroundColor: styleFrom.bg,
                            border: `1px solid ${styleFrom.border}`,
                          }}
                        >
                          {item.monthF}
                        </span>
                        <span className="travel-season-sep">–</span>
                        <span
                          title={`Do: ${styleTo.seasonName}`}
                          className="travel-season-pill"
                          style={{
                            color: styleTo.color,
                            backgroundColor: styleTo.bg,
                            border: `1px solid ${styleTo.border}`,
                          }}
                        >
                          {item.monthT}
                        </span>
                      </div>
                    </td>

                    <td className="travel-td">
                      {item.dangerF && item.dangerT ? (
                        (() => {
                          const dangerInfo = item.dangerType
                            ? DANGER_CONFIG[item.dangerType]
                            : null;

                          return (
                            <span
                              title={
                                dangerInfo?.label ??
                                "Okres odradzany (np. huragany, tajfuny, ulewny monsun lub ekstremalne upały)"
                              }
                              className="travel-danger-badge"
                            >
                              <span>⚠</span>
                              <span>
                                {item.dangerF} – {item.dangerT}
                              </span>
                              {dangerInfo && <span>{dangerInfo.icon}</span>}
                            </span>
                          );
                        })()
                      ) : (
                        <span className="travel-no-danger">———</span>
                      )}
                    </td>

                    <td className="travel-td travel-td--center">
                      {renderPriceCell(
                        item.avgPrice,
                        `Szacowany koszt (${item.estimatedDays} dni): ${item.estimatedTotalCostZL.toLocaleString("pl-PL")} zł (Loty: ${item.pricePlaneZL} zł + ${item.estimatedDays} × ${item.priceStayZL} zł)`,
                        `${item.estimatedTotalCostZL.toLocaleString("pl-PL")} zł`,
                      )}
                    </td>

                    <td className="travel-td">
                      {item.compositeRiskScore !== null && badge ? (
                        <span
                          className="travel-risk-badge"
                          style={{
                            color: badge.color,
                            backgroundColor: badge.bg,
                          }}
                        >
                          {item.compositeRiskScore} / 100 ({badge.label})
                        </span>
                      ) : (
                        <span className="travel-no-data">Brak danych</span>
                      )}
                    </td>

                    <td className="travel-td travel-td--center">
                      {(() => {
                        const meta = STAY_OPT_META[item.stayOpt];
                        return meta ? (
                          <span
                            title={`${meta.label} – ${meta.description}`}
                            className="travel-stay-emoji"
                          >
                            {meta.emoji}
                          </span>
                        ) : (
                          "—"
                        );
                      })()}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <nav aria-label="Źródło danych podróży" className="travel-source-nav">
          <button
            type="button"
            onClick={() => setData(TRAVEL_OPTIONS)}
            className={`travel-source-btn ${
              isOptionsActive ? "travel-source-btn--options-active" : ""
            }`}
          >
            Do odwiedzenia ({TRAVEL_OPTIONS.length})
          </button>
          <button
            type="button"
            onClick={() => setData(TRAVEL_DONE)}
            className={`travel-source-btn ${
              isDoneActive ? "travel-source-btn--done-active" : ""
            }`}
          >
            Odwiedzone ({TRAVEL_DONE.length})
          </button>
        </nav>
      </div>
    </div>
  );
}

export default TravelOptionsList;
