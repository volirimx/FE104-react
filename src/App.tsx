import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Form } from './components/Form'
import { Username } from './components/Username'
import { Password } from './components/Password'


function App() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  }

  return <>
    <div className='menu'> 
      <h1 className='text'>BUTTONS</h1>
        <Button mode='Primary' text='Primary' isDisabled={false}/>
        <Button mode='Secondary' text='Secondary' isDisabled={false}/>
        <Button mode='Tretiary' text='Secondary 2' isDisabled={false}/>
        <Button mode='Primary' text='Primary' isDisabled={true}/>
        <Button mode='Secondary' text='Secondary' isDisabled={true}/>
        <Button mode='Tretiary' text='Secondary 2' isDisabled={true}/>
        <Username user='Artem Malkin'/>
      <h1 className='text'>INPUTS</h1>
        <h2>Title</h2>
        <label>EMAIL</label>
        <Form />
        <label>TEXT</label>
        <textarea placeholder='Add your text'></textarea>
        <label>PASSWORD</label>
        <Password value={password} onChange={handlePasswordChange}/>
    </div>
  </>
}

export default App
