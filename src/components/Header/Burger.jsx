"use client";
import React, { useState } from "react";
import RightNav from "./RightNav";
import CN from "classnames";
import Link from "next/link";
import ScreenClickSensor from "./ScreenClickSensor";

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ScreenClickSensor open={open} setOpen={setOpen} />
      <div
        className={CN(
          "transition-all duration-500 cursor-pointer z-20 mr-2 lg:hidden group  ",
          {
            "-translate-y-1": open,
          }
        )}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div
          className={CN(
            "w-8 h-1  rounded-full bg-white transition-all duration-500  group-hover:bg-opacity-90",
            {
              "rotate-45 translate-y-4  group-hover:bg-slate-300 ": open,
            },
            {
              "group-hover:bg-slate-600": !open,
            }
          )}
        />
        <div
          className={CN(
            "w-8 h-1 my-1 rounded-full bg-white transition-all duration-500  group-hover:bg-opacity-80",
            {
              "rotate-45 ease-in-out translate-y-2 group-hover:bg-slate-300":
                open,
            },
            {
              "group-hover:bg-slate-600": !open,
            }
          )}
        />
        <div
          className={CN(
            "w-8 h-1  rounded-full bg-white transition-all duration-500  group-hover:bg-opacity-80",
            {
              "-rotate-45 group-hover:bg-slate-300": open,
            },
            {
              "group-hover:bg-slate-600": !open,
            }
          )}
        />
      </div>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
