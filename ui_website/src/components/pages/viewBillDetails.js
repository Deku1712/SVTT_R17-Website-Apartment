
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getBillDetailsRedux } from '../../Redux/bill/BillAction';
import { fetchAllApartment } from '../../Services/BillService';
const ViewBillDetails = () => {
    const dispatch = useDispatch();
    const singleBill = useSelector(state => state.bill.singleBill)
    const { id } = useParams();
    useEffect(() => {
        dispatch(getBillDetailsRedux(id));
    }, [dispatch, id]); // Add dispatch and id as dependencies

    useEffect(() => {
        console.log(singleBill.room);
    }, [singleBill]); // Log singleBill when it changes

    const formatCurrency = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const [apartment, setApartment] = useState("");
    const [electricityUnitPrice, setElectricityUnitPrice] = useState(0);
    const [waterUnitPrice, setWaterUnitPrice] = useState(0);
    const [internetUnitPrice, setInternetUnitPrice] = useState(0);
    const [trashUnitPrice, setTrashUnitPrice] = useState(0);

    const getApartment = async () => {
        try {
            const response = await fetchAllApartment();
            if (response.data) {
                console.log("Dữ liệu apart đã được lấy:", response.data);
                setApartment(response.data);

                response.data.forEach(apartment => {
                    if (Array.isArray(apartment.fees) && apartment.fees.length > 0) {
                        apartment.fees.forEach(feesItem => {
                            console.log("Dữ liệu fees đã được lấy:", feesItem);

                            if (feesItem.priceOfElectricity !== undefined) {
                                setElectricityUnitPrice(feesItem.priceOfElectricity);
                            }
                            if (feesItem.priceOfWater !== undefined) {
                                setWaterUnitPrice(feesItem.priceOfWater);
                            }
                            if (feesItem.priceOfInternet !== undefined) {
                                setInternetUnitPrice(feesItem.priceOfInternet);
                            }
                            if (feesItem.priceOfTrash !== undefined) {
                                setTrashUnitPrice(feesItem.priceOfTrash);
                            }
                        });
                    } else {
                        console.log("Không có dữ liệu fees trong đối tượng hoặc cấu trúc dữ liệu không đúng.");
                    }
                });
            } else {
                console.log("Không có dữ liệu hoặc cấu trúc dữ liệu không đúng.");
            }
        } catch (error) {
            console.error("Lỗi khi gọi fetchAllApartment:", error);
        }
    };

    useEffect(() => {
        getApartment();
    }, []);

    return (
        <section>
            <div className="container py-5">
                <div className="row">

                    <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-0">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                <a
                                    href="#"
                                    className="list-group-item list-group-item-action py-2 ripple text-center"
                                    aria-current="true"
                                >
                                    <i className="fas fa-tachometer-alt fa-fw me-3 "></i><span className='fw-bold'>Chi tiết hóa đơn</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
                                    <i className="fas fa-chart-area fa-fw me-3"></i><span>Ngày tạo hóa đơn: {formatDate(singleBill.createDate)}</span>
                                </a>
                                <div className="card-body text-center d-flex">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>

                                                <th scope="col">{singleBill.room?.room_name}</th>
                                                <th scope="col">Số cũ</th>
                                                <th scope="col">Số mới</th>
                                                <th scope="col">Sử dụng</th>
                                                <th scope="col">Đơn giá</th>
                                                <th scope="col">Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {singleBill.totalElectricity !== 0 ? (
                                                <>
                                                    <tr>
                                                        <th scope="row">Điện</th>
                                                        <td>{(singleBill.oldElectricityNum)} chữ</td>
                                                        <td>{(singleBill.newElectricityNum)} chữ</td>
                                                        <td>{(singleBill.newElectricityNum - singleBill.oldElectricityNum)} chữ</td>
                                                        <td>{electricityUnitPrice} vnd</td>
                                                        <td>{(singleBill.totalElectricity)} vnd</td>
                                                    </tr>
                                                </>
                                            ) : (
                                                <>
                                                </>
                                            )}

                                            
                                            <tr>
                                                <th scope="row">Nước</th>

                                                {singleBill.oldWaterNum !== 0 ? (
                                                    <>
                                                        <td>{singleBill.oldWaterNum} khối</td>
                                                        <td>{singleBill.newWaterNum} khối</td>
                                                    </>
                                                ) :
                                                    <>
                                                        <td></td>
                                                        <td></td>
                                                    </>}
                                                <td>{(singleBill.newWaterNum - singleBill.oldWaterNum)} {singleBill.oldWaterNum === 0 ? " người" : " khối"}</td>
                                                <td>{waterUnitPrice} vnd</td>
                                                <td>{singleBill.totalWater} vnd</td>
                                            </tr>

                                            {singleBill.totalInternet !== 0 ? (
                                                <>
                                                    <tr>
                                                        <th scope="row">Internet</th>
                                                        <td></td>
                                                        <td></td>
                                                        <td>1 phòng</td>
                                                        <td>{internetUnitPrice} vnd</td>
                                                        <td>{(singleBill.totalInternet)} vnd</td>
                                                    </tr>
                                                </>
                                            ) : (
                                                <>
                                                </>
                                            )}

                                            {singleBill.totalTrash !== 0 ? (
                                                <>
                                                    <tr>
                                                        <th scope="row">Vệ sinh</th>
                                                        <td></td>
                                                        <td></td>
                                                        <td>1 phòng</td>
                                                        <td>{trashUnitPrice} vnd</td>
                                                        <td>{(singleBill.totalTrash)} vnd</td>
                                                    </tr>
                                                </>
                                            ) : (
                                                <>
                                                </>
                                            )}

                                            <tr>
                                                <th scope="row">Phòng</th>
                                                <td>{formatDate(singleBill.startDate)}</td>
                                                <td>{formatDate(singleBill.endDate)}</td>
                                                <td>1 phòng</td>
                                                <td>{(singleBill.totalRoom)} vnd</td>
                                                <td>{(singleBill.totalRoom)} vnd</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Giảm giá</th>
                                                <td colSpan='3'></td>
                                                <td>{(singleBill.discount)} vnd</td>
                                                <td>{(singleBill.discount)} vnd</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Tổng </th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>{(singleBill.totalBill)} vnd</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><button type="button" className="btn btn-primary m-2">Xác nhận</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ViewBillDetails;