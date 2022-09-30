import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import SvgComponent from "./components/SvgComponent";
import Menu from "./components/Menu";
import Carts from "./components/Carts";
import Results from "./components/Results";
import Footer from "./components/Footer";
import music from "./audio/fon4.mp3";

export default function App() {
  const [themes, setThemes] = useState("luxury");
  const [pazl, setPazl] = useState("");
  const [start, setStart] = useState("menu");
  const [showOut, setShowOut] = useState(false);
  const [diffic, setDiffic] = useState("10000");
  const [results, setResults] = useState([]);
  const [startGame, setStartGame] = useState("");
  const play = useRef(false);

  useEffect(() => {
    let temp = [];
    if (localStorage.getItem("resultsgamememory")) {
      temp = JSON.parse(localStorage.getItem("resultsgamememory"));
    }
    setResults(temp);
  }, []);

  function handlerOutGame() {
    setPazl("");
    setStart("menu");
    setShowOut(false);
    setStartGame("");
  }

  function handlerPlay() {
    let t = document.querySelector("audio");
    if (play.current === true) {
      t.pause();
      play.current = false;
    } else {
      t.play();
      play.current = true;
    }
  }

  function checkLevel(name) {
    let flag = true;
    results.forEach((el) => {
      if (name === "didgits" && el.level === "icons") {
        flag = false;
      }
      if (name === "figures" && el.level === "didgits") {
        flag = false;
      }
      if (name === "israel" && el.level === "figures") {
        flag = false;
      }
      if (name === "glagolic" && el.level === "israel") {
        flag = false;
      }
      if (name === "japan" && el.level === "glagolic") {
        flag = false;
      }
      if (name === "pers" && el.level === "japan") {
        flag = false;
      }
      if (name === "arabi" && el.level === "pers") {
        flag = false;
      }
      if (name === "khmer" && el.level === "arabi") {
        flag = false;
      }
    });
    return flag;
  }

  let buttonOut = showOut && (
    <button
      className="btn btn-xs btn-outline absolute top-4 left-4 z-10"
      onClick={handlerOutGame}
    >
      out
    </button>
  );

  let volum = play ? (
    <SvgComponent name="volum" />
  ) : (
    <SvgComponent name="mute" />
  );

  let showPage;

  switch (start) {
    case "menu":
      showPage = (
        <Menu
          setPazl={setPazl}
          setStart={setStart}
          setShowOut={setShowOut}
          diffic={diffic}
          setDiffic={setDiffic}
          setStartGame={setStartGame}
          themes={themes}
          setThemes={setThemes}
          checkLevel={checkLevel}
        />
      );
      break;
    case "game":
      showPage = (
        <Carts
          pazl={pazl}
          diffic={diffic}
          startGame={startGame}
          results={results}
          setResults={setResults}
        />
      );
      break;
    case "results":
      showPage = <Results results={results} />;
      break;
    default:
      break;
  }

  let out = (
    <div
      className="app w-full min-h-full flex flex-col flex-wrap justify-center items-center py-11 px-4"
      data-theme={themes}
    >
      <audio type="audio/mp3" autoPlay={false} loop>
        <source src={music} />
      </audio>
      <div
        className="absolute top-4 right-4 w-6 h-6 cursor-pointer hover:scale-125 hover:text-primary"
        onClick={handlerPlay}
      >
        {volum}
      </div>
      {buttonOut}
      <div className="wrap w-full  p-2 max-w-[300px] flex flex-col flex-wrap justify-center items-center">
        {showPage}
      </div>
      {start === "menu" && <Footer />}
    </div>
  );

  return out;
}
