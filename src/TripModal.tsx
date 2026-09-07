import { useEffect, useState } from "react";
import "./trip-modal.css";
import type { CountryRecord } from "./data";

type TripModalProps = {
  trip: CountryRecord;
};

const imageCount = 24;

function TripModal({ trip }: TripModalProps) {
  const [scattered, setScattered] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const [nextZIndex, setNextZIndex] = useState(3);
  const [selectionOrder, setSelectionOrder] = useState<Record<number, number>>(
    {},
  );

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

  const getImgStyle = (index: number) => {
    const imageId = index + 1;
    const sel = selected === imageId;

    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    const columns = isPortrait ? 3 : 6;

    const xInd = sel ? -100 * (index % columns) + (isPortrait ? 100 : 250) : 50;

    const yInd = sel
      ? -100 * Math.floor(index / columns) + (isPortrait ? 350 : 150)
      : 50;

    const translate = sel ? "0,0" : "-50%,-50%";
    const rotate = sel ? 0 : randomStyles[index].rotate;

    const zIndex = sel
      ? 1000
      : (selectionOrder[imageId] ?? randomStyles[index].zIndex);

    const scale = sel ? 2 : 1;
    const brightness = !selected ? 100 : sel ? 100 : 50;

    return {
      left: `${xInd}%`,
      top: `${yInd}%`,
      zIndex,
      filter: `brightness(${brightness}%)`,
      transform: `translate(${translate}) rotate(${rotate}deg) scale(${scale})`,
    };
  };

  // const getImgStyle = (index: number) => {
  //   const imageId = index + 1;
  //   const sel = selected === imageId;

  //   const xInd = sel ? -100 * (index % 6) + 250 : 50;
  //   const yInd = sel ? -100 * Math.floor(index / 6) + 150 : 50;

  //   const translate = sel ? "0,0" : "-50%,-50%";
  //   const rotate = sel ? 0 : randomStyles[index].rotate;
  //   const zIndex = sel
  //     ? 1000
  //     : (selectionOrder[imageId] ?? randomStyles[index].zIndex);
  //   const scale = sel ? 2 : 1;
  //   const brightness = !selected ? 100 : sel ? 100 : 50;

  //   return {
  //     left: `${xInd}%`,
  //     top: `${yInd}%`,
  //     zIndex,
  //     filter: `brightness(${brightness}%)`,
  //     transform: `translate(${translate}) rotate(${rotate}deg) scale(${scale})`,
  //   };
  // };

  const coverImages = images.slice(0, imageCount);
  const Map = trip.map;

  return (
    <div className="trip-modal">
      <header className="trip-modal-header">
        <picture className="header-cover">
          {/* <source
            media="(orientation: portrait)"
            srcSet={`/trips/${trip.folder}/cover-p.jpg`}
          /> */}

          {/* <img src={`/trips/${trip.folder}/cover-l.jpg`} alt="" /> */}
          <img src={`/trips/${trip.folder}/cover.jpg`} alt="" />
        </picture>

        <trip.flag />

        <h1>{trip.name}</h1>
        <h2>{trip.country}</h2>

        <span>
          {trip.year} {getMonth(trip.month)}
        </span>
      </header>

      <section className={`trip-cover ${scattered ? "scattered" : ""}`}>
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
          <div className="map-container">
            <Map />
          </div>
        </section>
      )}
    </div>
  );
}

export default TripModal;
