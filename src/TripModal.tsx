import { useEffect, useRef, useState } from "react";
import "./trip-modal.css";
import type { CountryRecord } from "./types";
import HistoryMap from "./history/map/HistoryMap";
import React from "react";

type TripModalProps = {
  trip: CountryRecord;
};

type HoveredMarkerState = {
  dayIndex: number;
  markerIndex: number;
} | null;

const show = false;

function TripModal({ trip }: TripModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRotations = useRef<number[]>([]);
  const foodRotations = useRef<Record<string, number>>({});

  const coverCount = trip.coverCount || 1;
  const [activeCover, setActiveCover] = useState(0);

  const [hoveredMarker, setHoveredMarker] = useState<HoveredMarkerState>(null);
  const [hoveredPhotoMarker, setHoveredPhotoMarker] =
    useState<HoveredMarkerState>(null);

  if (imageRotations.current.length === 0) {
    imageRotations.current = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 19) - 9,
    );
  }

  useEffect(() => {
    if (coverCount <= 1) return;

    const interval = setInterval(() => {
      setActiveCover((prev) => (prev + 1) % coverCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [coverCount]);

  function getMonth(month: number | undefined): string {
    if (!month) return "";

    const months = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
    ];

    return months[month - 1] ?? "";
  }

  function getImagePath(folder: string, imgNumber: number): string {
    const fileName = String(imgNumber).padStart(3, "0");
    return `/trips/${folder}/img/${fileName}.jpg`;
  }

  if (!trip.history) return <></>;

  return (
    <div ref={scrollRef} className="trip-modal">
      <header className="trip-modal-header">
        <div
          className="header-cover"
          onClick={() => {
            scrollRef.current?.scrollBy({
              top: window.innerHeight * 1.1,
              behavior: "smooth",
            });
          }}
        >
          {Array.from({ length: coverCount }, (_, i) => (
            <img
              key={`cover-${i}`}
              src={`/trips/${trip.folder}/cover/cover-${i + 1}.jpg`}
              alt=""
              className={activeCover === i ? "active" : ""}
            />
          ))}
        </div>

        <trip.flag />

        <h1>{trip.name}</h1>
        {trip.country && <h2>{trip.country}</h2>}

        <h3>
          {trip.year} {getMonth(trip.month)}
        </h3>

        <div className="flags">
          {trip.flags?.map((flag, i) => (
            <React.Fragment key={`f-${i}`}>{flag}</React.Fragment>
          ))}
        </div>

        <div className="header-decorator"></div>
      </header>

      {trip.history && trip.history.length > 0 && (
        <div className="history-timeline">
          {trip.history.map((day, index) => {
            const isEven = (index + 1) % 2 === 0;
            const parityClass = isEven ? "even" : "odd";

            const imagesCount = day.images?.length || 0;

            const imagesSection = (
              <section className={`history-day-images ${parityClass}-images`}>
                {day.images && day.images.length > 0 && (
                  <div
                    className={`photo-pile pile-count-${Math.min(imagesCount, 12)}`}
                  >
                    {day.images.slice(0, 12).map((imgNum, imgIndex) => {
                      const matchedMarkerIndex = day.position.points.findIndex(
                        (point) => point.imgs && point.imgs.includes(imgNum),
                      );

                      const activeMarkerPoint =
                        hoveredMarker !== null &&
                        hoveredMarker.dayIndex === index
                          ? day.position.points[hoveredMarker.markerIndex]
                          : null;

                      const isHovering =
                        activeMarkerPoint !== null &&
                        activeMarkerPoint?.imgs !== undefined &&
                        !activeMarkerPoint.imgs.includes(imgNum);

                      const styleProps = {
                        rotate: `${imageRotations.current[imgIndex]}deg`,
                        filter: isHovering
                          ? "brightness(50%)"
                          : "brightness(100%)",
                        zIndex: isHovering ? "-1" : "0",
                      };
                      const imageSrc = getImagePath(trip.folder, imgNum);
                      const caption = day.captions?.[imgNum];

                      return (
                        <div
                          key={`${imgNum}-${imgIndex}`}
                          className={`photo-card${caption ? " has-caption" : ""}`}
                          style={styleProps}
                          onMouseEnter={() => {
                            if (matchedMarkerIndex !== -1) {
                              setHoveredPhotoMarker({
                                dayIndex: index,
                                markerIndex: matchedMarkerIndex,
                              });
                            }
                          }}
                          onMouseLeave={() => {
                            setHoveredPhotoMarker(null);
                          }}
                        >
                          <img
                            src={imageSrc}
                            alt={
                              caption || `${day.name} zdjęcie ${imgIndex + 1}`
                            }
                            loading="lazy"
                          />

                          {caption && (
                            <div className="photo-caption">{caption}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            );

            const markerSection = (
              <section className={`history-day-marker ${parityClass}-marker`}>
                <div
                  className="history-marker"
                  onClick={() => {
                    scrollRef.current?.scrollBy({
                      top: 680,
                      behavior: "smooth",
                    });
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </section>
            );

            const activeMapMarker =
              hoveredMarker?.dayIndex === index
                ? hoveredMarker.markerIndex
                : hoveredPhotoMarker?.dayIndex === index
                  ? hoveredPhotoMarker.markerIndex
                  : null;

            const mapSection = (
              <section className={`history-day-map ${parityClass}-map`}>
                <div className="history-day-data">
                  <h3>{day.name}</h3>
                  <h5>{day.date}</h5>
                  <div className="negative-radius l-neg" />
                  <div className="negative-radius r-neg" />
                </div>

                {show ? (
                  <div className="history-map-frame">
                    {!day.hid && (
                      <HistoryMap
                        position={day.position}
                        hoveredMarker={activeMapMarker}
                        isFromPhoto={
                          hoveredMarker === null && hoveredPhotoMarker !== null
                        }
                        setHoveredMarker={(markerIdx) => {
                          if (typeof markerIdx === "number") {
                            setHoveredMarker({
                              dayIndex: index,
                              markerIndex: markerIdx,
                            });
                          } else {
                            setHoveredMarker(null);
                          }
                        }}
                      />
                    )}
                  </div>
                ) : (
                  <div className="history-map-frame">
                    <iframe
                      title={`Google Maps — ${trip.name}, ${day.date}`}
                      src={`https://maps.google.com/maps?q=${day.position.points[0].lat},${day.position.points[0].lng}&z=${Math.round(day.position.zoom)}&output=embed`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}

                {day.svg && (
                  <div className={`frame-icon`} style={day.svg.styles}>
                    {day.svg.item}
                  </div>
                )}
                {day.svg2 && (
                  <div className={`frame-icon`} style={day.svg2.styles}>
                    {day.svg2.item}
                  </div>
                )}

                {day.imgs && (
                  <div className="magnets">
                    {day.imgs.items.map((magnet, i) => (
                      <div className="magnet-place">
                        <div
                          className={`frame-img ${magnet.length % 2 === 0 ? "o" : "t"}`}
                          style={{
                            rotate:
                              magnet.length % 2 === 1
                                ? `-${magnet.length % 7}deg`
                                : `${magnet.length % 7}deg`,
                            zIndex: day.imgs!.items.length - i,
                          }}
                        >
                          <img
                            key={`m${magnet}`}
                            src={`/trips/${trip.folder}/icons/${magnet}.png`}
                            className={`magnet-img`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {day.sleep && (
                  <div className="day-sleep" style={day.sleep.styles}>
                    <div className="day-sleep-data">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#000000"
                          d="M294.8 26.57L238 60.37l7.8 13.17L281 52.59 270.8 118l6.3 10.6L336 93.53l-7.8-13.17-37.3 22.14L301 37.12l-6.2-10.55zM147.1 60.55A224 224 0 0 0 32 256a224 224 0 0 0 224 224 224 224 0 0 0 214.9-161.2A208 208 0 0 1 320 384a208 208 0 0 1-208-208 208 208 0 0 1 35.1-115.45zm244.5 52.05l-6.9 16.5 44.1 18.4-68.3 35.9-5.5 13.2 73.7 30.8 6.9-16.5-46.7-19.5 68.3-35.9 5.5-13.2-71.1-29.7zm-115 64l-97.8 35 8.1 22.7 60.6-21.7-35.4 97.9 6.5 18.1L320 292.4l-8.1-22.7-64.2 23 35.4-97.9-6.5-18.2z"
                        />
                      </svg>
                      {day.sleep.name}
                    </div>
                  </div>
                )}
              </section>
            );

            return (
              <article
                className={`history-day ${parityClass}-day`}
                key={`${day.date}-${index}`}
              >
                {isEven ? (
                  <>
                    {mapSection}
                    {markerSection}
                    {imagesSection}
                  </>
                ) : (
                  <>
                    {imagesSection}
                    {markerSection}
                    {mapSection}
                  </>
                )}

                <div
                  className={`history-day-decorator ${parityClass}-decorator`}
                >
                  <div className="history-day-decorator-top"></div>
                  <div className="history-day-decorator-bottom"></div>
                </div>
                {day.transit ? (
                  isEven ? (
                    <div className="history-day-transit">
                      {day.transit.from} ➤ {day.transit.to}
                    </div>
                  ) : (
                    <div className="history-day-transit">
                      {day.transit.to} ⮜ {day.transit.from}
                    </div>
                  )
                ) : (
                  ""
                )}

                {index === 0 && (
                  <>
                    <div
                      className={`history-day-decorator ${parityClass}-decorator start-decorator`}
                    >
                      <div className="history-day-decorator-top"></div>
                      <div className="history-day-decorator-bottom"></div>
                    </div>
                    <div
                      className={`history-day-decorator ${parityClass}-decorator start-decorator-2`}
                    >
                      <div className="history-day-decorator-top"></div>
                      <div className="history-day-decorator-bottom"></div>
                    </div>
                    {trip.transit && (
                      <div className="history-day-transit start-transit">
                        {trip.transit}
                      </div>
                    )}
                  </>
                )}
              </article>
            );
          })}
        </div>
      )}

      {(() => {
        const isEven = (trip.history.length + 1) % 2 === 0;
        const parityClass = isEven ? "even" : "odd";

        const summaryDataSection = (
          <div className="summary-data-container">
            <div className="summary-maps">
              {trip.maps && trip.maps[0] && (
                <div className="summary-map">
                  <div className="summary-map-item">
                    <HistoryMap
                      position={trip.maps[0]}
                      hoveredMarker={
                        hoveredMarker?.dayIndex === -1
                          ? hoveredMarker.markerIndex
                          : hoveredPhotoMarker?.dayIndex === -1
                            ? hoveredPhotoMarker.markerIndex
                            : null
                      }
                      setHoveredMarker={(markerIdx) => {
                        if (typeof markerIdx === "number") {
                          setHoveredMarker({
                            dayIndex: -1,
                            markerIndex: markerIdx,
                          });
                        } else {
                          setHoveredMarker(null);
                        }
                      }}
                    />
                  </div>
                </div>
              )}

              {trip.maps && trip.maps[1] && (
                <div className="summary-map">
                  <div className="summary-map-item">
                    <HistoryMap
                      position={trip.maps[1]}
                      hoveredMarker={
                        hoveredMarker?.dayIndex === -2
                          ? hoveredMarker.markerIndex
                          : hoveredPhotoMarker?.dayIndex === -2
                            ? hoveredPhotoMarker.markerIndex
                            : null
                      }
                      setHoveredMarker={(markerIdx) => {
                        if (typeof markerIdx === "number") {
                          setHoveredMarker({
                            dayIndex: -2,
                            markerIndex: markerIdx,
                          });
                        } else {
                          setHoveredMarker(null);
                        }
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {trip.food && (
              <div className="food-pile">
                {Object.entries(trip.food).map(([imgNum, caption]) => {
                  if (foodRotations.current[imgNum] === undefined) {
                    foodRotations.current[imgNum] =
                      Math.floor(Math.random() * 19) - 9;
                  }
                  const randomRotate = foodRotations.current[imgNum];
                  const imageSrc = getImagePath(trip.folder, Number(imgNum));

                  return (
                    <div key={imgNum} className="food-container">
                      <div
                        className="photo-card food-card has-caption"
                        style={{ rotate: `${randomRotate}deg` }}
                      >
                        <img src={imageSrc} alt={caption} loading="lazy" />
                        <div className="photo-caption">{caption}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );

        const summaryMarkerSection = <div className="summary-decorator" />;

        const summaryVideoSection = (
          <div className="summary-video-container">
            <video src={`/trips/${trip.folder}/cover/summary.mp4`} controls />
            <div className="video-label">
              {trip.name} {trip.year}
            </div>
          </div>
        );

        return (
          <div className={`trip-summary-section ${parityClass}`}>
            {isEven ? (
              <>
                {summaryDataSection}
                {summaryMarkerSection}
                {summaryVideoSection}
              </>
            ) : (
              <>
                {summaryVideoSection}
                {summaryMarkerSection}
                {summaryDataSection}
              </>
            )}
          </div>
        );
      })()}
    </div>
  );
}

export default TripModal;
