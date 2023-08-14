import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button_primary/button";
import Form from "./components/Forms/signinForm";
import { Template } from "./components/Template/template";
import { TemplateBody } from "./components/TemplateBody/templateBody";
import { Tabs } from "./components/Tabs/tabs";
import { Card1 } from "./components/Card1/card1";
import { Card2 } from './components/Card2/card2'
import { Card3 } from "./components/Card3/card3";
import { useCardData } from "./hooks/cards";

function App() {
  const [theme, setTheme] = useState('light');
  const { cards } = useCardData();

  return (
    <Template thems={theme} title="">
       {/* <TemplateBody thems={theme} title={`Please activate your account with the activision
            link in the email example@gmail.com. Please check the email`}>
        <Button content='Go to home' mode='primary' />
      </TemplateBody> */}
       {/* <Form thems={theme} /> */}
       <Tabs title="BLOG"/>
       <div className="containerStyle">
       { cards.map(card => <Card1 card={card} key={card.id} />) }
        {/* <Card2/>
        <Card3/> */}
       </div>
       
    </Template>
  )
}

export default App;






