import "./App.css";
import { Input } from "./components/Input/Input";
import { PostCard1 } from "./components/PostCard1/PostCard1";
import { Tabs } from "./components/Tabs/Tabs";
import { Textarea } from "./components/Textarea/Textarea";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Input type="text" disablet={false} />
      <Textarea name="qwer" id="1" cols={10} rows={10} />
      <Tabs disablet={true} />
      <PostCard1 />
    </div>
  );
}

export default App;
