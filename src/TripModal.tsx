import { useEffect, useState } from "react";
import "./trip-modal.css";

type Trip = {
  name: string;
  year: number;
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
      (_, i) => `${trip.folder}/${String(i + 1).padStart(3, "0")}.jpg`,
    );

    setImages(photos);
  }, [trip.folder, imgCount]);

  useEffect(() => {
    setTimeout(() => {
      setScattered(true);
    }, 500);
  }, []);

  const coverImages = images.slice(0, 12);
  const Map = trip.map;

  return (
    <div className="trip-modal">
      <header className="trip-modal-header">
        <h1>{trip.name}</h1>
        <span>{trip.year}</span>
      </header>

      <section className={`trip-cover ${scattered ? "scattered" : ""}`}>
        <div className="photo-stack">
          {coverImages.map((image, index) => (
            <img
              key={image + index}
              src={image}
              className={`stack-photo stack-photo-${index}`}
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
