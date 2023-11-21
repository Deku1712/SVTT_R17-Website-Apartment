import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateRoom from './Component/UpdateRoom';
import UpdateApartment from './Component/UpdateApartment';
function App() {
  return (
   
 <div className="App">
     
      <div className='container' >
        <BrowserRouter>
          <Routes>
          <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
          <Route path="/edit-apartment" Component={UpdateApartment}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
