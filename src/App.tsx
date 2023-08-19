import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { SuccessSignIn } from './components/SuccesSignIn';
import { MainHome } from './components/MainHome';
import { Wrapper } from './components/Wrapper';
import { Home } from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainHome/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/success" element={<SuccessSignIn/>}/> 
          <Route path="/posts" element={<Wrapper/>}>
            <Route path=":postId" element={<Home/>}/>
          </Route>
        </Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App
