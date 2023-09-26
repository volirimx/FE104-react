import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Posts } from "./pages/Posts";
import { EmailActivation } from "./pages/EmailActivation";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://www.omdbapi.com/?&apikey=73f13b04&s=movie&page=1"
      );
      console.log(response.data);
    })();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="posts">
              <Route index element={<Posts />} />
              <Route path=":postId" element={<Home />} />
            </Route>
          </Route>
          <Route path="/activate/:uid/:token" element={<EmailActivation />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
