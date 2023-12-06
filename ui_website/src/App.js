import logo from './logo.svg';
import './App.css';

import ViewAllRoom from './components/pages/viewAllRooms';
import ViewAllBills from './components/pages/viewAllBills';
import Header from './components/layouts/header';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ViewBillDetails from './components/pages/viewBillDetails';
import CreateNewBill from './components/pages/createNewBill';
import { useDispatch } from 'react-redux';

import UpdateRoom from './Component/UpdateRoom';
import UpdateApartment from './Component/UpdateApartment';
import { BrowserRouter } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  

  return (
    <BrowserRouter>
    <div>
      
      <Header/>
   
        <Routes>
          {/* <Route path="/home" element={<Home />} />*/}
         
           <Route path="/viewAllRoom" element={<ViewAllRoom />} />
           <Route path="/viewAllBills" element={<ViewAllBills />} />
           
           <Route path="/createNewBill" element={<CreateNewBill />} />
           <Route path="/viewBillDetails/:id" Component={ViewBillDetails} />

           <Route path="/edit-room/:id" Component={UpdateRoom}></Route>
          <Route path="/edit-apartment" Component={UpdateApartment}></Route>
         {/* <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
         <Route path="/logout" element={<LoginForm />} /> */}
        </Routes>

 

        </div>
        </BrowserRouter>
        )
        }
export default App;
