import { useEffect, useState } from "react";
import "./trip-modal.css";

type Trip = {
  name: string;
  year: number;
  month?: number;
  folder: string;
  map?: React.ComponentType;
};

type TripModalProps = {
  trip: Trip;
  imgCount: number;
};

function TripModal({ trip, imgCount }: TripModalProps) {
  const [scattered, setScattered] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const photos = Array.from(
      { length: imgCount },
      (_, i) =>
        `${trip.folder}/thumbnail/${String(i + 1).padStart(3, "0")}.jpg`,
    );

    setImages(photos);
  }, [trip.folder, imgCount]);

  useEffect(() => {
    setTimeout(() => {
      setScattered(true);
    }, 500);
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

    return months[month - 1];
  }

  const coverImages = images.slice(0, 12);
  const Map = trip.map;

  return (
    <div className="trip-modal">
      <header className="trip-modal-header">
        <h1>{trip.name}</h1>
        <span>
          {trip.year} {getMonth(trip.month)}
        </span>
      </header>

      <section className={`trip-cover ${scattered ? "scattered" : ""}`}>
        <div className="photo-stack">
          {coverImages.map((image, index) => (
            <img
              key={image + index}
              src={image}
              className={`stack-photo stack-photo-${index}`}
              alt=""
              style={{ zIndex: 12 - index }}
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
          ))}
        </div>
      </section>

      {Map && (
        <section className="trip-map">
          {/*  */}
          <Map />
        </section>
      )}

      <section className="trip-gallery">
        {images.map((image) => (
          <img key={image} src={image} alt="" loading="lazy" />
        ))}
      </section>
    </div>
  );
}

export default TripModal;
