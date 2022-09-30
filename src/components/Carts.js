import React, { useRef, useState } from "react";
import { obj } from "./Simbols";
import SvgTextComponent from "./SvgTextComponent";
import Timer from "./Timer";

export default function Carts({
  pazl,
  diffic,
  startGame,
  results,
  setResults,
}) {
  let [win, setWin] = useState(false);
  let counter = useRef();
  let cart1 = useRef();
  let cart2 = useRef();

  function changeRef(value) {
    if (cart2.current === "") {
      cart2.current = value;
    } else {
      let temp = cart2.current;
      cart2.current = value;
      cart1.current = temp;
    }
    if (cart2.current === cart1.current) {
      --counter.current.innerHTML;
      if (counter.current.innerHTML === "0") {
        let now = new Date();
        let currentResult = (now.getTime() - startGame) / 1000;
        counter.current.innerHTML = "WIN! You result=" + currentResult + "s";
        setWin(true);

        let temp = { level: pazl, result: currentResult };
        let listObj = [...results].map((el) => {
          if (el.level === temp.level && el.result > temp.result) {
            return temp;
          }
          return el;
        });

        if (listObj.length === 0) {
          setResults([temp]);
        } else {
          let flag = true;
          for (let el of listObj) {
            if (el.level === temp.level) {
              flag = false;
              break;
            }
          }
          if (flag) {
            listObj.push(temp);
          }
          setResults(listObj.sort((a, b) => a.result - b.result));
        }

        let arr = [];
        if (!localStorage.getItem("resultsgamememory")) {
          arr = [temp];
        } else {
          arr = JSON.parse(localStorage.getItem("resultsgamememory"));
          let flag = true;
          for (let el of arr) {
            if (el.level === temp.level) {
              flag = false;
              break;
            }
          }
          if (flag) {
            arr.push(temp);
          }
          arr = arr.map((el) => {
            if (el.level === temp.level && el.result > temp.result) {
              return temp;
            }
            return el;
          });
          arr = arr.sort((a, b) => a.result - b.result);
        }
        localStorage.setItem("resultsgamememory", JSON.stringify(arr));
      }
      return true;
    }
  }

  let arr = [...obj[pazl].simbols].map((el) => [Math.random(), el]).sort();
  arr = arr.map((el) => el[1]);

  let out = arr.map((el, i) => (
    <SvgTextComponent
      simbol={el}
      key={i}
      changeRef={changeRef}
      diffic={diffic}
    />
  ));

  let showWin = !win && <Timer startGame={startGame} />;

  out = (
    <>
      {showWin}
      <div className="absolute top-4 right-14" ref={counter}>
        25
      </div>
      <div className="w-full flex flex-wrap">{out}</div>
    </>
  );

  return out;
}
