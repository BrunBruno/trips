import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
} from "react";
import "./trip-modal.css";
import type { CountryRecord } from "./types";
import HistoryMap from "./history/map/HistoryMap";
import GetSvg from "./svg/svg/GetSvg";

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
          {coverBg ? (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="m0 0h32v32h-32z" />
                <path
                  d="m24 2c4.418278 0 8 3.581722 8 8v12c0 4.418278-3.581722 8-8 8h-16c-4.418278 0-8-3.581722-8-8v-12c0-4.418278 3.581722-8 8-8zm-15.15704017 11.3933983-6.84295983 6.8426017v1.764c0 3.2383969 2.56557489 5.8775718 5.77506174 5.9958615l.22493826.0041385h15.45zm21.15704017-1.8643983-10.096 10.097 6.048224 6.0492469c2.2878684-.7868384 3.9503124-2.9181728 4.0436375-5.4503086l.0041385-.2249383zm-6-7.529h-16c-3.23839694 0-5.87757176 2.56557489-5.99586153 5.77506174l-.00413847.22493826v7.407l5.42874627-5.4278153c.74554637-.7455464 1.93326028-.7794348 2.71900373-.1016654l.1094234.1016654 8.2318266 8.2318153 11.3946671-11.39268045c-.5346164-2.67667729-2.8501212-4.71066623-5.6587288-4.81418108zm-5.4 2c2.209139 0 4 1.790861 4 4s-1.790861 4-4 4-4-1.790861-4-4 1.790861-4 4-4zm0 2c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="m0 0h32v32h-32z" />
                <path
                  d="m24 2c4.418278 0 8 3.581722 8 8v12c0 4.418278-3.581722 8-8 8h-16c-4.418278 0-8-3.581722-8-8v-12c0-4.418278 3.581722-8 8-8zm3.9664169 10.0170472c-.3931622-.3878686-1.0263128-.383604-1.4141979.0095418l-8.064877 8.174411-7.3096788-7.3096867-.1065935-.0974039c-.6578416-.5483979-1.63218518-.4507514-2.24541524.1624787l-5.15541928 5.1554192-.07770636.0872208c-.31082546.3925177-.28492334.9643631.07770636 1.3269928l.08722082.0777064c.39251765.3108254.96436305.2849233 1.32699275-.0777064l4.95025505-4.950354 9.8989874 9.9001015.0872208.0777063c.3925176.3108255.964363.2849234 1.3269927-.0777063.3905243-.3905243.3905243-1.0236893 0-1.4142136l-1.4465627-1.4465548 8.0745839-8.1837549.0771171-.0877422c.3081746-.3946023.2784215-.9662603-.0866261-1.3264557zm-9.3664169-5.0170472c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4 4-1.790861 4-4-1.790861-4-4-4zm0 2c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                  fill="#fff"
                />
              </g>
            </svg>
          )}
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
                {day.trip && (
                  <div className="day-trip" style={day.trip.styles}>
                    <div className="day-trip-data">
                      <GetSvg t={day.trip.type} /> ➤ {day.trip.to}
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
