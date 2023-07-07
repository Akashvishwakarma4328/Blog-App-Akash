import './App.css';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import Header from './component/Header';
import Layout from './component/Layout';

import { Routes, Route } from "react-router-dom";
import Post from './component/Post';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (

    <Routes>
      <Route path='/' element ={<Layout/>}> 
        <Route index element ={<IndexPage/>}/>
        <Route  path="/login" element ={<LoginPage/>}/>
        <Route  path="/register" element ={<RegisterPage/>}/> 
      </Route>
    </Routes>


  );
}

export default App;
