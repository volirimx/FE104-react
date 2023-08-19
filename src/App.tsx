import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button_primary/button";
import { Template } from "./components/Template/template";

import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Successpage } from "./pages/successpage";
import { NotFoundPage } from "./pages/notfoundpage";
import { Layout } from "./components/Template/template";


function App() {
  return (          
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={ <Homepage/> } />
              <Route path='success' element={ <Successpage/> } />
              <Route path="*" element={ <NotFoundPage/> } />  
            </Route>            
          </Routes>      
          )
    }

export default App;






