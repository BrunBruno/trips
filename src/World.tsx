import { useState } from "react";

import countries from "./data";
import TripModal from "./TripModal";

const countriesYearOrder = [...countries].sort(
  (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0),
);

const Idx = null;

function World() {
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof countries)[number] | null
  >(null);
  const [coverBg, setCoverBg] = useState<boolean>(true);

  return (
    <main className="world">
      {selectedCountry ? (
        <TripModal
          trip={selectedCountry}
          coverBg={coverBg}
          setCoverBg={setCoverBg}
        />
      ) : (
        <section className="country-grid">
          {countriesYearOrder.map((country, index) => {
            const Flag = country.flag;

            if (Idx !== null && Idx !== index) return <></>;

            return (
              <article
                className="country-card"
                key={`${country.name}-${index}`}
                onClick={() => setSelectedCountry(country)}
              >
                <div
                  className="country-card-bg"
                  style={{
                    backgroundImage: `url(/trips/${country.folder}/cover/thumbnail.jpg)`,
                  }}
                />

                <div className="flag">
                  <Flag />
                </div>

                <div className="country-info">
                  <h2>{country.name}</h2>
                  <span>
                    {country.year} ({country.history?.length ?? 0})
                  </span>
                </div>
              </article>
            );
          })}
        </section>
      )}

      {selectedCountry && (
        <button
          className="trip-modal-close"
          style={coverBg ? {} : { backgroundColor: "#0000", boxShadow: "none" }}
          onClick={() => setSelectedCountry(null)}
        >
          ×
        </button>
      )}
    </main>
  );
}

export default World;
