import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./trip-modal.css";
import type { CountryRecord } from "./data";

type TripModalProps = {
  trip: CountryRecord;
  imgDataCount?: number;
};

const defSize = 24;

function TripModal({ trip, imgDataCount }: TripModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [scattered, setScattered] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const [nextZIndex, setNextZIndex] = useState(3);
  const [selectionOrder, setSelectionOrder] = useState<Record<number, number>>(
    {},
  );

  const imageCount = imgDataCount ? imgDataCount : defSize;
  const windowCount = imageCount / defSize;

  const [randomStyles] = useState(() =>
    Array.from({ length: imageCount }, () => ({
      rotate: Math.random() * 40 - 20,
      zIndex: Math.floor(Math.random() * 2 + 1),
    })),
  );

  useEffect(() => {
    const photos = Array.from(
      { length: imageCount },
      (_, i) => `${trip.folder}/${String(i + 1).padStart(3, "0")}.jpg`,
    );

    setImages(photos);
  }, [trip.folder]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScattered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  function getMonth(month: number | undefined): string {
    if (!month) return "";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return months[month - 1] ?? "";
  }

  const getImgStyle = (index: number): CSSProperties => {
    const imageId = index + 1;
    const sel = selected === imageId;

    const isScreenHorizontal = window.matchMedia(
      "(orientation: landscape)",
    ).matches;

    const img =
      document.querySelectorAll<HTMLImageElement>(".photo-con img")[index];

    const isImageHorizontal = img ? img.naturalWidth > img.naturalHeight : true;

    const sameOrientation = isScreenHorizontal === isImageHorizontal;
    const scale = sel ? (sameOrientation ? 2.4 : 1.8) : 1;

    const xInd = 50;
    const yInd = 50;
    const translate = "-50%,-50%";

    const rotate = sel ? 0 : randomStyles[index].rotate;

    const zIndex = sel
      ? 1000
      : (selectionOrder[imageId] ?? randomStyles[index].zIndex);

    const brightness = !selected ? 100 : sel ? 100 : 50;

    const pos = sel ? "fixed" : "absolute";

    return {
      position: pos,
      left: `${xInd}%`,
      top: `${yInd}%`,
      zIndex,
      filter: `brightness(${brightness}%)`,
      transform: `translate(${translate}) rotate(${rotate}deg) scale(${scale})`,
    };
  };

  const coverImages = images.slice(0, imageCount);

  return (
    <div ref={scrollRef} className="trip-modal">
      <header className="trip-modal-header">
        <picture className="header-cover">
          <img
            src={`/trips/${trip.folder}/cover.jpg`}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => {
              scrollRef.current?.scrollBy({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          />
        </picture>

        <trip.flag />

        <h1>{trip.name}</h1>
        <h2>{trip.country}</h2>

        <span>
          {trip.year} {getMonth(trip.month)}
        </span>
      </header>

      <section
        className={`trip-cover ${scattered ? "scattered" : ""}`}
        style={{ height: `${windowCount * 128}dvh` }}
      >
        <div className="photo-stack">
          {coverImages.map((image, index) => (
            <div key={image + index} className="stack-element">
              <div className="photo-con" style={getImgStyle(index)}>
                <img
                  src={image}
                  className={`stack-photo stack-photo-${index}`}
                  onClick={() => {
                    const imageId = index + 1;

                    setSelected((prev) => {
                      if (prev === imageId) {
                        setSelectionOrder((order) => ({
                          ...order,
                          [imageId]: nextZIndex,
                        }));

                        setNextZIndex((value) => value + 1);

                        return 0;
                      }

                      return imageId;
                    });
                  }}
                  onLoad={(e) => {
                    const img = e.currentTarget;

                    img.classList.toggle(
                      "portrait",
                      img.naturalHeight > img.naturalWidth,
                    );

                    img.classList.toggle(
                      "landscape",
                      img.naturalWidth > img.naturalHeight,
                    );

                    img.classList.toggle(
                      "square",
                      img.naturalWidth === img.naturalHeight,
                    );
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {Map && (
        <section className="trip-map">
          <div className="map-container">{trip.map}</div>
        </section>
      )}
    </div>
  );
}

export default TripModal;
