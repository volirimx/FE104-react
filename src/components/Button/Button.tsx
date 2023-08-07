import { useState } from "react";
import { Hamburger } from "../hamburger/Hamburger";
import "./Button.css";

export function Button() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div
      onClick={() => {
        setMenuActive(!menuActive);
      }}
      className={`hamburgenBtn ${menuActive}`}
    >
      <div className={`solid1 ${menuActive}`}></div>
      <div className={`solid2 ${menuActive}`}></div>
      <div className={`solid3 ${menuActive}`}></div>
      <Hamburger className={`hamburger ${menuActive}`} />
    </div>
  );
}
