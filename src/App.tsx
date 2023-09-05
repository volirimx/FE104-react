import { createContext, useState } from "react";
import "./App.css";
import { Template } from "./components/APP/Template/Template";

import { Wrapper } from "./components/APP/Wrapper/Wrapper";
import { RegistrationConfirmation } from "./pages/RegistrationConfirmation/RegistrationConfirmation";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { Success } from "./pages/Success/Success";
import { Provider } from "react-redux";
import { 
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom"; 
import { Posts } from "./pages/AllPosts/AllPosts";
import { SinglePost } from "./pages/SinglePost/SinglePost";
import { store } from './redux/store'
import { useAppSelector } from "./redux/hooks";
import { selectTheme } from "./redux/theme/theme";
import { Activation } from "./pages/Activation/Activation";

function App() {

  return (
    
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={
            <div>
              <h1>
                Home Page              
              </h1>
            </div>} />
            
            <Route path="/signup" element={<SignUp />} />
            <Route path="/activate/:uid/:token" element={<Activation />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/registrationconfirmation" element={<RegistrationConfirmation />} />
            <Route path="/success" element={<Success />} />
            <Route path="/posts" element={<Posts />} />
            <Route path={`/posts/:postId`} element={<SinglePost />} />

          </Route>
          <Route path="*" element={ <h1>Sorry. Page wasn't found.</h1>} />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;