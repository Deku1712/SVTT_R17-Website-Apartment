import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import UpdateRoom from "./Component/UpdateRoom";
import UpdateApartment from "./Component/UpdateApartment";
import Header from "./Component/Header/Header";

import HomePage from "./Pages/HomePage/HomePage";
import Apartment from "./Pages/Apartment/AddApartment";
import AddApartment from "./Pages/Apartment/AddApartment";
import ApartmentPage from "./Pages/Apartment/ApartmentPage";
import PostDetail from "./Component/Post/PostDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPostData } from "./redux/action/actionPost";
import Header1 from "./Component/Header";
import HomePage1 from "./Component/HomePage";
import { useState } from "react";
import NavLink from "react-router-dom";
import ModalSignUp from "./Component/Modal/ModalSignUp";
import ModalLogin from "./Component/Modal/ModalLogin";

function App() {
  const dispatch = useDispatch();

  const PostById = () => {
    const { id } = useParams();
    return <PostDetail id={id} />;
  };
  useEffect(() => {
    dispatch(fetchPostData());
  }, []);

  const [showModalLogin, setShowModalLogin] = useState(false)
  const [showModalSignUp, setShowModalSignUp] = useState(false)

  const handleClose = () => {
    setShowModalSignUp(false)
    setShowModalLogin(false)
  }

  return (
    <div className="App">
      <div className="">
        <Header setShowModalSignUp={setShowModalSignUp} setShowModalLogin={setShowModalLogin}/>
      </div>
      {/* <div className="" > */}
      <Routes>
        <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
        <Route path="/edit-apartment" Component={UpdateApartment}></Route>
        <Route path="/HomePage" Component={Header}></Route>
        <Route path="/Posts/:id" element={<PostById />}></Route>

        <Route path="/" Component={HomePage1}></Route>
        <Route path="/Apartment" Component={ApartmentPage}></Route>
        <Route path="/AddApartment" Component={AddApartment}></Route>
      </Routes>
      {/* </div> */}

      <ModalSignUp show={showModalSignUp} handleClose={handleClose}/>
      <ModalLogin show={showModalLogin} handleClose={handleClose}/>
    </div>
  );
}

export default App;
