import { Check } from "lucide-react";
import { cn } from "../utils/clsx";
import { useState } from "react";
import { useController } from "react-hook-form";

export const Checkbox = ({ label, control, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const { filed } = useController({
    control,
    name,
  });

  return (
    <div>
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

      {!isChecked && (
        <span className="text-sm text-red-500 flex mt-3">
          You must agree to the terms
        </span>
      )}
    </div>
  );
};
