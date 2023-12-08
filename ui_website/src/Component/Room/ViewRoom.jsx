import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import RoomService from "../../Service/RoomService"
import { Carousel } from "react-bootstrap";
const ViewRoom = () => {
    const [room_img, setRoomImg] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams();
    const [room, setRoom] = useState({})
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        RoomService.getRoomByID(id).then((response) => {
            console.log(response.data)
            setRoom(response.data)
            setRoomImg(response.data.imgs)

            console.log(response.data)
        })
            .catch((error) => {
                console.log(error)
            });

    };
    return (
        <div className="container mt-5 mb-3" style={{ maxWidth: "60%" }}>
            <div className='w-full border rounded-xl '>
                <div className="px-4 sm:px-0  ">
                    <h3 className="text-center mt-3 "> INFORMATION ROOM </h3>

                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Room Name</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{room.room_name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Number renter</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{room.numberOfRenter}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Size </dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{room.sizeOfRoom}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Active </dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{room.active === 0 ? "Actice" : "Complete"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Price </dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 d-flex">{room.priceOfRoom}  <span className="mx-3" >VND</span></dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Description </dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{room.description}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">IMG </dt>
                            <dd className="mt-1 d-flex w-50 flex-wrap text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <Carousel
                                    interval={null}
                                    slide={true}
                                    className="custom-carousel" style={{borderRadius:0}}
                                >
                                    {room_img.map((file, i) => (
                                        <Carousel.Item key={i}>
                                            <div className="ms-3 d-flex mb-3">
                                                <div style={{ width: 300 ,height:200}}>
                                                    <img  className="imageChange" src={file.url_img} />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    ))}

                                </Carousel>

                            </dd>
                        </div>
                    </dl>

                </div>

            </div><Button className='mt-3 mb-5 bg-green-200 border rounded-2xl p-2 float-end  mx-3 ' onClick={() => navigate(`/Apartments/edit-room/${room.id}`)}>Update Information</Button>
        </div>
    );
};

export default ViewRoom;
