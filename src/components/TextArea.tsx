import classnames from "classnames";
import React from "react";

type Props = Readonly<{
  className?: string;
  label: string;
  name: string;
  placeholder: string;
}>;

export function TextArea({ className, label, name, placeholder }: Props) {
  return (
    <div className={classnames("w-full flex flex-col", className)}>
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="p-2 border border-gray-300 rounded-md shadow text-sm"
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
