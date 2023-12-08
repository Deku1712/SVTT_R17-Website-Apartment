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
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch();
  

  return (
    <BrowserRouter>
    <div>
    
      <Header/>
   
        <Routes>         
           <Route path="/viewAllRoom" element={<ViewAllRoom />} />
           <Route path="/viewAllBills" element={<ViewAllBills />} />
           
           <Route path="/createNewBill" element={<CreateNewBill/>} />
           <Route path="/viewBillDetails/:id" Component={ViewBillDetails} />
        </Routes>

 
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      
        </div>
        </BrowserRouter>
        )
        }
export default App;
