import "./App.css";
import { Button } from "./components/Button/index.tsx";
import { User } from "./components/UserInfo/index.tsx";

function App() {
  return <div>
    <div>
      <Button content="Primary" mode="primary" />
      <Button content="Secondary" mode="secondary" />
      <Button content="Tertiary" mode="tertiary" disabled={true} />
    </div>
    <div>
      <User name={"Artem Malkin"} />
    </div>
  </div>;
}

export default App;
