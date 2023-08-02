import "./App.css";
// import { Button } from './components/Button/Button.tsx'
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import { User } from './components/User/User.tsx'

function App() {
  return (
    <>
    {/* <Button name="Primary" mode="primary" />
    <Button name="Primary" mode="primary" disabled={true}/>

    <Button name="Secondary" mode="secondary" />
    <Button name="Secondary" mode="secondary" disabled={true}/>

    <Button name="Tertiary" mode="tertiary" />
    <Button name="Tertiary" mode="tertiary" disabled={true} /> */}

    <User userName='Oleg Grishan'/>

    <HamburgerMenu />
    </>
  );
}

export default App;
