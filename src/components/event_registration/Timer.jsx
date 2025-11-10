import React from "react";

export default function Timer({ timeLeft }) {
  return (
    <div className="flex gap-4 py-6 px-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="flex grow basis-0 flex-col items-stretch gap-4"
        >
          <div className="flex h-14 grow items-center justify-center rounded-lg px-3 bg-white dark:bg-background-dark/50">
            <p className="text-text-light dark:text-primary text-lg font-bold">
              {value}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-text-light dark:text-text-dark text-sm capitalize">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
