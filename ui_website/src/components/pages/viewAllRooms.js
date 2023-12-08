
import React, { useState, useEffect } from 'react';
import { fetchAllRooms } from '../../Services/BillService';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
const ViewAllRoom = () => {

    const formatCurrency = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const dispatch = useDispatch();

    const [isRoomListVisible, setIsRoomListVisible] = useState(false);
    const toggleRoomListVisibility = () => {
        setIsRoomListVisible(!isRoomListVisible);
    };

    const [listRooms, setListRooms] = useState([]);
    const [totalRoom, setTotalRoom] = useState("");

    const getRooms = async () => {
        fetchAllRooms()
            .then(response => {
                if (response.data) {
                    console.log("Dữ liệu đã được lấy:", response.data);
                    setListRooms(response.data);
                    setTotalRoom(response.data.length);
                } else {
                    console.log("Không có dữ liệu hoặc cấu trúc dữ liệu không đúng.");
                }
            })
            .catch(error => {
                console.error("Lỗi khi gọi fetchAllRooms:", error);
            });
    }

    useEffect(() => {
        getRooms();
    }, [])

    const navigate = useNavigate();

    const handleCreateBill = (id) => {
        const selectedRoom = listRooms.find(room => room.id === id);
        console.log("room", selectedRoom);
        if (selectedRoom) {
            navigate('/createNewBill', {
                state: { roomData: selectedRoom }
            });
        }
    }


    const handleEditRoom = async (id) => {

    }

    const handleEditActive = async (id) => {
    }

    return (
        <section>
            <div className="container py-5">
                <div className="row">

                    <div className="col-lg-4">
                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body p-0">
                                <div className="list-group list-group-flush mx-3 mt-4">
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action py-2 ripple"
                                        aria-current="true"
                                    >
                                        <i className="fas fa-tachometer-alt fa-fw me-3"></i><span className='fw-bold'>Căn hộ của tôi</span>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
                                        <i className="fas fa-chart-area fa-fw me-3"></i><span>Chủ trọ: LenTD</span>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                    ><i className="fas fa-lock fa-fw me-3"></i><span>SĐT: 0980 980 980</span></a>
                                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                    ><i className="fas fa-chart-line fa-fw me-3"></i><span>Địa chỉ: 222 Trần Đại Nghĩa, Hòa Quý, Ngũ Hành Sơn, Đà Nẵng</span></a>


                                    <div className="card-body p-0 my-2">
                                        <a href="#" className="list-group-item list-group-item-action py-2 ripple" onClick={toggleRoomListVisibility}
                                        ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Danh sách phòng: {totalRoom} phòng</span></a>
                                        {isRoomListVisible && listRooms && listRooms.length > 0 && listRooms.map((item, index) => {
                                            return (
                                                <div className="row card-body p-0 my-2 text-center d-flex justify-content-center">
                                                    {item.active === 0 ? (
                                                        <>
                                                            <div className="border col-lg-3 m-2 bg-danger-subtle">
                                                                <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>{item.room_name}</span></a>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="border col-lg-3 m-2 bg-secondary-subtle">
                                                                <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>{item.room_name}</span></a>
                                                            </div>
                                                        </>
                                                    )

                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='col-12 m-2 border'>
                                        <img src="https://vnn-imgs-f.vgcloud.vn/2020/03/03/15/nha-tro.jpg" alt="avatar"
                                            className="img-fluid" style={{ width: '100%' }} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        {listRooms && listRooms.length > 0 &&
                            listRooms.map((item, index) => {
                                return (
                                    <div className="card mb-4">
                                        <div className="card-body text-center d-flex">
                                            <div className='col-5 d-flex border'>
                                                <img src="https://file4.batdongsan.com.vn/resize/745x510/2023/04/15/20230415140154-3d4f_wm.jpg" alt="avatar"
                                                    className="img-fluid" style={{ width: '100%' }} />
                                            </div>
                                            <div className='border-start col-7'>
                                                <h5 className="my-3">{item.room_name}</h5>
                                                <p className="fw-bolder text-danger mb-1">{formatCurrency(item.priceOfRoom)} vnd</p>
                                                <p className="text-muted mb-4"><span className='fw-bolder'>Mô tả:</span>{item.description}</p>
                                                {item.active !== 0 ? (
                                                    <>
                                                        <p className="text-muted mb-1"><span className='fw-bolder'>Tình trạng: </span> Đã cho thuê</p>
                                                        <div className="d-flex justify-content-center mb-2">
                                                            <a className='btn btn-outline-primary ms-1 m-2' type='button' onClick={() => handleCreateBill(item.id)}>Sửa</a>
                                                            <a className='btn btn-primary m-2' type='button' onClick={() => handleCreateBill(item.id)}>Tạo hóa đơn</a>

                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className="text-muted mb-1"><span className='fw-bolder'>Tình trạng: </span> Còn trống</p>
                                                        <div className="d-flex justify-content-center mb-2">
                                                            <a className='btn btn-outline-primary ms-1 m-2' type='button' onClick={() => handleCreateBill(item.id)}>Sửa</a>
                                                            <a className='btn btn-primary m-2' type='button' onClick={() => handleEditActive(item.id)}>Cho thuê</a>
                                                        </div>
                                                    </>
                                                )}


                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ViewAllRoom;
