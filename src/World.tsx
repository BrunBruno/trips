import { useState } from "react";

import countries from "./data";
import TripModal from "./TripModal";

const countriesYearOrder = [...countries].sort((a, b) => b.year - a.year);

function World() {
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof countries)[number] | null
  >(null);

  return (
    <main className="world">
      {selectedCountry ? (
        <TripModal
          trip={selectedCountry}
          imgDataCount={selectedCountry.imgCount}
        />
      ) : (
        <section className="country-grid">
          {countriesYearOrder.map((country, index) => {
            const Flag = country.flag;

            return (
              <article
                className="country-card"
                key={`${country.name}-${index}`}
                onClick={() => setSelectedCountry(country)}
              >
                <div
                  className="country-card-bg"
                  style={{
                    backgroundImage: `url(/trips/${country.folder}/thumbnail.jpg)`,
                  }}
                />

                <div className="flag">
                  <Flag />
                </div>

                <div className="country-info">
                  <h2>{country.name}</h2>
                  <span>{country.year}</span>
                </div>
              </article>
            );
          })}
        </section>
      )}

      {selectedCountry && (
        <button
          className="trip-modal-close"
          onClick={() => setSelectedCountry(null)}
        >
          ×
        </button>
      )}
    </main>
  );
}

export default World;
