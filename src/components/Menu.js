import React from "react";

export default function Menu({
  setPazl,
  setStart,
  diffic,
  setDiffic,
  setShowOut,
  setStartGame,
  themes,
  setThemes,
  checkLevel,
}) {
  const buttonStyle = "w-[50%] text-center btn btn-xs btn-outline mb-1";

  function handlerShowResults() {
    setStart("results");
    setShowOut(true);
  }
  function handlerChangePazl(e) {
    let temp = new Date().getTime();
    setPazl(e.target.id);
    setStart("game");
    setShowOut(true);
    setStartGame(temp);
  }
  function handlerChangeThemes(e) {
    setThemes(e.target.value);
  }
  function handlerChangeRadio(e) {
    setPazl("");
    setDiffic(e.target.value);
  }

  let out = (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="w-full border-b border-current text-center mb-1">
        MemoryGame
      </div>
      <div className="w-full border-b border-current text-center pb-2 mb-2">
        Выбрать тему{"  "}
        <div className="btn-group">
          <input
            type="radio"
            name="theme"
            data-title="1"
            value="luxury"
            className="btn btn-xs"
            checked={themes === "luxury" ? true : false}
            onChange={handlerChangeThemes}
          />
          <input
            type="radio"
            name="theme"
            data-title="2"
            value="valentine"
            className="btn btn-xs"
            checked={themes === "valentine" ? true : false}
            onChange={handlerChangeThemes}
          />
          <input
            type="radio"
            name="theme"
            data-title="3"
            value="halloween"
            className="btn btn-xs"
            checked={themes === "halloween" ? true : false}
            onChange={handlerChangeThemes}
          />
          <input
            type="radio"
            name="theme"
            data-title="4"
            value="aqua"
            className="btn btn-xs"
            checked={themes === "aqua" ? true : false}
            onChange={handlerChangeThemes}
          />
          <input
            type="radio"
            name="theme"
            data-title="5"
            value="black"
            className="btn btn-xs"
            checked={themes === "black" ? true : false}
            onChange={handlerChangeThemes}
          />
          <input
            type="radio"
            name="theme"
            data-title="6"
            value="synthwave"
            className="btn btn-xs"
            checked={themes === "synthwave" ? true : false}
            onChange={handlerChangeThemes}
          />
          <input
            type="radio"
            name="theme"
            data-title="7"
            value="dracula"
            className="btn btn-xs"
            checked={themes === "dracula" ? true : false}
            onChange={handlerChangeThemes}
          />
          <input
            type="radio"
            name="theme"
            data-title="8"
            value="winter"
            className="btn btn-xs"
            checked={themes === "winter" ? true : false}
            onChange={handlerChangeThemes}
          />
        </div>
      </div>
      <div className="w-full border-b border-current text-center pb-1 mb-2">
        <button className={buttonStyle} onClick={handlerShowResults}>
          Результаты
        </button>
      </div>
      <div className="w-full flex flex-col justify-around items-center border-b border-current text-center pb-2 mb-3">
        <div className="btn-group btn-group-vertical">
          <input
            type="radio"
            name="diffic"
            data-title="Нереально"
            value="700"
            className="btn btn-xs"
            checked={diffic === "700" ? true : false}
            onChange={handlerChangeRadio}
          />
          <input
            type="radio"
            name="diffic"
            data-title="Невозможно"
            value="4000"
            className="btn btn-xs"
            checked={diffic === "4000" ? true : false}
            onChange={handlerChangeRadio}
          />
          <input
            type="radio"
            name="diffic"
            data-title="Трудно"
            value="10000"
            className="btn btn-xs"
            checked={diffic === "10000" ? true : false}
            onChange={handlerChangeRadio}
          />
          <input
            type="radio"
            name="diffic"
            data-title="Нормально"
            value="15000"
            className="btn btn-xs"
            checked={diffic === "15000" ? true : false}
            onChange={handlerChangeRadio}
          />
          <input
            type="radio"
            name="diffic"
            data-title="Легко"
            value="30000"
            className="btn btn-xs"
            checked={diffic === "30000" ? true : false}
            onChange={handlerChangeRadio}
          />
        </div>
      </div>
      <button className={buttonStyle} onClick={handlerChangePazl} id="icons">
        icons
      </button>
      <button
        className={buttonStyle}
        onClick={handlerChangePazl}
        disabled={checkLevel("didgits")}
        id="didgits"
      >
        didgits
      </button>
      <button
        className={buttonStyle}
        onClick={handlerChangePazl}
        disabled={checkLevel("figures")}
        id="figures"
      >
        figures
      </button>
      <button
        className={buttonStyle}
        onClick={handlerChangePazl}
        disabled={checkLevel("israel")}
        id="israel"
      >
        israel
      </button>
      <button
        className={buttonStyle}
        onClick={handlerChangePazl}
        disabled={checkLevel("glagolic")}
        id="glagolic"
      >
        glagolic
      </button>
      <button
        className={buttonStyle}
        onClick={handlerChangePazl}
        disabled={checkLevel("japan")}
        id="japan"
      >
        japan
      </button>
      <button
        className={buttonStyle}
        onClick={handlerChangePazl}
        disabled={checkLevel("pers")}
        id="pers"
      >
        pers
      </button>
      <button
        className={buttonStyle}
        onClick={handlerChangePazl}
        disabled={checkLevel("arabi")}
        id="arabi"
      >
        arabi
      </button>
      <button
        className={buttonStyle}
        onClick={handlerChangePazl}
        disabled={checkLevel("khmer")}
        id="khmer"
      >
        khmer
      </button>
    </div>
  );

  return out;
}
