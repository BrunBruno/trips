import { useEffect, useRef, useState } from "react";
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

type GalleryImage = {
  src: string;
  width: number;
  height: number;
  ratio: number;
  orientation: "landscape" | "portrait" | "square";
};

function buildRows(
  images: GalleryImage[],
  containerWidth: number,
  targetRowHeight = 220,
  gap = 8,
): GalleryImage[][] {
  const rows: GalleryImage[][] = [];

  let row: GalleryImage[] = [];

  const getRowWidth = (items: GalleryImage[]) => {
    const ratio = items.reduce((sum, image) => sum + image.ratio, 0);

    return ratio * targetRowHeight + (items.length - 1) * gap;
  };

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    const testRow = [...row, image];

    if (row.length > 0 && getRowWidth(testRow) > containerWidth) {
      rows.push(row);
      row = [image];
    } else {
      row = testRow;
    }
  }

  if (row.length > 0) {
    rows.push(row);
  }

  return rows;
}

function TripModal({ trip, imgCount }: TripModalProps) {
  const [scattered, setScattered] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const [loadedImages, setLoadedImages] = useState<GalleryImage[]>([]);
  const [galleryWidth, setGalleryWidth] = useState(0);

  const galleryRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const modal = document.querySelector<HTMLElement>(".trip-modal");

  //   if (!modal) return;

  //   const sections = Array.from(
  //     modal.querySelectorAll<HTMLElement>(
  //       ".trip-modal-header, .trip-cover, .trip-map, .trip-gallery",
  //     ),
  //   );

  //   let currentIndex = 0;
  //   let locked = false;

  //   const handleWheel = (e: WheelEvent) => {
  //     e.preventDefault();

  //     if (locked) return;

  //     const delta = e.deltaY;

  //     if (Math.abs(delta) < 1) return;

  //     const direction = delta > 0 ? 1 : -1;

  //     const nextIndex = Math.max(
  //       0,
  //       Math.min(currentIndex + direction, sections.length - 1),
  //     );

  //     if (nextIndex === currentIndex) return;

  //     currentIndex = nextIndex;
  //     locked = true;

  //     sections[currentIndex].scrollIntoView({
  //       // behavior: "smooth",
  //       block: "start",
  //     });

  //     // Prevent one wheel gesture from triggering multiple sections
  //     window.setTimeout(() => {
  //       locked = false;
  //     }, 900);
  //   };

  //   modal.addEventListener("wheel", handleWheel, {
  //     passive: false,
  //   });

  //   return () => {
  //     modal.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  useEffect(() => {
    const photos = Array.from(
      { length: imgCount },
      (_, i) =>
        `${trip.folder}/thumbnail/${String(i + 1).padStart(3, "0")}.jpg`,
    );

    setImages(photos);
  }, [trip.folder, imgCount]);

  useEffect(() => {
    if (images.length === 0) {
      setLoadedImages([]);
      return;
    }

    let cancelled = false;

    const loadImages = async () => {
      const result = await Promise.all(
        images.map(
          (src) =>
            new Promise<GalleryImage>((resolve, reject) => {
              const img = new Image();

              img.onload = () => {
                const originalRatio = img.naturalWidth / img.naturalHeight;

                let orientation: GalleryImage["orientation"];
                let ratio: number;

                if (originalRatio > 1.05) {
                  orientation = "landscape";
                  ratio = Math.min(originalRatio, 5 / 4);
                } else if (originalRatio < 0.95) {
                  orientation = "portrait";
                  ratio = Math.max(originalRatio, 4 / 5);
                } else {
                  orientation = "square";
                  ratio = 1;
                }

                resolve({
                  src,
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                  ratio,
                  orientation,
                });
              };

              img.onerror = () => {
                reject(new Error(`Could not load image: ${src}`));
              };

              img.src = src;
            }),
        ),
      );

      if (!cancelled) {
        setLoadedImages(result);
      }
    };

    loadImages();

    return () => {
      cancelled = true;
    };
  }, [images]);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const updateWidth = () => {
      setGalleryWidth(gallery.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);

    observer.observe(gallery);

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const coverImages = images.slice(0, 12);
  const Map = trip.map;

  const galleryRows =
    galleryWidth > 0 ? buildRows(loadedImages, galleryWidth, 220, 8) : [];

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
          <div className="map-container">
            <Map />
          </div>
        </section>
      )}

      <section className="trip-gallery" ref={galleryRef}>
        {galleryRows.map((row, rowIndex) => {
          const gap = 8;

          const totalRatio = row.reduce((sum, image) => sum + image.ratio, 0);

          const totalGap = (row.length - 1) * gap;

          const isLastRow = rowIndex === galleryRows.length - 1;

          let rowHeight = (galleryWidth - totalGap) / totalRatio;

          if (isLastRow) {
            rowHeight = Math.min(rowHeight, 220);
          }

          return (
            <div
              className={`gallery-row ${isLastRow ? "gallery-row-last" : ""}`}
              key={rowIndex}
              style={{
                height: rowHeight,
              }}
            >
              {row.map((image) => (
                <div
                  className="gallery-item"
                  key={image.src}
                  style={{
                    width: image.ratio * rowHeight,
                    height: rowHeight,
                  }}
                >
                  <img src={image.src} alt="" />
                </div>
              ))}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default TripModal;
