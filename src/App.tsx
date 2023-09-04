import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { SignIn } from './pages/SignInPage/index.tsx';
import { SignUp } from './pages/SignUpPage/index.tsx';
import { SuccessSignIn } from './pages/SuccesSignIn/index.tsx';
import { MainHome } from './components/MainHome';
import { PostsWrapper } from './components/Posts/PostsWrapper';
import { PostsPage } from './pages/PostsPage/index.tsx';
import { SinglePost} from './pages/SinglePostPage/SinglePost.tsx';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { Provider } from 'react-redux';
import store from "./redux/store.ts";
import { Home } from './redux/example/Home.tsx';
import { Posts } from './pages/PostsExample/posts.tsx';
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
