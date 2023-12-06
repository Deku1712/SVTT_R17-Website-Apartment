
import React, { useState, useEffect } from 'react';
import { fetchAllBill, getBillById, getBillByRoomId } from '../../Services/BillService';
import { useDispatch, useSelector } from 'react-redux';
import { getBillDetailsRedux, getBillRedux } from '../../Redux/bill/BillAction';
import { useNavigate, Link } from 'react-router-dom';
const ViewAllBills = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substr(0, 10);
    const bills = useSelector(state => state.bill.bill)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState([]);

    const [createDate, setCreateDate] = useState(formattedDate);
    const [startDate, setStartDate] = useState(formattedDate);
    const [endDate, setEndDate] = useState(formattedDate);

    const [oldElectricityNum, setOldElectricityNum] = useState("");
    const [newElectricityNum, setNewElectricityNum] = useState("");
    const [totalElectricity, setTotalElectricity] = useState("");

    const [oldWaterNum, setOldWaterNum] = useState("");
    const [newWaterNum, setNewWaterNum] = useState("");
    const [totalWater, setTotalWater] = useState("");

    const [totalInternet, setTotalInternet] = useState("");
    const [totalTrash, setTotalTrash] = useState("");


    const [totalRoom, setTotalRoom] = useState("");
    const [discount, setDiscount] = useState("");

    const [totalBill, setTotalBill] = useState("");
    const bill = {
        id,
        createDate,
        startDate,
        endDate,
        oldElectricityNum,
        newElectricityNum,
        totalElectricity,
        oldWaterNum,
        newWaterNum,
        totalWater,
        totalInternet,
        totalTrash,
        totalRoom,
        discount,
        totalBill
    }

    const [listBills, setListBills] = useState([]);

    const [isRoomListVisible, setIsRoomListVisible] = useState(false);
    const toggleRoomListVisibility = () => {
        setIsRoomListVisible(!isRoomListVisible);
    };



    useEffect(() => {
        // getBills();
        dispatch(getBillRedux());
    }, [])

    const getBills = async () => {
        fetchAllBill()
            .then(response => {
                if (response.data) {
                    console.log("Dữ liệu đã được lấy:", response.data);
                    setListBills(response.data);
                } else {
                    console.log("Không có dữ liệu hoặc cấu trúc dữ liệu không đúng.");
                }
            })
            .catch(error => {
                console.error("Lỗi khi gọi fetchAllill:", error);
            });
    }

    const handleViewDetail = async (id) => {
        //   let res = await getBillById(id);
        // getBills();
        dispatch(getBillDetailsRedux(id));
        // navigate(`/viewBillDetails/${id}`);
    }

    const handleSearchByRoomId = async (roomId) => {
        // let res = await getBillByRoomId(roomId);
        // setListBills(res.data);
        // console.log("check: " , res.data);

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
                                        <i className="fas fa-tachometer-alt fa-fw me-3"></i><span className='fw-bold'>Thao tác:</span>
                                    </a>
                                    <div className="card-body p-0 my-2">
                                        <form className="form-inline my-2 my-lg-0 d-flex">
                                            <input className="form-control mr-sm-2 mx-2" type="search" placeholder="ID phòng" aria-label="Search"
                                                onChange={(e) => { handleSearchByRoomId(e.target.value) }} />
                                            <input className="form-control mr-sm-2 mx-2" type="date" />
                                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>

                                    <div className="card-body p-0 my-2">
                                        <a href="#" className="list-group-item list-group-item-action py-2 ripple" onClick={toggleRoomListVisibility}
                                        ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Danh sách phòng: 5 phòng còn trống</span></a>
                                        {isRoomListVisible && (
                                            <div className="row card-body p-0 my-2 text-center d-flex justify-content-center">

                                                <div className="border col-lg-3 m-2 bg-danger-subtle">
                                                    <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>P101</span></a>
                                                </div>

                                                <div className="border col-lg-3 m-2 bg-danger-subtle">
                                                    <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>P102</span></a>
                                                </div>

                                                <div className="border col-lg-3 m-2 bg-secondary-subtle">
                                                    <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>P103</span></a>
                                                </div>

                                                <div className="border col-lg-3 m-2 bg-danger-subtle">
                                                    <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>P104</span></a>
                                                </div>

                                                <div className="border col-lg-3 m-2 bg-secondary-subtle">
                                                    <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>P105</span></a>
                                                </div>

                                                <div className="border col-lg-3 m-2 bg-secondary-subtle">
                                                    <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>P106</span></a>
                                                </div>

                                                <div className="border col-lg-3 m-2 bg-danger-subtle">
                                                    <a href='#' className='link-offset-2 link-underline link-underline-opacity-0'><span>P107</span></a>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body text-center d-flex">

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID Phòng</th>
                                            <th scope="col">Ngày tạo</th>
                                            <th scope="col">Ngày bắt đầu</th>
                                            <th scope="col">Ngày kết thúc</th>
                                            <th scope="col">Tổng tiền</th>
                                            <th scope="col">Xem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bills && bills.length > 0 && bills.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th scope="row" >{item.id}</th>
                                                    <td>{formatDate(item.createDate)}</td>
                                                    <td>{formatDate(item.startDate)}</td>
                                                    <td>{formatDate(item.endDate)}</td>
                                                    <td>{item.totalBill}</td>
                                                    <td><Link to={`/viewBillDetails/${item.id}`}onClick={() => handleViewDetail(item.id)} className="btn btn-primary m-2">
                                                    Xem chi tiết
                                                    </Link></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default ViewAllBills;