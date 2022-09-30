import React from "react";
import SvgComponent from "./SvgComponent";

export default function Footer() {
  const linlStyle =
    "mx-2 w-5 h-5 duration-300 hover:scale-125 hover:text-primary";

  let out = (
    <div className="fixed bottom-0 w-full p-5 flex justify-center items-center bg-black/10">
      {" "}
      <a
        className={linlStyle}
        target="_blank"
        rel="noreferrer noopener"
        href="https://t.me/dovbanAndrey"
      >
        <SvgComponent name="telegram" />
      </a>
      <a
        className={linlStyle}
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/AnderyDov?tab=repositories"
      >
        <SvgComponent name="github" />
      </a>
      <a
        className={linlStyle}
        target="_blank"
        rel="noreferrer noopener"
        href="mailto:dovban.andreyy@rambler.ru"
      >
        <SvgComponent name="mail" />
      </a>
    </div>
  );

  return out;
}
