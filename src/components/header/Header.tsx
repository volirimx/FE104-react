import { HButton } from "../HamburgerButton/HButton";
import { Username } from "../Username/Username";
import "./Header.css";

export function Header() {
  return (
    <header>
      <HButton />
      <Username username="Юзер Нейм" />
    </header>
  );
}
