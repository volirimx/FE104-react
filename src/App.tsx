import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Test } from './pages/Test/Test'
import { NextPage } from './pages/NextPage/NextPage';
import { PostPage } from './pages/PostPage/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test />}/>
        <Route path='/nextPage'>
          <Route index  element={<NextPage />}/>
          <Route path=':id'element={<PostPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
