import React, { useState } from "react";

export default function Timer({ startGame }) {
  let [time, setTime] = useState(0);

  setInterval(() => {
    setTime(Math.round((new Date().getTime() - startGame) / 1000));
  }, 1000);

  let out = <div className="absolute top-4 inset-x-auto">{time} s</div>;

  return out;
}
