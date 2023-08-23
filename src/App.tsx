import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { SuccessSignIn } from './components/SuccesSignIn';
import { MainHome } from './components/MainHome';
import { PostsWrapper } from './components/PostsWrapper';
import { PostsPage } from './components/PostsPage';
import { SinglePost
 } from './pages/SinglePost';
import { ThemeProvider } from './providers/ThemeProvider';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainHome/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/successsignin" element={<SuccessSignIn/>}/> 
            <Route path="/posts" element={<PostsWrapper />}>
              <Route index element={<PostsPage />} />
              <Route path=":postId" element={<SinglePost />} />
            </Route>
          </Route>      
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
