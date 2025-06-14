import { Check } from "lucide-react";
import { cn } from "../utils/clsx";
import { useState } from "react";

export const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      onClick={() => setIsChecked(!isChecked)}
      className="flex items-center gap-2 w-fit"
    >
      <div
        className={cn(
          "rounded-xs cursor-pointer border border-black flex items-center justify-center size-4",
          { "bg-black": isChecked }
        )}
      >
        <Check color={"white"} size={17} />
      </div>
      <label htmlFor={label} className="text-sm font-[500] select-none">
        {label}
      </label>
    </div>
  );
};
