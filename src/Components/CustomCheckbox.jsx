import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "@/Components/ui/checkbox";

export const CustomCheckbox = ({ label, control, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const { handleSubmit } = useForm();

  return <div></div>;
};
