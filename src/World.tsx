import { useState } from "react";
import {
  BaliMap,
  CieszynMap,
  CreteMap,
  CyprusMap,
  DohaMap,
  DubajMap,
  EuropeanUnionMap,
  KualaLumpurMap,
  MadeiraMap,
  MarsaAlamMap,
  OsloMap,
  SicilyMap,
  SplitMap,
} from "./map";
import {
  Tunisia,
  Turkey,
  Greece,
  Spain,
  Switzerland,
  France,
  Italy,
  Germany,
  Norway,
  Croatia,
  Bulgaria,
  Czechia,
  Austria,
  SriLanka,
  Indonesia,
  Malaysia,
  UAE,
  Qatar,
  Egypt,
  Madeira,
  Sicily,
  Cyprus,
} from "./svg";
import SriLankaMap from "./map/SriLankaMap";
import EuropeanUnion from "./svg/eeu";

const countries = [
  { name: "Sousse", year: 2008, flag: Tunisia },
  { name: "Alanya", year: 2010, flag: Turkey },
  { name: "Hurghada", year: 2012, flag: Egypt },
  { name: "Leptokaria", year: 2014, flag: Greece },

  { name: "Orebić", year: 2017, flag: Croatia },
  { name: "Złote Piaski", year: 2018, flag: Bulgaria },
  { name: "Złote Piaski", year: 2019, flag: Bulgaria },
  { name: "Kreta", year: 2021, flag: Greece, map: CreteMap },

  { name: "EuroTrip", year: 2022, flag: EuropeanUnion, map: EuropeanUnionMap },
  { name: "Wiedeń", year: 2022, flag: Austria },
  { name: "Berninapass", year: 2022, flag: Switzerland },
  { name: "Mediolan", year: 2022, flag: Italy },
  { name: "Cannes", year: 2022, flag: France },
  { name: "Lloret de Mar", year: 2022, flag: Spain },
  { name: "Paryż", year: 2022, flag: France },
  { name: "Berlin", year: 2022, flag: Germany },
  { name: "Praga", year: 2022, flag: Czechia },

  { name: "Cypr", year: 2023, flag: Cyprus, map: CyprusMap },
  { name: "Madera", year: 2023, flag: Madeira, map: MadeiraMap },
  { name: "Sycylia", year: 2023, flag: Sicily, map: SicilyMap },

  { name: "Oslo", year: 2024, flag: Norway, map: OsloMap },
  { name: "Dubaj", year: 2024, flag: UAE, map: DubajMap },
  { name: "Sri Lanka", year: 2024, flag: SriLanka, map: SriLankaMap },

  { name: "Marsa Alam", year: 2025, flag: Egypt, map: MarsaAlamMap },
  { name: "Doha", year: 2025, flag: Qatar, map: DohaMap },
  { name: "Kuala Lumpur", year: 2025, flag: Malaysia, map: KualaLumpurMap },
  { name: "Bali", year: 2025, flag: Indonesia, map: BaliMap },

  { name: "Split", year: 2026, flag: Croatia, map: SplitMap },
  { name: "Cieszyn", year: 2026, flag: Czechia, map: CieszynMap },
];

function World() {
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof countries)[number] | null
  >(null);
  const SelectedMap = selectedCountry?.map;

  return (
    <main className="world">
      <header className="header">{/* <h1>Zdjęcia Świat</h1> */}</header>

      <section className="country-grid">
        {countries.map((country, index) => {
          const Flag = country.flag;

          return (
            <article
              className="country-card"
              key={`${country.name}-${index}`}
              onClick={() => setSelectedCountry(country)}
            >
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

      {SelectedMap && (
        <div className="map-overlay">
          <button
            className="map-close"
            onClick={() => setSelectedCountry(null)}
          >
            ×
          </button>

          <SelectedMap />
        </div>
      )}
    </main>
  );
}

export default World;
