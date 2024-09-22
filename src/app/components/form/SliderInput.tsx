import { formatAmountWithoutCurrency } from "@/app/utils/utils";
import * as Slider from "@radix-ui/react-slider";
import React from "react";

interface SliderInputProps {
  min: number;
  max: number;
  currency?: string;
}
const SliderInput = ({ min, max, currency }: SliderInputProps) => {
  const [input, setInput] = React.useState([min, max]);
  const formatInputMin = formatAmountWithoutCurrency(input[0]);
  const formatInputMax = formatAmountWithoutCurrency(input[1]);

  return (
    <div className="w-full">
      <div className="flex gap-2 items-center justify-between">
        <div className="text-sm flex items-center font-bold gap-2">
          <div>{formatInputMin}</div>
          <span className="">{currency}</span>
        </div>

        <div className="flex items-center font-bold gap-2">
          <div>{formatInputMax}</div>
          <span className="text-xs">{currency}</span>
        </div>
      </div>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        defaultValue={[input[0] + input[1] * 0.03, input[1] - input[1] * 0.03]}
        min={min}
        max={max}
        step={1}
        onValueChange={(value) => {
          setInput(value);
        }}
      >
        <Slider.Track className="bg-[#E8ECEB] relative grow rounded-full h-[2px]">
          <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-3 h-3 bg-black border rounded-full border-white"
          aria-label="Volume"
        />
        <Slider.Thumb
          className="block w-3 h-3 bg-black border rounded-full border-white"
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  );
};

export default SliderInput;
