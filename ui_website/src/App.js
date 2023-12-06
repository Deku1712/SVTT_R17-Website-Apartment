
import logo from './logo.svg';
import './App.css';


import UpdateRoom from './components/UpdateRoom';
import UpdateApartment from './components/UpdateApartment';
import CreateApartment from './components/CreateApartment';
import { Route, Routes, useParams } from "react-router-dom";

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

  }, [])

  return (


    <div className="App">

      <div>
        <Header />
      </div>
      <div className='container' >
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/HomePage" Component={HomePage}></Route>
          <Route path="/Apartments/*" Component={ApartmentPage}/>
            

          


          <Route path="/posts/:id" Component={CardDetail} />
          <Route path="/create-apartment" Component={CreateApartment}></Route>
          <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
          <Route path="/edit-apartment/:id" Component={UpdateApartment}></Route>




        </Routes>
      </div>






    </div>
  );
}

export default App;
