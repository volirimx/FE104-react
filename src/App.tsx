import { createContext, useState } from "react";
import "./App.css";
import { Template } from "./components/APP/Template/Template";

import { Wrapper } from "./components/APP/Wrapper/Wrapper";
import { RegistrationConfirmation } from "./pages/RegistrationConfirmation/RegistrationConfirmation";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { Success } from "./pages/Success/Success";
import ThemeSwitch from "react-switch";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { 
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom"; 
import { Posts } from "./pages/AllPosts/AllPosts";
import { SinglePost } from "./pages/SinglePost/SinglePost";


// interface ThemeContext {
//   theme: string;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContext | null>(null);
// const [theme, setTheme] = useState('light');

// const toggleTheme = () => {
//   theme === 'light' ? setTheme('dark') : setTheme('light')
// }

function App() {

  return (
    
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={
            <div>
              <h1 className="text-3xl font-light underline">
                Home Page              
              </h1>
            </div>} />
            
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/registrationconfirmation" element={<RegistrationConfirmation />} />
            <Route path="/success" element={<Success />} />
            <Route path="/posts" element={<Posts />}>
              <Route path={`/posts/:postId`} element={<SinglePost />} />
            </Route>

          </Route>
          <Route path="*" element={ <h1>Sorry. Page wasn't found.</h1>} />
        </Routes>
      </BrowserRouter>

    // </Provider>
  );
}

export default App;