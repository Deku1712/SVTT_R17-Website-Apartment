import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
export default function ApartmentPage() {
    return (
        <div>
          <h2>Quản lý căn hộ</h2>
          {/* Đường dẫn để thêm căn hộ */}
          <Link to="/manage-apartment/add">Thêm căn hộ</Link>
    
          {/* Route cho trang quản lý căn hộ */}
          <Routes>

          <Route path="/manage-apartment/add" Component={HomePage} />
          </Routes>
        </div>
      );
    };
    
    // Component thêm căn hộ
    const AddApartment = () => {
      return <h3>Thêm căn hộ</h3>;
    };
