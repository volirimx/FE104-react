import styles from './index.module.css'
import { Button } from '../Button'
import { Form } from '../Form'
import { Password } from '../Password'
import { useState } from 'react'

interface props {
    password: string;
    handlePasswordChange: Function;
}

export function Registration({password, handlePasswordChange} : props) {
    const [registr, setRegistr] = useState('Wrong data!');
    const [confirm, setConfirm] = useState(false);

    const handleChange = () => {
        setConfirm(!confirm);
        console.log(confirm);
    }

    const validation = (reg: boolean) => {
        if(!reg) {
        setRegistr('Wrong data!');
        return;
        }
        setRegistr('Registration success!');
        return;
    }

    return (
        <div className={styles.registr}>
            {!confirm && <label>ENTER EMAIL HERE</label>}
            {!confirm && <Form check={validation}/>}
            {!confirm && <label>ENTER PASSWORD HERE</label>}
            {!confirm && <Password value={password} onChange={handlePasswordChange}/>}
            {!confirm && <Button onClick={handleChange} mode='Primary' text='Submit registration' isDisabled={false}/>}
            {confirm && <h2 className={confirm? styles.anim : ''}>{registr}</h2>}
        </div>
    );
}