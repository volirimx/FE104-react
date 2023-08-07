import { Username } from "../Username/Username";
import "./Hamburger.css";
interface Hamburger {
  className: string;
}
export function Hamburger({ className }: Hamburger) {
  return (
    <div className={className}>
      <Username username="Юзер Нейм" />
    </div>
  );
}
