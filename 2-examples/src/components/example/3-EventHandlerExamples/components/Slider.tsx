import React from "react";

interface SliderProps {
  max: number;
  currentValue: number | string;
  onChange: (value: number | string) => void;
}

function Slider({ max = 100, currentValue, onChange }: SliderProps) {
  const [value, setValue] = React.useState(currentValue);

  React.useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  return (
    <div>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        className="music-slider"
        onInput={(e : React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          if (onChange && typeof onChange === "function") {
            onChange(e.target.value);
          }
        }}
      ></input>
    </div>
  );
}

export default Slider;
