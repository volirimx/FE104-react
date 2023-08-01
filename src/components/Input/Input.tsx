import "./Input.css";
type textType = "text" | "email" | "password";
interface Props {
  type: textType;
  disablet: boolean;
}
export function Input({ type, disablet }: Props) {
  return (
    <div>
      <h2>Title</h2>
      <input
        className={`input ${disablet} `}
        disabled={disablet}
        type={type}
        placeholder="placeholder"
      />
    </div>
  );
}
