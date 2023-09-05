import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button_primary/button";
import { Template } from "./components/Template/template";

import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Successpage } from "./pages/successpage";
import { NotFoundPage } from "./pages/notfoundpage";
import { Layout } from "./components/Template/template";
import { Postspage } from "./pages/postspage";
import { Singlepage } from "./pages/siglepage";
import { LoginPage } from "./pages/loginpage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { FavoritesPage } from "./pages/favotitespage";
import { EmailActivation } from "./pages/EmailActivation";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="success" element={<Successpage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route
            path="posts"
            element={
              <RequireAuth>
                <Postspage />
              </RequireAuth>
            }
          />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="activation/:uid/:token" element={< EmailActivation/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
