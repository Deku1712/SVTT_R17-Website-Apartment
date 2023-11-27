
import logo from './logo.svg';
import './App.css';
import {  Route, Routes, useParams } from "react-router-dom";
import UpdateRoom from './Component/UpdateRoom';
import UpdateApartment from './Component/UpdateApartment';
import Header from './Component/Header/Header';

import HomePage from './Pages/HomePage/HomePage';
import Apartment from './Pages/Apartment/AddApartment';
import AddApartment from './Pages/Apartment/AddApartment';
import ApartmentPage from './Pages/Apartment/ApartmentPage';
import PostDetail from './Component/Post/PostDetail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostData } from './redux/action/actionPost';
import Header1 from './Component/Header';



function App() {
  const dispatch = useDispatch();
  
  const PostById = () => {
    const {id} = useParams();
    return <PostDetail id = {id} />
  }
  useEffect(() => {
    dispatch(fetchPostData())
  },[])

  return (

    <div className="App">
      
        <div>
          <Header />
        </div>
        <div className='container' >
          <Routes>

            <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
            <Route path="/edit-apartment" Component={UpdateApartment}></Route>
            <Route path="/HomePage" Component={Header1}></Route>
            <Route path ="/Posts/:id" element={<PostById/>}></Route>


            <Route path="/" Component={HomePage}></Route>
            <Route path="/Apartment" Component={ApartmentPage}></Route>
            <Route path="/AddApartment" Component={AddApartment}></Route>

          </Routes>
        </div>
      





    </div>
  );
}

export default App;
