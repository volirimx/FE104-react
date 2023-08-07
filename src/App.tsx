import "./App.css";
import { Form } from "./companents/Form/index.tsx";
import { TextArea } from "./companents/FormTextArea/index.tsx";

function App() {
 return (
  <>
   <Form type="text" placeholder="Введите текст..." disabled={true} />
   <Form type="Email" placeholder="Введите Email" disabled={false} />
   <Form type="Password" placeholder="Введите пароль" disabled={false} />
   <TextArea disabled={false} placeholder="Введите текст..." />
  </>
 );

}

export default App;
