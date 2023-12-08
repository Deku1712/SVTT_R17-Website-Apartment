import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
export default function Room(props) {
    const navigate = useNavigate()
    const room = props.room
    return (
        <div className=' w-full border rounded-md h-[290px] bg-green-400 shadow-lg ' onClick={() => navigate(`/Apartments/viewRoom/${room.id}`)}>
            <div>
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{room.room_name}</h5>
                
                <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                    Loại: {room.type} 
                </p>
                <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                    Giá: {room.priceOfRoom}
                </p>
                <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                    Diện tích: {room.sizeOfRoom}
                </p>
                <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                    Trạng thái: {room.active === 1 ? "Đã cho thuê" : "Chưa cho thuê"}
                </p>
                <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                    Số người: {room.numberOfRenter}
                </p> <Button className=' bg-green-200 border rounded-2xl p-2 float-end  mx-3 ' onClick={() => navigate(`/Apartments/edit-room/${room.id}`)}>Sửa</Button>
            </div>

           

            {room.active === 1 ? (<div>
                <Button className=' bg-green-200 border rounded-2xl p-2 float-end '>Tạo hóa đơn</Button>

            </div>) : null}


        </div>
    )
}
