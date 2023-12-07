import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Link, Route, Routes } from 'react-router-dom';
import { Button } from '@mui/base';
import ApartmentInfo from './ApartmentInfo';
import ApartmentRooms from './ApartmentRooms';

export default function ApartmentDetail() {


    const { id } = useParams();
    const apartment_store = useSelector((state) => state.userReducer.apartments);
    const [apartment, setApartment] = useState({})

    const navigate = useNavigate();


    useEffect(() => {
        if (apartment_store) {
            setApartment(apartment_store.find((apart) => apart.id == id))
        }
    }, [id])

    console.log(apartment)


    return (
        // <div className='border rounded-xl '>

        //     <div className="px-4 sm:px-0  ">
        //         <h3 className="text-base font-semibold leading-7 text-gray-900 ">Apartment Information</h3>

        //     </div>
        //     <div className="mt-6 border-t border-gray-100">
        //         <dl className="divide-y divide-gray-100">
        //             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">Apartment Name</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{apartment.apartmentName}</dd>
        //             </div>
        //             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">Phone 1</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{apartment.phoneNumber1}</dd>
        //             </div>
        //             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">Phone 2</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{apartment.phoneNumber2}</dd>
        //             </div>
        //             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{apartment.address}</dd>
        //             </div>
        //             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">property</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{apartment.property}</dd>
        //             </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">size</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{apartment.size}</dd>
        //             </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">area</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{apartment.area}</dd>
        //             </div>
        //             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">active</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{apartment.active}</dd>
        //             </div>
        //             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        //                     {apartment.description}
        //                 </dd>
        //             </div>
        //             <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        //                 <dt className="text-sm font-medium leading-6 text-gray-900">Image</dt>
        //                 <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        //                     <img src={apartment.imgUrl} alt="" className=' w-full h-full object-cover rounded-xl' />
        //                 </dd>
        //             </div>

        //         </dl>
        //     </div>
        //     <Button className=' bg-green-400 border rounded-2xl p-2 float-end mt-2 ' onClick={() => navigate(`/Apartments/edit-apartment/${apartment.id}`)}>Update Information</Button>


        // </div>
        <div className=' w-full border rounded-lg flex '>
            <div className=' w-2/12 border p-2'>
                <ul className="p-0 flex flex-col ">
                    <li className="relative">
                    
                        <Link className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group" to={`/viewApartment/${id}/apartmentInfo`}>
                            <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
                            <i class="pr-3  fa-solid fa-user"></i>
                            <span className="font-semibold">
                                Apartment Information.
                            </span>
                        </Link>
                    </li>
                    <li className="relative">
                    
                        <Link className="p-4 flex justify-start items-center text-gray-500 no-underline cursor-pointer hover:text-black group" to={`/viewApartment/${id}/Rooms`}>
                            <span className="absolute w-2 h-8 bg-black rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition ease-in-out" />
                            <i class="pr-3  fa-solid fa-user"></i>
                            <span className="font-semibold">
                               Room
                            </span>
                        </Link>
                    </li>
                </ul>

            </div>

            <div className='w-10/12 p-2'>
                <Routes>
                
                    <Route path='apartmentInfo' element={<ApartmentInfo apartment={apartment} />} />
                    <Route path='Rooms' element={<ApartmentRooms apartment={apartment} />} />

                </Routes>

                
            </div>

        </div>
    )
}
