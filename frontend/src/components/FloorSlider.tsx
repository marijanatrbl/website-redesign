import "./FloorSlider.css";

type FloorSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

const MIN_AREA = 69;
const MAX_AREA = 160;

const formatFloor = (value: number) => value.toLocaleString("de-DE");

function FloorSlider({ value, onChange }: FloorSliderProps) {
  return (
    <div className="floor-wrapper">
      <p>Floor area in m²</p>

      <div className="slider-box">
        <span>{formatFloor(MIN_AREA)}</span>

        <input
          type="range"
          min={MIN_AREA}
          max={MAX_AREA}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />

        <span>{formatFloor(MAX_AREA)}</span>
      </div>

      <div className="current">{formatFloor(value)}</div>
    </div>
  );
}

export default FloorSlider;
