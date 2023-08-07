import "./Button.css";
type modeText = "primary" | "secondary" | "secondary2";
interface Props {
  text: string;
  mode: modeText;
  disablet: boolean;
}
export function Button({ text, mode, disablet }: Props) {
  return (
    <button disabled={disablet} className={`${mode} ${disablet}`}>
      {text}
    </button>
  );
}
