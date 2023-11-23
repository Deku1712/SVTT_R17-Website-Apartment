import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateRoom from './components/UpdateRoom';
import UpdateApartment from './components/UpdateApartment';
function App() {
  return (
   
 <div className="App">
     
      <div className='container' >
        <BrowserRouter>
          <Routes>
          <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
          <Route path="/edit-apartment/:id" Component={UpdateApartment}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
