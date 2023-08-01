import "./App.css";
import { Button } from "./components/Buttons/Button";
import { Input } from "./components/Input/Input";
import { Textarea } from "./components/Textarea/Textarea";
import { Username } from "./components/Username/Username";

function App() {
  return (
    <>
      <div className="box">
        <div className="container">
          <h1 className="h1">BUTTONS</h1>
          <div className="containerBox">
            <div className="qwer">
              <Button text="Primary" mode="primary" disablet={false} />
              <Button text="Primary" mode="primary" disablet={true} />
            </div>
            <div className="qwer">
              <Button text="Secondary" mode="secondary" disablet={false} />
              <Button text="Secondary" mode="secondary" disablet={true} />
            </div>
            <div className="qwer">
              <Button text="Secondary 2" mode="secondary2" disablet={false} />
              <Button text="Secondary 2" mode="secondary2" disablet={true} />
            </div>
          </div>
        </div>
        <Username username="Anton sdsdsd" />
        <div className="boxInput">
          <h1 className="h1">Input</h1>
          <Input type="text" disablet={false} />
        </div>
        <Textarea name="qwer" id="228" cols={10} rows={5} />
      </div>
    </>
  );
}
export default App;
