import React from 'react'


import { Link, Route, Routes } from 'react-router-dom';
import AddApartment from './AddApartment';
import ViewApartment from './ViewApartment';
import ApartmentDetail from './ApartmentDetail';
import UpdateApartment from '../../components/UpdateApartment';
export default function ApartmentPage() {




  return (

    <div className=' '>
      
      <div className=' '>

        <Link to="/Apartments/addApartment" >add</Link>
        <Link to="/Apartments/viewApartment">Manage Apartment</Link>

      </div>
      <div className=''>

        <Routes>
          <Route path='viewApartment' element={<ViewApartment />} />
          <Route path="addApartment" element={<AddApartment />} />
          <Route path="/viewApartment/:id" element={<ApartmentDetail/>}/>
          <Route path="/edit-apartment/:id" element={<UpdateApartment/>}></Route>
        </Routes>
      </div>


    </div>



  )
};

// Component thêm căn hộ
