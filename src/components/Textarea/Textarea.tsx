import "./Textarea.css";
interface Props {
  name: string;
  id: string;
  cols: number;
  rows: number;
}
export function Textarea({ name, id, cols, rows }: Props) {
  return (
    <div className="boxTextarea">
      <h2>TExt</h2>
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        placeholder="textarea"
      ></textarea>
    </div>
  );
}
