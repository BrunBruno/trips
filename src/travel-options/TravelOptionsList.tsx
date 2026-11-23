import React, { useEffect, useMemo, useRef, useState } from "react";
import { TRAVEL_OPTIONS } from "./travel-options";
import rawCsv from "../../scripts/data/normalized_risk.csv?raw";
import type { StayOption } from "../types";
import {
  ALL_MONTHS,
  ISO3_TO_ISO2,
  MONTH_ORDER,
  STAY_OPT_DAYS,
  type EnrichedTravelOption,
  type FilterColumn,
  type RiskLevel,
  type SortField,
  type SortState,
} from "./helpers";

function getMonthIndex(month: string): number {
  return MONTH_ORDER[month.trim().toLowerCase()] ?? 99;
}

// Sprawdza czy dany miesiąc (1-12) zawiera się w przedziale [monthF, monthT] (również przez przełom roku)
function isMonthInRange(
  targetMonthIdx: number,
  fromMonth: string,
  toMonth: string,
): boolean {
  const start = getMonthIndex(fromMonth);
  const end = getMonthIndex(toMonth);
  if (start === 99 || end === 99) return false;

  if (start <= end) {
    return targetMonthIdx >= start && targetMonthIdx <= end;
  }
  // Zakres przechodzący przez przełom roku, np. Lis (11) -> Mar (3)
  return targetMonthIdx >= start || targetMonthIdx <= end;
}

function getFlagUrl(iso3: string): string | null {
  const iso2 = ISO3_TO_ISO2[iso3.toUpperCase()];
  return iso2 ? `https://flagcdn.com/w80/${iso2}.png` : null;
}

function parseNullableFloat(val: string | undefined): number | null {
  if (!val || val.trim() === "" || val.trim().toLowerCase() === "nan") {
    return null;
  }
  const num = Number(val.trim());
  return Number.isFinite(num) ? num : null;
}

function parseCompositeRiskMap(csvText: string): Record<string, number> {
  const lines = csvText.trim().split(/\r?\n/);
  const map: Record<string, number> = {};

  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(",");
    if (parts.length < 5) continue;

    const econ_code = parts[0].trim();
    const wgi_risk = parseNullableFloat(parts[parts.length - 1]);
    const inform_risk = parseNullableFloat(parts[parts.length - 2]);
    const gpi_risk = parseNullableFloat(parts[parts.length - 3]);

    const metrics = [gpi_risk, inform_risk, wgi_risk].filter(
      (v): v is number => v !== null,
    );

    if (metrics.length > 0) {
      const avg = metrics.reduce((sum, val) => sum + val, 0) / metrics.length;
      map[econ_code] = Math.round(avg * 100);
    }
  }

  return map;
}

function getSeasonStyle(month: string): {
  seasonName: string;
  color: string;
  bg: string;
  border: string;
} {
  const monthIdx = getMonthIndex(month);

  if ([12, 1, 2].includes(monthIdx)) {
    return {
      seasonName: "Zima",
      color: "#0369a1",
      bg: "#e0f2fe",
      border: "#bae6fd",
    };
  }
  if ([3, 4, 5].includes(monthIdx)) {
    return {
      seasonName: "Wiosna",
      color: "#15803d",
      bg: "#dcfce7",
      border: "#bbf7d0",
    };
  }
  if ([6, 7, 8].includes(monthIdx)) {
    return {
      seasonName: "Lato",
      color: "#a16207",
      bg: "#fef9c3",
      border: "#fde047",
    };
  }
  if ([9, 10, 11].includes(monthIdx)) {
    return {
      seasonName: "Jesień",
      color: "#c2410c",
      bg: "#ffedd5",
      border: "#fed7aa",
    };
  }

  return {
    seasonName: "Inna",
    color: "#374151",
    bg: "#f3f4f6",
    border: "#e5e7eb",
  };
}

function getRiskLevel(score: number): RiskLevel {
  if (score <= 25) return 1;
  if (score <= 50) return 2;
  if (score <= 75) return 3;
  return 4;
}

