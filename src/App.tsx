import React, { useState } from "react";
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
import { UserTheme } from "./components/Theme/thems";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Successpage } from "./pages/successpage";
import { NotFoundPage } from "./pages/notfoundpage";


function App() {
  return (
      <UserTheme.Provider value={'light'}>  
        <Template title="">      
          <Routes>
            <Route>
              <Route path='/' element={ <Homepage/> } />
            <Route path='success' element={ <Successpage/> } />
            <Route path="*" element={ <NotFoundPage/> } />  
            </Route>
            
          </Routes>      
          
        </Template>              
      </UserTheme.Provider>)  
    }

export default App;






