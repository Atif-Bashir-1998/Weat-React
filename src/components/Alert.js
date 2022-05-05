import React, { useEffect } from "react";

export default function Alert({removeAlert, message}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <div
      className="bg-purple-100 rounded-lg py-2 px-6 text-base text-purple-600 font-bold absolute right-12 top-4"
      role="alert"
    >
      {message}
    </div>
  );
}
