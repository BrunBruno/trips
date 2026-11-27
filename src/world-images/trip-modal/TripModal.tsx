import {
  type Dispatch,
  type SetStateAction,
  useRef,
  useState,
  useEffect,
  type CSSProperties,
} from "react";
import HistoryMap from "../../history/map/HistoryMap";
import GetSvg from "../../svg/svg/GetSvg";
import ImgSvg from "../../svg/svg/img";
import SleepSvg from "../../svg/svg/sleep";
import type { CountryRecord } from "../../types";
import "./trip-modal.css";

type TripModalProps = {
  trip: CountryRecord;
  coverBg: boolean;
  setCoverBg: Dispatch<SetStateAction<boolean>>;
};

type HoveredMarkerState = {
  dayIndex: number;
  markerIndex: number;
} | null;

const show = true;

function TripModal({ trip, coverBg, setCoverBg }: TripModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRotations = useRef<number[]>([]);

  const coverCount = trip.coverCount || 1;
  const [activeCover, setActiveCover] = useState<number>(0);

  const [hoveredMarker, setHoveredMarker] = useState<HoveredMarkerState>(null);
  const [hoveredPhotoMarker, setHoveredPhotoMarker] =
    useState<HoveredMarkerState>(null);
  const [hoveredMarker2, setHoveredMarker2] =
    useState<HoveredMarkerState>(null);
  const [hoveredPhotoMarker2, setHoveredPhotoMarker2] =
    useState<HoveredMarkerState>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    dayIndex: number;
    imgNum: number;
    imageSrc: string;
  } | null>(null);
  const [showImg, setShowImg] = useState<boolean>(false);

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
      <header className={`trip-modal-header ${coverBg ? "" : "covers"}`}>
        <div className="header-cover">
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

        <div
          className="header-decorator"
          onClick={() => {
            scrollRef.current?.scrollBy({
              top: window.innerHeight * 1.1,
              behavior: "smooth",
            });
          }}
        ></div>

        <div
          className="switch-cover"
          onClick={() => {
            setCoverBg((prev) => !prev);
          }}
        >
          {coverBg ? <ImgSvg t={true} /> : <ImgSvg t={false} />}
        </div>
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
                    className={`photo-pile pile-count-${Math.min(imagesCount, 25)}`}
                  >
                    {day.images.slice(0, 25).map((imgNum, imgIndex) => {
                      const isSelectedPhoto =
                        selectedPhoto?.dayIndex === index &&
                        selectedPhoto?.imgNum === imgNum;

                      const matchedMarkerIndex = day.position.points.findIndex(
                        (point) => point.imgs && point.imgs.includes(imgNum),
                      );

                      const matchedMarkerIndex2 =
                        day.position2 === undefined
                          ? -1
                          : day.position2.points.findIndex(
                              (point) =>
                                point.imgs && point.imgs.includes(imgNum),
                            );

                      const activeMarkerPoint =
                        hoveredMarker !== null &&
                        hoveredMarker.dayIndex === index
                          ? day.position.points[hoveredMarker.markerIndex]
                          : null;
                      const activeMarkerPoint2 =
                        hoveredMarker2 !== null &&
                        day.position2 !== undefined &&
                        hoveredMarker2.dayIndex === index
                          ? day.position2.points[hoveredMarker2.markerIndex]
                          : null;

                      const isHovering =
                        activeMarkerPoint !== null &&
                        activeMarkerPoint?.imgs !== undefined &&
                        !activeMarkerPoint.imgs.includes(imgNum);
                      const isHovering2 =
                        activeMarkerPoint2 !== null &&
                        activeMarkerPoint2?.imgs !== undefined &&
                        !activeMarkerPoint2.imgs.includes(imgNum);

                      const styleProps: CSSProperties = {
                        rotate: `${imageRotations.current[imgIndex]}deg`,
                        filter:
                          isHovering ||
                          isHovering2 ||
                          selectedPhoto?.dayIndex === index
                            ? "brightness(50%)"
                            : "brightness(100%)",
                        zIndex: isHovering || isHovering2 ? "-1" : "0",
                        pointerEvents:
                          selectedPhoto?.dayIndex === index ? "none" : "all",
                      };
                      const imageSrc = getImagePath(trip.folder, imgNum);
                      // const hasCaption = day.captions?.[imgNum] !== undefined;
                      const caption = day.captions?.[imgNum] ?? ".....";

                      return (
                        <div
                          key={`${imgNum}-${imgIndex}`}
                          className={`photo-card${caption ? " has-caption" : ""}`}
                          style={styleProps}
                          onClick={() => {
                            setSelectedPhoto(
                              isSelectedPhoto
                                ? null
                                : {
                                    dayIndex: index,
                                    imgNum: imgNum,
                                    imageSrc: imageSrc,
                                  },
                            );
                            setShowImg(true);
                          }}
                          onMouseEnter={() => {
                            if (matchedMarkerIndex !== -1) {
                              setHoveredPhotoMarker({
                                dayIndex: index,
                                markerIndex: matchedMarkerIndex,
                              });
                            }
                            if (matchedMarkerIndex2 !== -1) {
                              setHoveredPhotoMarker2({
                                dayIndex: index,
                                markerIndex: matchedMarkerIndex2,
                              });
                            }
                          }}
                          onMouseLeave={() => {
                            setHoveredPhotoMarker(null);
                            setHoveredPhotoMarker2(null);
                          }}
                        >
                          <img
                            src={imageSrc}
                            alt={
                              caption || `${day.name} zdjęcie ${imgIndex + 1}`
                            }
                            loading="lazy"
                          />

                          <div
                            className="photo-caption"
                            // style={hasCaption ? {} : { color: "#fff" }}
                          >
                            {caption}
                          </div>
                        </div>
                      );
                    })}

                    <div
                      className="selected-image"
                      style={
                        showImg && index === selectedPhoto?.dayIndex
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0, opacity: 0 }
                      }
                      onClick={() => {
                        setShowImg(false);
                        setTimeout(() => {
                          setSelectedPhoto(null);
                        }, 300);
                      }}
                    >
                      {selectedPhoto && (
                        <img src={selectedPhoto.imageSrc} loading="lazy" />
                      )}
                    </div>
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

            const selectedPhotoMarkerIndex =
              selectedPhoto?.dayIndex === index
                ? day.position.points.findIndex((point) =>
                    point.imgs?.includes(selectedPhoto.imgNum),
                  )
                : -1;

            const activeMapMarker =
              selectedPhotoMarkerIndex !== -1
                ? selectedPhotoMarkerIndex
                : hoveredMarker?.dayIndex === index
                  ? hoveredMarker.markerIndex
                  : hoveredPhotoMarker?.dayIndex === index
                    ? hoveredPhotoMarker.markerIndex
                    : null;

            const selectedPhotoMarkerIndex2 =
              selectedPhoto?.dayIndex === index && day.position2
                ? day.position2.points.findIndex((point) =>
                    point.imgs?.includes(selectedPhoto.imgNum),
                  )
                : -1;

            const activeMapMarker2 =
              selectedPhotoMarkerIndex2 !== -1
                ? selectedPhotoMarkerIndex2
                : hoveredMarker2?.dayIndex === index
                  ? hoveredMarker2.markerIndex
                  : hoveredPhotoMarker2?.dayIndex === index
                    ? hoveredPhotoMarker2.markerIndex
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
                  <div
                    className="history-map"
                    style={day.position2 ? { marginTop: "6rem" } : {}}
                  >
                    <div
                      className="history-map-frame"
                      style={
                        day.position2 !== undefined
                          ? { borderTopLeftRadius: 0, borderTopRightRadius: 0 }
                          : {}
                      }
                    >
                      {!day.hid && (
                        <HistoryMap
                          position={day.position}
                          hoveredMarker={activeMapMarker}
                          isFromPhoto={
                            hoveredMarker === null &&
                            hoveredPhotoMarker !== null
                          }
                          setHoveredMarker={(markerIdx) => {
                            if (!selectedPhoto) {
                              if (typeof markerIdx === "number") {
                                setHoveredMarker({
                                  dayIndex: index,
                                  markerIndex: markerIdx,
                                });
                              } else {
                                setHoveredMarker(null);
                              }
                            }
                          }}
                        />
                      )}
                    </div>
                    {!day.hid && day.position2 && (
                      <div className="minimap">
                        <HistoryMap
                          position={day.position2}
                          hoveredMarker={activeMapMarker2}
                          isFromPhoto={
                            hoveredMarker2 === null &&
                            hoveredPhotoMarker2 !== null
                          }
                          setHoveredMarker={(markerIdx) => {
                            if (typeof markerIdx === "number") {
                              setHoveredMarker2({
                                dayIndex: index,
                                markerIndex: markerIdx,
                              });
                            } else {
                              setHoveredMarker2(null);
                            }
                          }}
                        />
                      </div>
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
                      <SleepSvg />
                      {day.sleep.name}
                    </div>
                  </div>
                )}
                {day.trip && (
                  <div className="day-trip" style={day.trip.styles}>
                    <div className="day-trip-data">
                      <GetSvg t={day.trip.type} />➤ {day.trip.to}
                    </div>
                  </div>
                )}

                {day.food && (
                  <div className="food-container" style={day.food.styles}>
                    <div className=" food-card has-caption">
                      <img
                        src={getImagePath(trip.folder, Number(day.food.img))}
                        alt={day.food.name}
                        loading="lazy"
                      />
                      <div className="photo-caption">{day.food.name}</div>
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
                      {day.transit.from} <GetSvg t={day.transit.type} />➤{" "}
                      {day.transit.to}
                    </div>
                  ) : (
                    <div className="history-day-transit">
                      {day.transit.to} ⮜<GetSvg t={day.transit.type} />{" "}
                      {day.transit.from}
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
                        {trip.transit.from} <GetSvg t={trip.transit.type} />➤{" "}
                        {trip.transit.through !== undefined &&
                          `${trip.transit.through} ➤ `}{" "}
                        {trip.transit.to}
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
        if (!trip.maps) return <></>;

        const isEven = (trip.history.length + 1) % 2 === 0;
        const parityClass = isEven ? "even" : "odd";

        const summaryDataSection = (
          <div className="summary-maps">
            {trip.maps && trip.maps[0] && (
              <div className="summary-map">
                <div className="summary-map-item">
                  <HistoryMap
                    position={trip.maps[0]}
                    hoveredMarker={
                      hoveredMarker?.dayIndex === -2
                        ? hoveredMarker.markerIndex
                        : null
                    }
                    setHoveredMarker={(markerIdx) => {
                      if (!selectedPhoto) {
                        if (typeof markerIdx === "number") {
                          setHoveredMarker({
                            dayIndex: -2,
                            markerIndex: markerIdx,
                          });
                        } else {
                          setHoveredMarker(null);
                        }
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
                      hoveredMarker?.dayIndex === -1
                        ? hoveredMarker.markerIndex
                        : null
                    }
                    setHoveredMarker={(markerIdx) => {
                      if (!selectedPhoto) {
                        if (typeof markerIdx === "number") {
                          setHoveredMarker({
                            dayIndex: -1,
                            markerIndex: markerIdx,
                          });
                        } else {
                          setHoveredMarker(null);
                        }
                      }
                    }}
                  />
                </div>
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
            <div className="country-map">
              <img src={`/trips/${trip.folder}/cover/map.png`} />
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
