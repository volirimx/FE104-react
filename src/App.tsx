import "./App.css";
import { Button } from "./components/Button_primary/button";
import { Hamburger } from "./components/Hamburger/hamburger";
import { UserButton } from "./components/Users/userbutton";

function App() {
  

  return (    
      <div>
        <div>
    <Button content={'Primary'} mode={'primary'}/> 
    <Button content={'Secondary'} mode={'secondary'}/> 
    <Button content={'Secondary2'} mode={'secondary2'}/>     
      </div>
    <div>
    </div>
    <div>
      <Hamburger opened={false} />
    </div>
      </div>
      
  
 
  )
}

export default App;
