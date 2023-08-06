import "./App.css";
import { Buttons } from "./companents/Buttons/index.tsx";
import { UserName } from "./companents/UserName/index.tsx";

function App() {
 const handleClick = () => {
  console.log('Клик по кнопке');
 };

 return (
  <>
   <Buttons name="Primary" mode={"Primary"} onClick={handleClick} />
   <Buttons name="Secondary" mode={"Secondary"} onClick={handleClick} />
   <Buttons name="Secondary_2" mode={"Secondary_2"} onClick={handleClick} />
   <UserName user="Aleksey Pozniak" />
  </>
 );
}

export default App;
