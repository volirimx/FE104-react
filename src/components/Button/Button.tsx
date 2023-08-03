import { Hamburger } from "../hamburger/Hamburger";
import "./Button.css";

export function Button() {
  // const hamburger = document.getElementsByClassName("hamburger");
  return (
    <button className="hamburgenBtn" onClick={() => {}}>
      <Hamburger />
    </button>
  );
}
