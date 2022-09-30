import React, { useState } from "react";

export default function SvgTextComponent({ simbol, changeRef, diffic }) {
  const [show, setShow] = useState(false);

  function handlerShowSimbol(e) {
    let carts = document.querySelectorAll(".tyt");

    if (e.currentTarget.dataset.stop === "1") {
      return;
    }
    carts.forEach((el) => {
      el.dataset.stop = "0";
    });
    e.currentTarget.dataset.stop = "1";

    if (changeRef(e.currentTarget.dataset.sim)) {
      carts.forEach((el) => {
        if (el.dataset.sim === e.currentTarget.dataset.sim) {
          el.classList.add(
            "duration-700",
            "rotate-[540deg]",
            "scale-0",
            "shadow-[0_0px_40px_40px]",
            "rounded-full"
          );
        }
      });
    }
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, +diffic);
  }

  let text = show ? (
    <text
      x="50"
      y="80"
      className="text-center text-[5rem] font-semibold  fill-current"
      textAnchor="middle"
    >
      {simbol}
    </text>
  ) : (
    <text
      x="50"
      y="82"
      className="text-center text-8xl font-semibold  fill-gray-400 stroke-black stroke-2"
      textAnchor="middle"
    >
      𝕽
    </text>
  );

  let out = (
    <div
      className="tyt flex bg-gray-900 w-[16%] m-[2%] p-[1%] aspect-square rounded-lg shadow-[0_0px_4px_2px] shadow-current cursor-pointer  hover:text-primary hover:brightness-200"
      data-sim={simbol}
      data-stop="0"
      onClick={handlerShowSimbol}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-full h-full overflow-hidden "
      >
        {text}
      </svg>
    </div>
  );

  return out;
}
