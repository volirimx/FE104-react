import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Input } from "./components/Input/Input";
import { PostCard1 } from "./components/PostCard1/PostCard1";
import { Tabs } from "./components/Tabs/Tabs";
// import { Textarea } from "./components/Textarea/Textarea";
import { Header } from "./components/header/Header";
import { Primer1 } from "./components/primer1/primer1";
import { Primer2 } from "./components/primer2/primer2";

function App() {
  return (
    <>
      <div>
        <Header />
        <Input type="text" disablet={false} />
        <Tabs disablet={true} />
        <PostCard1 />
        <Link to="/пример1">пример1</Link> <Link to="/пример2">пример2</Link>
      </div>
      <Routes>
        <Route path="/пример1" element={<Primer1 />} />
        <Route path="/пример2" element={<Primer2 />} />
      </Routes>
    </>
  );
}

export default App;
