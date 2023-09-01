import { useAppSelector } from "../../redux/hook";
import { selectSave } from "../../redux/posts";

const Save = ({ id, onClick }: { id: number; onClick: () => void }) => {
  const save = useAppSelector(selectSave(id));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="save"
      fill={save ? "darkred" : "black"}
      onClick={onClick}
    >
      <path d="M18,2H6A1,1,0,0,0,5,3V21a1,1,0,0,0,1.65.76L12,17.27l5.29,4.44A1,1,0,0,0,18,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,19,21V3A1,1,0,0,0,18,2ZM17,18.86,12.64,15.2a1,1,0,0,0-1.28,0L7,18.86V4H17Z"></path>
    </svg>
  );
};

export default Save;
