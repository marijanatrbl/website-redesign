import "./ApartmentCard.css";
import type { Apartment } from "../Apartment";

type Props = {
  apartment: Apartment;
  expanded: boolean;
  onToggle: () => void;
};

function ApartmentCard({ apartment, onToggle }: Props) {
  return (
    <>
      {/* ROW */}
      <div className="apartment-row" onClick={onToggle}>
        <p>{apartment.title}</p>
        <p>{apartment.price.toLocaleString()} €</p>
        <p>{apartment.rooms}</p>
        <p>{apartment.floor}</p>
        <p>{apartment.tower}</p>
        <p>{apartment.orientation}</p>
      </div>

      {/* EXPANDED CONTENT */}
      
    </>
  );
}

export default ApartmentCard;