function getRiskBadge(score: number): {
  level: RiskLevel;
  label: string;
  color: string;
  bg: string;
} {
  if (score <= 25) {
    return { level: 1, label: "Niskie", color: "#15803d", bg: "#dcfce7" };
  }
  if (score <= 50) {
    return { level: 2, label: "Umiarkowane", color: "#a16207", bg: "#fef9c3" };
  }
  if (score <= 75) {
    return { level: 3, label: "Podwyższone", color: "#c2410c", bg: "#ffedd5" };
  }
  return { level: 4, label: "Wysokie", color: "#b91c1c", bg: "#fee2e2" };
}

const RISK_FILTER_OPTIONS: {
  level: RiskLevel;
  label: string;
  color: string;
  bg: string;
}[] = [
  { level: 1, label: "1 – Niskie (0–25)", color: "#15803d", bg: "#dcfce7" },
  {
    level: 2,
    label: "2 – Umiarkowane (26–50)",
    color: "#a16207",
    bg: "#fef9c3",
  },
  {
    level: 3,
    label: "3 – Podwyższone (51–75)",
    color: "#c2410c",
    bg: "#ffedd5",
  },
  { level: 4, label: "4 – Wysokie (76–100)", color: "#b91c1c", bg: "#fee2e2" },
];

const STAY_OPT_META: Record<
  StayOption,
  { emoji: string; label: string; description: string }
> = {
  HOTEL: {
    emoji: "🏨",
    label: "Tylko hotel",
    description: "Wypoczynek stacjonarny / resort (lub bezpieczniej w hotelu)",
  },
  SIGHTSEEING: {
    emoji: "🎒",
    label: "Zwiedzanie",
    description: "Dłuższy wyjazd objazdowy, bezpieczny do eksploracji",
  },
  STOPOVER: {
    emoji: "✈️",
    label: "Przelotem",
    description: "Krótki wypad na kilka dni / blisko Polski / city break",
  },
};

const STAY_OPT_LIST: StayOption[] = ["HOTEL", "SIGHTSEEING", "STOPOVER"];

function getPriceBadge(level: number): {
  symbols: string;
  label: string;
  color: string;
  bg: string;
  border: string;
} {
  const clamped = Math.min(5, Math.max(1, Math.round(level)));
  const symbols = "$".repeat(clamped);

  switch (clamped) {
    case 1:
      return {
        symbols,
        label: "Bardzo tanio",
        color: "#15803d",
        bg: "#dcfce7",
        border: "#bbf7d0",
      };
    case 2:
      return {
        symbols,
        label: "Tanio",
        color: "#0f766e",
        bg: "#ccfbf1",
        border: "#99f6e4",
      };
    case 3:
      return {
        symbols,
        label: "Umiarkowanie",
        color: "#a16207",
        bg: "#fef9c3",
        border: "#fde047",
      };
    case 4:
      return {
        symbols,
        label: "Drogo",
        color: "#c2410c",
        bg: "#ffedd5",
        border: "#fed7aa",
      };
    case 5:
    default:
      return {
        symbols,
        label: "Bardzo drogo",
        color: "#b91c1c",
        bg: "#fee2e2",
        border: "#fecaca",
      };
  }
}

