import React, { useState } from 'react';

const CreateNewBill = () => {
    // Initialize state variables for each row
    const [electricityUsage, setElectricityUsage] = useState(0);
    const [electricityUnitPrice, setElectricityUnitPrice] = useState(0);
    const [waterUsage, setWaterUsage] = useState(0);
    const [waterUnitPrice, setWaterUnitPrice] = useState(0);
    const [internetUsage, setInternetUsage] = useState(0);
    const [internetUnitPrice, setInternetUnitPrice] = useState(0);
    const [roomUsage, setRoomUsage] = useState(0);
    const [roomUnitPrice, setRoomUnitPrice] = useState(0);

    const formatCurrency = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // Function to calculate "Thành Tiền" based on the current state
    const calculateTotal = () => {
        const electricityTotal = electricityUsage * electricityUnitPrice;
        const waterTotal = waterUsage * waterUnitPrice;
        const internetTotal = internetUsage * internetUnitPrice;
        const roomTotal = roomUsage * roomUnitPrice;

        const total = electricityTotal + waterTotal + internetTotal + roomTotal;
        return total;
    };

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
                                    <i className="fas fa-tachometer-alt fa-fw me-3 "></i><span className='fw-bold'>Tạo hóa đơn mới</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
                                    <i className="fas fa-chart-area fa-fw me-3"></i><span>Ngày tạo hóa đơn: 21/11/2023</span>
                                </a>
                                <div className="card-body text-center d-flex">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">P103</th>
                                                <th scope="col">Mức sử dụng</th>
                                                <th scope="col">Đơn giá</th>
                                                <th scope="col">Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Điện</th>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={electricityUsage}
                                                        onChange={(e) => setElectricityUsage(e.target.value)}
                                                    />
                                                     chữ
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={electricityUnitPrice}
                                                        onChange={(e) => setElectricityUnitPrice(e.target.value)}
                                                    />
                                                    vnd
                                                </td>
                                                <td>{formatCurrency(electricityUsage * electricityUnitPrice)} vnd</td>
                                            </tr>


                                            <tr>
                                                <th scope="row">Nước</th>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={waterUsage}
                                                        onChange={(e) => setWaterUsage(e.target.value)}
                                                    />
                                                    người
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={waterUnitPrice}
                                                        onChange={(e) => setWaterUnitPrice(e.target.value)}
                                                    />
                                                    vnd
                                                </td>
                                                <td>{formatCurrency(waterUsage * waterUnitPrice)} vnd</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Internet</th>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={internetUsage}
                                                        onChange={(e) => setInternetUsage(e.target.value)}
                                                    />
                                                    phòng
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={internetUnitPrice}
                                                        onChange={(e) => setInternetUnitPrice(e.target.value)}
                                                    />
                                                    vnd
                                                </td>
                                                <td>{formatCurrency(internetUsage * internetUnitPrice)} vnd</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Phòng</th>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={1}
                                                        value={roomUsage}
                                                        onChange={(e) => setRoomUsage(e.target.value)}
                                                    />
                                                    phòng
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={roomUnitPrice}
                                                        onChange={(e) => setRoomUnitPrice(e.target.value)}
                                                    />
                                                    vnd
                                                </td>
                                                <td>{formatCurrency(roomUsage * roomUnitPrice)} vnd</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Tổng </th>
                                                <td></td>
                                                <td></td>
                                                <td>{formatCurrency(calculateTotal())} vnd</td>
                                            </tr>
                                        </tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <button type="button" className="btn btn-primary m-2">Xác nhận</button>
                                            <td></td>
                                        </tr>
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
export default CreateNewBill;
