import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button_primary/button";
import Form from "./components/Forms/signinForm";
import { Template } from "./components/Template/template";
import { TemplateBody } from "./components/TemplateBody/templateBody";
import { Tabs } from "./components/Tabs/tabs";

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <Template thems={theme} title="">
       {/* <TemplateBody thems={theme} title={`Please activate your account with the activision
            link in the email example@gmail.com. Please check the email`}>
        <Button content='Go to home' mode='primary' />
      </TemplateBody> */}
       {/* <Form thems={theme} /> */}
       <Tabs/>
    </Template>
  )
}

export default App;
