import { useEffect, useRef, useState } from "react";
import "./trip-modal.css";
import type { CountryRecord } from "./types";

type TripModalProps = {
  trip: CountryRecord;
};

function TripModal({ trip }: TripModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const coverCount = trip.coverCount || 1;
  const [activeCover, setActiveCover] = useState(0);

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
    return `/trips/${folder}/${fileName}.jpg`;
  }

  function getPileStyle() {
    const rotate = Math.floor(Math.random() * 19) - 9;
    // const zIndex = Math.floor(Math.random() * 3) + 1;

    return {
      rotate: `${rotate}deg`,
      // zIndex: zIndex,
    };
  }

  return (
    <div ref={scrollRef} className="trip-modal">
      <header className="trip-modal-header">
        <div
          className="header-cover"
          onClick={() => {
            scrollRef.current?.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          {Array.from({ length: coverCount }, (_, i) => (
            <img
              key={i}
              src={`/trips/${trip.folder}/cover-${i + 1}.jpg`}
              alt=""
              className={activeCover === i ? "active" : ""}
            />
          ))}
        </div>

        <trip.flag />

        <h1>{trip.name}</h1>
        {trip.country && <h2>{trip.country}</h2>}

        <span>
          {trip.year} {getMonth(trip.month)}
        </span>

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
                      const styleProps = getPileStyle();
                      const imageSrc = getImagePath(trip.folder, imgNum);
                      const caption = day.captions?.[imgNum];

                      return (
                        <div
                          key={`${imgNum}-${imgIndex}`}
                          className={`photo-card${caption ? " has-caption" : ""}`}
                          style={styleProps}
                        >
                          <img
                            src={imageSrc}
                            alt={
                              caption || `${day.name} - zdjęcie ${imgIndex + 1}`
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
                      top: window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </section>
            );

            const mapSection = (
              <section className={`history-day-map ${parityClass}-map`}>
                <div className="history-day-data">
                  <h3>{day.name}</h3>
                  <h5>{day.date}</h5>
                  <div className="negative-radius l-neg"></div>
                  <div className="negative-radius r-neg"></div>
                </div>
                <div className="history-map-frame">
                  <iframe
                    title={`Google Maps — ${trip.name}, ${day.date}`}
                    src={`https://maps.google.com/maps?q=${day.position.lat},${day.position.lng}&z=${day.position.zoom}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {day.svg && (
                  <div className="frame-icon" style={day.svgStyles}>
                    {day.svg}
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

                {index === 0 && (
                  <div
                    className={`history-day-decorator ${parityClass}-decorator start-decorator`}
                  >
                    <div className="history-day-decorator-top"></div>
                    <div className="history-day-decorator-bottom"></div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TripModal;
