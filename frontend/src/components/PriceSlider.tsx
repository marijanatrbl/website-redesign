import "./PriceSlider.css";

type PriceSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

const MIN_PRICE = 670000;
const MAX_PRICE = 2400000;

const formatPrice = (value: number) => value.toLocaleString("de-DE");

function PriceSlider({ value, onChange }: PriceSliderProps) {
  return (
    <div className="price-wrapper">
      <p>Budget (€)</p>

      <div className="slider-box">
        <span>{formatPrice(MIN_PRICE)}</span>

        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={10000}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />

        <span>{formatPrice(MAX_PRICE)}</span>
      </div>

      <div className="current">{formatPrice(value)}</div>
    </div>
  );
}

export default PriceSlider;
