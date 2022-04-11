import React from "react";

export default function Alert({children}) {
  return (
    <div
      className="bg-indigo-100 rounded-lg py-2 px-6 text-base text-indigo-600 font-bold absolute right-12 top-4"
      role="alert"
    >
      {children}
    </div>
  );
}
