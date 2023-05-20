import React from 'react';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/pages/Menu/Menu";
import Orders from "./components/pages/Orders/Orders";
import Admin from "./components/pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
