import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Carousel } from "react-bootstrap";
export default function Room(props) {
    const navigate = useNavigate()
    const room = props.room
    return (
        <div className=' w-full p-2 border rounded-2xl group  transform  ease-in-out duration-200 hover:shadow-2xl cursor-pointer'>
            <div>
                <div className="w-full justify-content-center  rounded-2xl overflow-hidden">
                    <Carousel interval={null} slide={true} className="custom-carousel bg-gray-200" style={{ borderRadius: 3 }}  >
                        {room.imgs.map((file, i) => (
                            <Carousel.Item key={i}>
                                <div className="ms-3 mt-3 d-flex mb-3 ">
                                    <img style={{ width: 180, height: 160, borderRadius: "10px" }} src={file.url_img} />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel> </div>
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-danger">{room.room_name}</h5>

                <p class="mb-0 p-2 font-normal text-black dark:text-gray-400">
                    Type: {room.type}
                </p>
                <p class="mb-0 p-2 font-normal text-black dark:text-gray-400">
                    Price: {room.priceOfRoom}
                </p>
                <p class="mb-0 p-2 font-normal text-black dark:text-gray-400">
                    Status: {room.active === 1 ? "Already rented" : "Not rented yet"}
                </p>
                <p class="mb-0 p-2 font-normal text-black dark:text-gray-400">
                    Number renter: {room.numberOfRenter}
                </p>
                <div className='d-flex'>
                    <div className='d-flex'>
                    <Button className='  border float-end  ' onClick={() => navigate(`/Apartments/viewRoom/${room.id}`)}>View</Button>
                        <Button className=' border  mx-1  float-end   ' onClick={() => navigate(`/Apartments/edit-room/${room.id}`)}>Edit</Button>

                    </div>
                    {room.active === 1 ? (<div >
                        <Button className=' bg-green-200 border' style={{width:" max-content"}}>Create Bill</Button>

                    </div>) : null}
                </div>

            </div>






        </div>
    )
}
