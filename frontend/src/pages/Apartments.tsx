import "./Apartments.css";
import { useEffect, useState } from "react";
// komponente
import FilterButton from "../components/FilterButton";
import PriceSlider from "../components/PriceSlider";
import RoomsSlider from "../components/RoomsSlider";
import FloorSlider from "../components/FloorSlider";
import Search from "../components/Search";

import api from "../api";
import type { Apartment } from "../Apartment";
import { Link } from "react-router-dom";

// vrednosti filtera
const towers = ["I", "II", "III"] as const;
const floors = ["2-10", "11-18", "19-27", "28-30"] as const;
const orientations = [
  "Schneeberg",
  "Inner Stadt",
  "Sonnenaufgang",
  "Prater",
] as const;

function Apartments() {
  // FILTERI
  const [selectedTowers, setSelectedTowers] = useState<string[]>([]);
  const [selectedFloors, setSelectedFloors] = useState<string[]>([]);
  const [selectedOrientations, setSelectedOrientations] = useState<string[]>(
    [],
  );

  // SLIDERI
  const [price, setPrice] = useState(670000);
  const [rooms, setRooms] = useState(1);
  const [floor, setFloor] = useState(1);

  // LISTA APARTMANA
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // FETCH APARTMANA
  useEffect(() => {
    api
      .get("apartments/")
      .then((res) => {
        console.log("RAW response from API:", res.data);
        setApartments(res.data);
        setFilteredApartments(res.data); // odmah prikazujemo sve apartmane
      })
      .catch(console.error);
  }, []);

  // TOGGLE helper - za checkbox-eve
  const toggleValue = (
    value: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setList(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    );
  };

  // SEARCH funkcija - primenjuje filtere
  const handleSearch = () => {
    let result = apartments;

    if (selectedTowers.length)
      result = result.filter((a) => selectedTowers.includes(a.tower));
    if (selectedOrientations.length)
      result = result.filter((a) =>
        selectedOrientations.includes(a.orientation),
      );

    result = result.filter(
      (a) => a.price <= price && a.rooms >= rooms && a.floor >= floor,
    );

    console.log("Filtered apartments to map:", result);
    setFilteredApartments(result);
    setExpandedId(null);
  };

  // CLEAR FILTERS
  const clearFilters = () => {
    setSelectedTowers([]);
    setSelectedFloors([]);
    setSelectedOrientations([]);
    setPrice(670000);
    setRooms(1);
    setFloor(1);
    setFilteredApartments(apartments);
    setExpandedId(null);
  };

  // toggle za prikaz detalja apartmana
  const handleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="apartments">
      <h1>Apartment Finder</h1>

      {/* FILTERI */}
      <div className="search">
        <p>Select tower</p>
        <div className="filter-group">
          {towers.map((t) => (
            <FilterButton
              key={t}
              isActive={selectedTowers.includes(t)}
              onClick={() => toggleValue(t, selectedTowers, setSelectedTowers)}
            >
              Tower {t}
            </FilterButton>
          ))}
        </div>

        <p>Select floor range</p>
        <div className="filter-group">
          {floors.map((f) => (
            <FilterButton
              key={f}
              isActive={selectedFloors.includes(f)}
              onClick={() => toggleValue(f, selectedFloors, setSelectedFloors)}
            >
              {f}
            </FilterButton>
          ))}
        </div>

        <PriceSlider value={price} onChange={setPrice} />
        <RoomsSlider value={rooms} onChange={setRooms} />
        <FloorSlider value={floor} onChange={setFloor} />

        <p>Select orientation</p>
        <div className="filter-group">
          {orientations.map((o) => (
            <FilterButton
              key={o}
              isActive={selectedOrientations.includes(o)}
              onClick={() =>
                toggleValue(o, selectedOrientations, setSelectedOrientations)
              }
            >
              {o}
            </FilterButton>
          ))}
        </div>

        {/* SEARCH i CLEAR */}
        <Search onClick={handleSearch}>SEARCH</Search>
        <button className="clear-filters" onClick={clearFilters}>
          CLEAR FILTERS
        </button>
      </div>

      {/* RESULTS */}
      <div className="results">
        <div className="apartment-card prva">
          <p>Apartment</p>
          <p>Price</p>
          <p>Rooms</p>
          <p>Floor</p>
          <p>Area (m²)</p>
          <p>Tower</p>

          <p>Orientation</p>
        </div>

        {filteredApartments.length === 0 && (
          <p className="noresult">No apartments found</p>
        )}

        {filteredApartments.map((ap) => {
          console.log("Apartment in map:", ap);
          return (
            <div key={ap.id} className="apartment-wrapper">
              <div
                className="apartment-card"
                onClick={() => handleExpand(ap.id)}
              >
                <p>{ap.title}</p>
                <p>{ap.price.toLocaleString()} €</p>
                <p>{ap.rooms}</p>
                <p>{ap.floor}</p>
                <p>{ap.floor_area}</p>
                <p>{ap.tower}</p>

                <p>{ap.orientation}</p>
              </div>

              <div
                className={`apartment-expanded ${expandedId === ap.id ? "open" : ""}`}
              >
                {expandedId === ap.id && (
                  <>
                    {ap.image && (
                      <img
                        src={`http://127.0.0.1:8000${ap.image}`}
                        alt={ap.title}
                        className="apartment-image"
                      />
                    )}
                    <Link
                      to="/contact"
                      className="interested"
                      state={{
                        message: `Hello,

I'm interested in ${ap.title}
Price: ${ap.price.toLocaleString()} €
Rooms: ${ap.rooms}
Floor Area: ${ap.floor_area} m²
Tower: ${ap.tower}
Orientation: ${ap.orientation}
Please contact me with more details.

Best regards,`,
                      }}
                    >
                      <strong>I'm interested</strong>
                    </Link>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Apartments;
