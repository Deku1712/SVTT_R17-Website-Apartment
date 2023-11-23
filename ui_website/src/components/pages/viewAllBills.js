
import React, { useState } from 'react';


const ViewAllBills = () => {

    const [isRoomListVisible, setIsRoomListVisible] = useState(false);

    const toggleRoomListVisibility = () => {
        setIsRoomListVisible(!isRoomListVisible);
    };
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
                                        <form class="form-inline my-2 my-lg-0 d-flex">
                                            <input class="form-control mr-sm-2 mx-2" type="search" placeholder="ID phòng" aria-label="Search" />
                                            <input class="form-control mr-sm-2 mx-2" type="date" />
                                            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
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
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID Phòng</th>
                                            <th scope="col">Ngày bắt đầu</th>
                                            <th scope="col">Ngày kết thúc</th>
                                            <th scope="col">Tổng tiền</th>
                                            <th scope="col">Xem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">P101</th>
                                            <td>11/11/2023</td>
                                            <td>11/12/2023</td>
                                            <td>2.643.000 vnd</td>
                                            <td><button type="button" className="btn btn-outline-primary ms-1 m-2">Xem chi tiết</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">P301</th>
                                            <td>05/11/2023</td>
                                            <td>05/12/2023</td>
                                            <td>2.643.000 vnd</td>
                                            <td><button type="button" className="btn btn-outline-primary ms-1 m-2">Xem chi tiết</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">P201</th>
                                            <td>29/10/2023</td>
                                            <td>29/11/2023</td>
                                            <td>2.643.000 vnd</td>
                                            <td><button type="button" className="btn btn-outline-primary ms-1 m-2">Xem chi tiết</button></td>
                                        </tr>
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