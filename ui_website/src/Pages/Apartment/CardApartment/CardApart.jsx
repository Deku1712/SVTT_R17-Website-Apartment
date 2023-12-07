import React from 'react'
import { Carousel } from "react-bootstrap";
import { useNavigate } from 'react-router';

export default function CardApart({ apartment }) {

    const navigate = useNavigate();

    

    return (
        <div
            key={apartment.id}
            className="p-2 border rounded-2xl group  transform  ease-in-out duration-200 hover:shadow-2xl cursor-pointer"
            onClick={()=> navigate(`/viewApartment/${apartment.id}`) }

        >
            <div className="w-full h-[284px] rounded-2xl overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={apartment.imgUrl}

                />
            </div>

            <div className=' cursor-pointer' >
                <div className="py-2 flex justify-between text-gray-700  " >
                    <div className="font-bold text-lg ">{apartment.apartmentName}</div>
                    <div className="flex items-center space-x-1">
                        <span className="pr-1">
                            {apartment.active != 0 ? <i class="fa-solid fa-circle text-green-500" ></i> : <i class="fa-regular fa-circle"></i>}

                        </span>
                        {/* Đánh giá */}
                        <div className=" ">
                            {apartment.active != 0 ? "actvie" : ""}
                        </div>
                    </div>
                </div>

                {/* Mô tả khách sạn */}
                <h3 className="text-sm text-gray-700">Owner: {apartment.user.fullname}</h3>

                <div className=''>
                    <div>
                        <i class="fa-solid fa-phone mr-2"></i>
                        <span className="text-sm text-gray-700 m-0">Phone 1 : {apartment.phoneNumber1}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone mr-2"></i>
                        <span className="text-sm text-gray-700 m-0">Phone 2 : {apartment.phoneNumber2}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-location-dot mr-2"></i>
                        <span className="text-sm text-gray-700 m-0">Address : {apartment.address}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
