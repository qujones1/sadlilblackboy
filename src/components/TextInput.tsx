import classnames from "classnames";
import React from "react";

type Props = Readonly<{
  className?: string;
  label: string;
  name: string;
  placeholder: string;
}>;

export function TextInput({ className, label, name, placeholder }: Props) {
  return (
    <div className={classnames("flex w-1/3", className)}>
      <label
        className="flex items-center border border-r-0 border-gray-300 rounded-l bg-gray-50 text-gray-500 text-sm px-3"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="pl-2 py-1.5 border border-gray-300 rounded-r text-sm shadow-sm flex-1"
        type="text"
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
