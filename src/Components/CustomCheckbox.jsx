import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar"

export const CustomCheckbox = ({ label, control, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const { handleSubmit } = useForm();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <div className="flex">
            <
              onBlur={onBlur}
              onChange={onChange}
              checked={value}
              inputRef={ref}
              className="border-black cursor-pointer"
            />
            <div className="flex items-center gap-2 w-fit">
              <label htmlFor={label} className="text-sm font-[500] select-none">
                {label}
              </label>
            </div>

            {/* {!isChecked && (
              <span className="text-sm text-red-500 flex mt-3">
                You must agree to the terms
              </span>
            )} */}
          </div>
        )}
      />
    </div>
  );
};
