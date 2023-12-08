import React from 'react'


import { Link, Route, Routes } from 'react-router-dom';
import AddApartment from './AddApartment';
import ViewApartment from './ViewApartment';
import ApartmentDetail from './ApartmentDetail';
import UpdateApartment from '../../components/UpdateApartment';
import UpdateRoom from '../../components/UpdateRoom';
import ViewRoom from '../../Component/Room/ViewRoom';
export default function ApartmentPage() {




  return (

    <div className=' w-full flex justify-between mt-3  border rounded-lg overflow-hidden '>
      
      <div className=' w-2/12  mr-3 border  '>
        <div className=' p-2 bg-white '>
        <ul className="p-0 flex flex-col ">
          <li className="relative">
            <Link className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group" to="/Apartments/addApartment">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3  fa-solid fa-user"></i>
              <span className="font-semibold">
              Add
              </span>
            </Link>
          </li>   
          <li className="relative">
            <Link className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group" to="/Apartments/viewApartment">
              <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
              <i class="pr-3  fa-solid fa-user"></i>
              <span className="font-semibold">
              View Apartments
              </span>
            </Link>
          </li>  
        </ul>
        </div>
        
        


      </div>
      <div className=' w-10/12'>

        <Routes>
          <Route path='viewApartment' element={<ViewApartment />} />
          <Route path="addApartment" element={<AddApartment />} />
          <Route path="/viewRoom/:id" element={<ViewRoom />} ></Route>
          <Route path="/edit-room/:id" element={<UpdateRoom />} ></Route>
          <Route path="/edit-apartment/:id" element={<UpdateApartment/>}></Route>
        </Routes>
        
      </div>


    </div>



  )
};

// Component thêm căn hộ
