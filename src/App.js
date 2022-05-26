import React from 'react';
import "./App.css";
import Loading from "./components/Loading";
import { BrowserRouter } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';

 

function App() {
  return (  
    <div>
      <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route path='/' element={<Loading/>}/>
       <Route path='/TodoList' element={<TodoList/>}/>
       </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
