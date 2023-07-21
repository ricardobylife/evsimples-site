import React from "react";
import CN from "classnames";

const ScreenClickSensor = ({ open, setOpen }) => {
  return (
    <div
      className={CN(
        "fixed inset-0 z-10 bg-slate-700 bg-opacity-30 transition-all duration-300 ease-in-out lg:hidden",
        {
          "opacity-0 pointer-events-none": !open,
        },
        {
          "opacity-100 pointer-events-auto": open,
        }
      )}
      onClick={() => setOpen(!open)}
    />
  );
};

export default ScreenClickSensor;
