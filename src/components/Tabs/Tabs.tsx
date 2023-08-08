import "./Tabs.css";
interface Props {
  disablet: boolean;
}
export function Tabs({ disablet }: Props) {
  return (
    <div className="tabs">
      <button className="tabsAll">All</button>
      <button className="tabsMyFavorites">My favorites</button>
      <button disabled={disablet} className={`tabsPooular ${disablet}`}>
        Pooular
      </button>
    </div>
  );
}
