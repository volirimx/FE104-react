import "./App.css";
import { InputForm } from "./components/Forms/Inputform";
import styles from '../src/components/Forms/inputform.module.css'


function App() {
  

  return (    
      
    <form className={styles.form} action="">
            <div className={styles.common}>
                INPUTS
                <div className={styles.block}>
                   
                    <InputForm type='text'/>
                    <InputForm type='email'/>
                    <InputForm type='password'/>

                    
                </div>

               
                
            
            </div>
            
            

        </form>
      
      
      
  
 
  )
}

export default App;
