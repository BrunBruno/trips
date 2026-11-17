import { useEffect, useState } from "react";

import TripModal from "./TripModal";
import { countries } from "./data";

const countriesYearOrder = [...countries].sort(
  (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0),
);

const Idx = null;

function World() {
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof countries)[number] | null
  >(null);
  const [coverBg, setCoverBg] = useState<boolean>(true);

  useEffect(() => {
    setCoverBg(true);
  }, [selectedCountry]);

  // return (
  //   <div style={{ height: "100vh" }}>
  //     <HistoryMap
  //       position={{
  //         points: [
  //           { lat: 50.475412, lng: 19.081145, cap: "KTW" },
  //           { lat: 32.697667, lng: -16.774107, cap: "FNC" },
  //           { lat: 37.466681, lng: 15.064284, cap: "CTA" },
  //           { lat: 25.256664, lng: 55.368307, cap: "DXB" },
  //           { lat: 7.180399, lng: 79.884249, cap: "CMB" },
  //           { lat: 25.271518, lng: 51.600731, cap: "DOH" },
  //           { lat: 48.118233, lng: 16.566228, cap: "VIE" },
  //           { lat: 2.743373, lng: 101.701633, cap: "KUL" },
  //           { lat: -8.745633, lng: 115.168307, cap: "DPS" },
  //           { lat: 40.492736, lng: -3.563839, cap: "MAD" },
  //           { lat: 50.08043, lng: 19.788938, cap: "KRK" },
  //           { lat: -20.43071, lng: 57.679108, cap: "MRU" },
  //           { lat: 21.68543, lng: 39.166107, cap: "JED" },
  //           { lat: 43.536767, lng: 16.299004, cap: "SPU" },
  //           { lat: 35.760141, lng: 10.754125, cap: "MIR" },
  //           { lat: 36.297465, lng: 32.301315, cap: "GZP" },
  //           { lat: 27.180332, lng: 33.807341, cap: "HRG" },
  //           { lat: 25.555023, lng: 34.590764, cap: "RMF" },
  //           { lat: 35.339494, lng: 25.176086, cap: "HER" },
  //           { lat: 34.712181, lng: 32.488696, cap: "PFO" },
  //           { lat: 59.183896, lng: 10.258797, cap: "TRF" },
  //         ],
  //         zoom: 3,
  //       }}
  //     />
  //   </div>
  // );

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
                  <div className="info-year">
                    <span>{country.year}</span>
                    <span>{country.history?.length ?? 0}</span>
                  </div>
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
