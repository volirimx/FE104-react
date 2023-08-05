import "./App.css";
import MyButton from "./components/Lesson37Button/index.tsx"
import Username from "./components/Lesson37Username/index.tsx";



function App() {
 const handleClick = () => {
  console.log('Button clicked');
 };

 return (
  <>
   <MyButton name={"first"} mode={"Primary"} disabled={false} onClick={handleClick} />
   <MyButton name={"selcond"} mode={"Secondary"} disabled={false} onClick={handleClick} />
   <MyButton name={"three"} mode={"Secondary2"} disabled={false} onClick={handleClick} />
   <Username firstName={'Maksim'} lastName={'Shadow'} />



  </>

 );
}

export default App;
