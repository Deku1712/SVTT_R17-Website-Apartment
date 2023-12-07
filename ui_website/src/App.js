







import HomePage from "./Pages/HomePage/HomePage";






import HomePage1 from "./Component/HomePage";
import { useState } from "react";
import ModalSignUp from "./Component/Modal/ModalSignUp";
import ModalLogin from "./Component/Modal/ModalLogin";
import AdminPage from "./Component/Admin/AdminPage";
import UserProfile from "./Component/UserProfile/UserProfile";

import './App.css';



import UpdateRoom from './components/UpdateRoom';
import UpdateApartment from './components/UpdateApartment';
import CreateApartment from './components/CreateApartment';
import { Route, Routes, useParams } from "react-router-dom";

import Header from './Component/Header/Header';
import AddApartment from './Pages/Apartment/AddApartment';
import ApartmentPage from './Pages/Apartment/ApartmentPage';
import PostDetail from './Component/Post/PostDetail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostData } from './redux/action/actionPost';


import { CardDetail } from './Component/Card/CardDetail';
import { fetchUserData } from './redux/action/actionUser';

import Login from './Pages/Authen/Login';
import { Profile } from './Pages/Authen/Profile';
import { getProfile } from "./Service/LoginService";

import ApartmentDetail from "./Pages/Apartment/ApartmentDetail";






function App() {

  const dispatch = useDispatch();

  const [showModalLogin, setShowModalLogin] = useState(false)
  const [showModalSignUp, setShowModalSignUp] = useState(false)
  const [userData, setUserData] = useState({})
  const [onLogin, setOnLogin] = useState(false);

  const handleClose = () => {
    setShowModalSignUp(false)
    setShowModalLogin(false)
  }

  const getDataProfile = async () => {
    let res = await getProfile()
    console.log(res);
    setUserData(res.data);
  }

  useEffect(() => {
    if (onLogin) {

      getDataProfile();
    }

  }, [onLogin])

  useEffect(() => {
    // dispatch(fetchPostData())
    // dispatch(fetchUserData())

  }, [])

  return (


    <div className="App">


      <div>
        <Header
          setShowModalSignUp={setShowModalSignUp}
          setShowModalLogin={setShowModalLogin}
          setOnLogin={setOnLogin}
          onLogin={onLogin}
        />
      </div>
      <div className='container' >

        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/HomePage" Component={HomePage}></Route>
          <Route path="/Apartments/*" Component={ApartmentPage}></Route>
          <Route path="/viewApartment/:id/*" element={<ApartmentDetail/>}/>

          <Route path="/posts/:id" Component={CardDetail} />
          <Route path="/create-apartment" Component={CreateApartment}></Route>
          <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
          <Route path="/edit-apartment/:id" Component={UpdateApartment}></Route>


          <Route path="/AdminPage" Component={AdminPage}></Route>

          <Route path="/profile" element={<UserProfile userData={userData} onLogin={onLogin} />} ></Route>

        </Routes>
      </div>







      {/* </div> */}

      <ModalSignUp show={showModalSignUp} handleClose={handleClose} setShowModalLogin={setShowModalLogin} />
      <ModalLogin show={showModalLogin} handleClose={handleClose} setOnLogin={setOnLogin} />
    </div>
  );
}

export default App;
