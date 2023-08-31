import { useContext } from "react";
import ContextTheme from "../../ContextTheme";

const CloseIcon = () => {
  const { darkMode } = useContext(ContextTheme);
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill={darkMode ? "darkred" : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect
          width="24"
          height="24"
          fill={darkMode ? "darkred" : "white"}
        />{" "}
        <path
          d="M7 17L16.8995 7.10051"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{" "}
        <path
          d="M7 7.00001L16.8995 16.8995"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{" "}
      </g>
    </svg>
  );
};

export default CloseIcon;
