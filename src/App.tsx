import { useState } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import LogIn from "./pages/LogIn/LogIn";
import Sucess from "./pages/LogIn/Sucess/Sucess";
import Posts from "./pages/Posts/Posts";
import Confirm from "./pages/Registration/Confirm/Confirm";
import Registration from "./pages/Registration/Registartion";
import Tab from "./pages/Tabs/Tabs";
import Wrapper from "./components/Wrapper/Wrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextSearchInput from "./ContextSearchInput";
import { Post } from "./pages/Post/Post";
import ContextTheme from "./ContextTheme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Provider store={store}>
        <ErrorBoundary>
          <ContextTheme.Provider
            value={{
              darkMode,
              setDarkMode: (darkMode: boolean) => {
                setDarkMode(darkMode);
              },
            }}
          >
            <ContextSearchInput.Provider
              value={{
                searchInput,
                setSearchInput: (newValue: string) => {
                  setSearchInput(newValue);
                },
              }}
            >
              <BrowserRouter>
                <Wrapper>
                  <Routes>
                    <Route path="/sucess" element={<Sucess />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/reg" element={<Registration />} />

                    <Route path="/posts">
                      <Route index element={<Posts />} />
                      <Route path=":id" element={<Post />} />
                    </Route>
                    <Route
                      path="*"
                      element={
                        <Tab title1="All" title2="Saved" title3="Liked" />
                      }
                    />
                    <Route path="/confirm" element={<Confirm />} />
                  </Routes>
                </Wrapper>
              </BrowserRouter>
            </ContextSearchInput.Provider>
          </ContextTheme.Provider>
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default App;
