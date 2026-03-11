import "./RoomsSlider.css";

type RoomsSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

function RoomsSlider({ value, onChange }: RoomsSliderProps) {
  return (
    <div className="floor-wrapper">
      <p>Minimal number of rooms</p>

      <div className="slider-box">
        <span>1</span>

        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />

        <span>5</span>
      </div>

      <div className="current">{value}</div>
    </div>
  );
}

export default RoomsSlider;
