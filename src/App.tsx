import "./App.css";
import { Button } from "./components/Button_primary/button";
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
       <UserButton firstName="Artem" lastName="Malkin"/>  
    </div>
      </div>
      
  
 
  )
}

export default App;