export const TravelOptionsList: React.FC = () => {
  // Domyślne sortowanie: po sezonie rosnąco (Sty -> Gru)
  const [sort, setSort] = useState<SortState>({
    field: "season",
    direction: "asc",
  });

  // Stany filtrów (pusta tablica = brak zawężenia / pokazuj wszystko)
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [selectedAvgPrices, setSelectedAvgPrices] = useState<number[]>([]);
  const [selectedRisks, setSelectedRisks] = useState<RiskLevel[]>([]);
  const [selectedStayOpts, setSelectedStayOpts] = useState<StayOption[]>([]);

  // Aktualnie otwarte menu filtra w nagłówku
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
    return TRAVEL_OPTIONS.map((option) => {
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
  }, []);

  const rows: EnrichedTravelOption[] = useMemo(() => {
    const filtered = allEnrichedRows.filter((item) => {
      // Filtr Sezonu (wybrany dowolny z zaznaczonych miesięcy zawiera się w okresie)
      if (selectedMonths.length > 0) {
        const matchesMonth = selectedMonths.some((mIdx) =>
          isMonthInRange(mIdx, item.monthF, item.monthT),
        );
        if (!matchesMonth) return false;
      }

      // Filtr Śr. koszt (1-5)
      if (
        selectedAvgPrices.length > 0 &&
        !selectedAvgPrices.includes(item.avgPriceLevel)
      ) {
        return false;
      }

      // Filtr Ryzyko (1-4)
      if (selectedRisks.length > 0) {
        if (
          item.riskLevel === null ||
          !selectedRisks.includes(item.riskLevel)
        ) {
          return false;
        }
      }

      // Filter Typ Pobytu
      if (
        selectedStayOpts.length > 0 &&
        !selectedStayOpts.includes(item.stayOpt)
      ) {
        return false;
      }

      return true;
    });

    return [...filtered].sort((a, b) => {
      // Rekordy z done: true zawsze lądują na końcu tabeli
      const aDone = Boolean(a.done);
      const bDone = Boolean(b.done);
      if (aDone !== bDone) {
        return aDone ? 1 : -1;
      }

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

      // Sortowanie po ryzyku (rekordy z "Brak danych" zawsze lądują na dole swojej grupy)
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
      return <span style={{ fontSize: "0.8rem", opacity: 0.45 }}>⇅</span>;
    }
    return (
      <span style={{ fontSize: "0.8rem", opacity: 0.95 }}>
        {sort.direction === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  const renderFilterButton = (column: FilterColumn, activeCount: number) => {
    const isActive = activeCount > 0;
    const isOpen = openFilter === column;

    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpenFilter((prev) => (prev === column ? null : column));
        }}
        title="Filtruj kolumnę"
        style={{
          background: isActive ? "#2563eb" : isOpen ? "#525252" : "#444444",
          border: isActive ? "1px solid #60a5fa" : "1px solid #666666",
          color: "#ffffff",
          borderRadius: "4px",
          padding: "0.15rem 0.4rem",
          fontSize: "0.75rem",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          lineHeight: 1.2,
        }}
      >
        <span>▾</span>
        {isActive && <span style={{ fontWeight: 700 }}>{activeCount}</span>}
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
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.45rem",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "4.25rem",
            padding: "0.22rem 0.55rem",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.03em",
            color: badge.color,
            backgroundColor: badge.bg,
            border: `1px solid ${badge.border}`,
          }}
        >
          {badge.symbols}
        </span>
        {breakdown && (
          <span
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {breakdown}
          </span>
        )}
      </div>
    );
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "calc(100% + 6px)",
    left: 0,
    zIndex: 50,
    minWidth: "220px",
    backgroundColor: "#262626",
    color: "#f5f5f5",
    border: "1px solid #525252",
    borderRadius: "8px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.45)",
    padding: "0.6rem",
    textAlign: "left",
    fontWeight: 400,
    fontSize: "0.85rem",
  };

  return (
    <div ref={tableWrapperRef}>
      <div className="no-scrollbar">
        <table
          style={{
            width: "100%",
            minWidth: "980px",
            tableLayout: "fixed",
            borderCollapse: "collapse",
            borderRadius: "8px",
            fontSize: "0.95rem",
            textAlign: "left",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#333333",
                color: "#ffffff",
              }}
            >
              <th style={{ padding: "0.75rem 1rem", width: "64px" }}>Flaga</th>
              <th style={{ padding: "0.75rem 1rem" }}>Kierunek</th>
              <th style={{ padding: "0.75rem 1rem" }}>Region</th>

              {/* KOLUMNA: SEZON + FILTR */}
              <th
                style={{
                  padding: "0.75rem 1rem",
                  position: "relative",
                  width: "128px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleSort("season")}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "inherit",
                      font: "inherit",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: 0,
                    }}
                    title="Sortuj po sezonie"
                  >
                    <span>Sezon</span>
                    {renderSortIcon("season")}
                  </button>
                  {renderFilterButton("season", selectedMonths.length)}
                </div>

                {openFilter === "season" && (
                  <div style={{ ...dropdownStyle, minWidth: "215px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "0.45rem",
                        marginBottom: "0.45rem",
                        borderBottom: "1px solid #404040",
                      }}
                    >
                      <label
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
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
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#60a5fa",
                            fontSize: "0.78rem",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          Wyczyść
                        </button>
                      )}
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.3rem 0.5rem",
                      }}
                    >
                      {ALL_MONTHS.map((monthShort, idx) => {
                        const monthNum = idx + 1;
                        const checked = selectedMonths.includes(monthNum);
                        const seasonMeta = getSeasonStyle(monthShort);

                        return (
                          <label
                            key={monthShort}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem",
                              cursor: "pointer",
                              padding: "0.2rem 0.3rem",
                              borderRadius: "4px",
                              backgroundColor: checked
                                ? "#374151"
                                : "transparent",
                            }}
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
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: seasonMeta.color,
                                flexShrink: 0,
                              }}
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
              <th style={{ padding: "0.75rem 1rem", width: "128px" }}>
                Unikać
              </th>

              {/* KOLUMNA: ŚR. KOSZT + FILTR (1-5) */}
              <th
                style={{
                  padding: "0.75rem 1rem",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.45rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleSort("avgPrice")}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "inherit",
                      font: "inherit",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.35rem",
                      padding: 0,
                    }}
                    title="Sortuj po średnim koszcie podróży"
                  >
                    <span>Śr. koszt</span>
                    {renderSortIcon("avgPrice")}
                  </button>
                  {renderFilterButton("avgPrice", selectedAvgPrices.length)}
                </div>

                {openFilter === "avgPrice" && (
                  <div style={dropdownStyle}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "0.45rem",
                        marginBottom: "0.45rem",
                        borderBottom: "1px solid #404040",
                      }}
                    >
                      <label
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
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
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#60a5fa",
                            fontSize: "0.78rem",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          Wyczyść
                        </button>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((lvl) => {
                        const checked = selectedAvgPrices.includes(lvl);
                        const meta = getPriceBadge(lvl);
                        return (
                          <label
                            key={lvl}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.5rem",
                              cursor: "pointer",
                              padding: "0.25rem 0.35rem",
                              borderRadius: "4px",
                              backgroundColor: checked
                                ? "#374151"
                                : "transparent",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.45rem",
                              }}
                            >
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
                              style={{
                                padding: "0.1rem 0.4rem",
                                borderRadius: "4px",
                                fontSize: "0.78rem",
                                fontWeight: 700,
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
              <th
                style={{
                  padding: "0.75rem 1rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "0.45rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleSort("risk")}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "inherit",
                      font: "inherit",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: "0.35rem",
                      padding: 0,
                    }}
                    title="Sortuj po sumarycznym ryzyku"
                  >
                    <span>Sumaryczne ryzyko</span>
                    {renderSortIcon("risk")}
                  </button>
                  {renderFilterButton("risk", selectedRisks.length)}
                </div>

                {openFilter === "risk" && (
                  <div
                    style={{
                      ...dropdownStyle,
                      left: "auto",
                      right: 0,
                      minWidth: "245px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "0.45rem",
                        marginBottom: "0.45rem",
                        borderBottom: "1px solid #404040",
                      }}
                    >
                      <label
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
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
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#60a5fa",
                            fontSize: "0.78rem",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          Wyczyść
                        </button>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                      }}
                    >
                      {RISK_FILTER_OPTIONS.map((opt) => {
                        const checked = selectedRisks.includes(opt.level);
                        return (
                          <label
                            key={opt.level}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              cursor: "pointer",
                              padding: "0.25rem 0.35rem",
                              borderRadius: "4px",
                              backgroundColor: checked
                                ? "#374151"
                                : "transparent",
                            }}
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
                              style={{
                                display: "inline-block",
                                width: "10px",
                                height: "10px",
                                borderRadius: "9999px",
                                backgroundColor: opt.color,
                                flexShrink: 0,
                              }}
                            />
                            <span>{opt.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </th>

              <th
                style={{
                  padding: "0.75rem 1rem",
                  width: "92px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                  }}
                >
                  <span>Typ</span>
                  {renderFilterButton("stayOpt", selectedStayOpts.length)}
                </div>

                {openFilter === "stayOpt" && (
                  <div
                    style={{
                      ...dropdownStyle,
                      left: "auto",
                      right: 0,
                      minWidth: "210px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "0.45rem",
                        marginBottom: "0.45rem",
                        borderBottom: "1px solid #404040",
                      }}
                    >
                      <label
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
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
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#60a5fa",
                            fontSize: "0.78rem",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          Wyczyść
                        </button>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                      }}
                    >
                      {STAY_OPT_LIST.map((opt) => {
                        const checked = selectedStayOpts.includes(opt);
                        const meta = STAY_OPT_META[opt];
                        return (
                          <label
                            key={opt}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              cursor: "pointer",
                              padding: "0.25rem 0.35rem",
                              borderRadius: "4px",
                              backgroundColor: checked
                                ? "#374151"
                                : "transparent",
                            }}
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
                <td
                  colSpan={7}
                  style={{
                    padding: "2rem 1rem",
                    textAlign: "center",
                    color: "#9ca3af",
                  }}
                >
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
                    style={{
                      borderBottom: "1px solid #555555",
                      backgroundColor: item.done
                        ? "rgba(34, 197, 94, 0.14)"
                        : undefined,
                    }}
                  >
                    <td style={{ padding: "0.75rem 1rem" }}>
                      {flagUrl ? (
                        <img
                          src={flagUrl}
                          alt={`Flaga: ${item.name}`}
                          style={{
                            width: "36px",
                            height: "24px",
                            objectFit: "cover",
                            borderRadius: "4px",
                            display: "block",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "36px",
                            height: "24px",
                            backgroundColor: "#f3f4f6",
                            borderRadius: "4px",
                          }}
                        />
                      )}
                    </td>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      <div style={{ fontWeight: 600 }}>
                        {item.name}
                        {item.place && ` (${item.place})`}
                      </div>
                    </td>

                    <td style={{ padding: "0.75rem 1rem", color: "#666666" }}>
                      {item.region ?? "—"}
                    </td>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span
                          title={`Od: ${styleFrom.seasonName}`}
                          style={{
                            padding: "0.2rem 0.5rem",
                            borderRadius: "6px",
                            fontSize: "0.82rem",
                            fontWeight: 500,
                            color: styleFrom.color,
                            backgroundColor: styleFrom.bg,
                            border: `1px solid ${styleFrom.border}`,
                          }}
                        >
                          {item.monthF}
                        </span>
                        <span style={{ color: "#9ca3af", fontWeight: 500 }}>
                          –
                        </span>
                        <span
                          title={`Do: ${styleTo.seasonName}`}
                          style={{
                            padding: "0.2rem 0.5rem",
                            borderRadius: "6px",
                            fontSize: "0.82rem",
                            fontWeight: 500,
                            color: styleTo.color,
                            backgroundColor: styleTo.bg,
                            border: `1px solid ${styleTo.border}`,
                          }}
                        >
                          {item.monthT}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      {item.dangerF && item.dangerT ? (
                        <span
                          title="Okres odradzany (np. huragany, tajfuny, ulewny monsun lub ekstremalne upały)"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "6px",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            color: "#b91c1c",
                            backgroundColor: "#fee2e2",
                            border: "1px solid #fecaca",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span>⚠</span>
                          <span>
                            {item.dangerF} – {item.dangerT}
                          </span>
                        </span>
                      ) : (
                        <span style={{ color: "#6b7280" }}>———</span>
                      )}
                    </td>
                    <td
                      style={{ padding: "0.75rem 1rem", textAlign: "center" }}
                    >
                      {renderPriceCell(
                        item.avgPrice,
                        `Szacowany koszt (${item.estimatedDays} dni): ${item.estimatedTotalCostZL.toLocaleString("pl-PL")} zł (Loty: ${item.pricePlaneZL} zł + ${item.estimatedDays} × ${item.priceStayZL} zł)`,
                        `${item.estimatedTotalCostZL.toLocaleString("pl-PL")} zł`,
                      )}
                    </td>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      {item.compositeRiskScore !== null && badge ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "9999px",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            color: badge.color,
                            backgroundColor: badge.bg,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.compositeRiskScore} / 100 ({badge.label})
                        </span>
                      ) : (
                        <span style={{ color: "#9ca3af" }}>Brak danych</span>
                      )}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                      }}
                    >
                      {(() => {
                        const meta = STAY_OPT_META[item.stayOpt];
                        return meta ? (
                          <span
                            title={`${meta.label} – ${meta.description}`}
                            style={{
                              fontSize: "1.25rem",
                              cursor: "help",
                              display: "inline-block",
                              lineHeight: 1,
                            }}
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
      </div>
    </div>
  );
};
