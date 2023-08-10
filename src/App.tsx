import { useState } from "react";
import { Input } from './components/Input/index.tsx'
import { Textarea } from "./components/Textarea/index.tsx";

function App() {
  const [inputTextValue, setInputTextValue] = useState('');
  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextValue(e.target.value);
  }
  const [inputPasswordValue, setPasswordInputValue] = useState('');
  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value);
  }
  const [inputEmailValue, setInputEmailValue] = useState('');
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(e.target.value);
  }
  const [textarea, setTextarea] = useState('');
  const handleTextareaInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  }
  return <div>
    <Input name="Title" inputType="text" value={inputTextValue} onChange={handleTextInputChange} placeHolder='Enter text...' />
    <Input name="Password" inputType="password" value={inputPasswordValue} onChange={handlePasswordInputChange} placeHolder='Enter password...' />
    <Input name="E-mail" inputType="email" value={inputEmailValue} onChange={handleEmailInputChange} disabled={true} placeHolder='Enter e-mail...' />
    <Textarea name="Textarea" value={textarea} onChange={handleTextareaInputChange} />
  </div>;
}

export default App;