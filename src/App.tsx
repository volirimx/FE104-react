import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { SuccessSignIn } from './components/SuccesSignIn';
import { MainHome } from './components/MainHome';
import { PostsWrapper } from './components/Posts/PostsWrapper';
import { PostsPage } from './components/Posts/PostsPage';
import { SinglePost} from './pages/SinglePost';
import { ThemeProvider } from './providers/ThemeProvider';
import { Provider } from 'react-redux';
import store from "./redux/store.ts";
import { Home } from './redux/example/Home.tsx';
import { Posts } from './pages/Post/posts.tsx';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainHome/>}/>
              <Route path="/homeex" element={<Home/>}/>
              <Route path="/postex" element={<Posts/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/successsignin" element={<SuccessSignIn/>}/> 
              <Route path="/posts" element={<PostsWrapper/>}>
                <Route index element={<PostsPage />} />
                <Route path=":postId" element={<SinglePost />} />
              </Route>
            </Route>      
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App
