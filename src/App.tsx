import "./App.css";
import { Wrapper } from "./components/ForChildren";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Posts } from "./pages/Posts";

function App() {
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
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
