
import logo from './logo.svg';
import './App.css';
import {  Route, Routes, useParams } from "react-router-dom";
import UpdateRoom from './Component/UpdateRoom';
import UpdateApartment from './Component/UpdateApartment';
import Header from './Component/Header/Header';
import Apartment from './Pages/Apartment/AddApartment';
import AddApartment from './Pages/Apartment/AddApartment';
import ApartmentPage from './Pages/Apartment/ApartmentPage';
import PostDetail from './Component/Post/PostDetail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostData } from './redux/action/actionPost';
import Header1 from './Component/Header';

import HomePage from './Pages/HomePage/HomePage';
import { CardDetail } from './Component/Card/CardDetail';
import { fetchUserData } from './redux/action/actionUser';



function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPostData())
    dispatch(fetchUserData())
    
},[])

  return (

    <div className="App">
      
        <div>
          <Header />
        </div>
        <div className='container' >
          <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/HomePage" Component={HomePage}></Route>
            <Route path="/Apartments" Component={ApartmentPage}></Route>
            <Route path = "/addApartment" Component={AddApartment}></Route>
            <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
            <Route path="/edit-apartment" Component={UpdateApartment}></Route>
            <Route path = "/posts/:id" Component={CardDetail}/>

            

          </Routes>
        </div>
      





    </div>
  );
}

export default App;
