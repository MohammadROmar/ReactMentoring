import { type ComponentPropsWithoutRef } from "react";

import "./Input.css";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <p className="input-field">
      <label htmlFor={id} className="input-field__label">
        {label}
      </label>
      <input id={id} name={id} className="input-field__input" {...props} />
    </p>
  );
}
