
import React from 'react';
const ViewBillDetails = () => (
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
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>Ngày tạo hóa đơn: 21/11/2023</span>
                            </a>
                            <div className="card-body text-center d-flex">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">P103</th>
                                            <th scope="col">Sử dụng</th>
                                            <th scope="col">Đơn giá</th>
                                            <th scope="col">Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Điện</th>
                                            <td>200 chữ</td>
                                            <td>3.000 vnd</td>
                                            <td>600.000 vnd</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Nước</th>
                                            <td>2 người</td>
                                            <td>40.000 vnd</td>
                                            <td>80.000 vnd</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Internet</th>
                                            <td>1 phòng</td>
                                            <td>30.000 vnd</td>
                                            <td>30.000 vnd</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phòng</th>
                                            <td>1 phòng</td>
                                            <td>1.800.000 vnd</td>
                                            <td>1.800.000 vnd</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Tổng </th>
                                            <td></td>
                                            <td></td>
                                            <td>2.510.000 vnd</td>
                                        </tr>
                                        <tr>
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
export default ViewBillDetails;