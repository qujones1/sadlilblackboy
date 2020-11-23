import classnames from "classnames";
import React from "react";

type Props = Readonly<{
  className?: string;
  label: string;
  name: string;

  options: { description: string; value: string }[];
}>;

export function Select({ className, label, name, options }: Props) {
  return (
    <div className={classnames("flex flex-col", className)}>
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <select
        className="shadow-sm border border-gray-300 py-1 px-3 rounded appearance-none text-sm"
        name={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
    </div>
  );
}
