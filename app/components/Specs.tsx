import React from "react";

export const Specs = () => {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <div className="font-bold mb-3">Specifications</div>
      {new Array(10).fill(0).map((_, i) => (
        <div
          key={i}
          className="text-sm flex justify-between border-t-2  pt-3 pb-3"
        >
          <span className="font-semibold">Amp Models</span>
          <span>200</span>
        </div>
      ))}
    </div>
  );
};
