import "./App.css";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { SignInPage } from "./pages/SignInPage";
import { SuccessPage } from "./pages/SuccessPage";
import { BlogPage } from './pages/BlogPage';
import { PostPage } from './pages/PostPage';
import { Layout } from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext, useInitThemeContext } from './context/ThemeContext/index';
import { store } from './redux/store'
import { Provider } from "react-redux";
import { SearchPage } from "./pages/SearchPage";
import { PostsPage } from "./pages/PostsPage";

function App() {
  const themeContextValues = useInitThemeContext();
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themeContextValues}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              {/* <Route index element=''} /> */}
              <Route path='registration' element={<RegistrationPage />} />
              <Route path='confirmation/:uid/:token' element={<ConfirmationPage />} />
              <Route path='success' element={<SuccessPage />} />
              <Route path='signIn' element={<SignInPage />} />
              <Route path='search' element={<SearchPage/>}/>
              <Route path='postsRedux' element={<PostsPage/>}/>
              <Route path='posts'>
                <Route index element={<BlogPage />} />
                <Route path=':postId' element={<PostPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>

  );
}

export default App;
