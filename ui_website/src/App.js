// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateRoom from './Component/UpdateRoom';
import UpdateApartment from './Component/UpdateApartment';
import HomePage from './Component/HomePage'
import Header from "./Component/Header";

function App() {
  return (
   
 <div className="App">
     
      <div className='container' >
        <BrowserRouter>
          <Routes>
          <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
          <Route path="/edit-apartment" Component={UpdateApartment}></Route>
          <Route path="/home" Component={HomePage}></Route>
          <Route path="/header" Component={Header}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
