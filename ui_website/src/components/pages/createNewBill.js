import React, { useEffect, useState } from 'react';
import { addBill } from '../../Services/BillService';
import { fetchAllApartment } from '../../Services/BillService';
import { useNavigate, Link } from 'react-router-dom';
const CreateNewBill = () => {

    const navigate = useNavigate();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substr(0, 10);

    const [createDate, setCreateDate] = useState(formattedDate);
    const [startDate, setStartDate] = useState(formattedDate);
    const [endDate, setEndDate] = useState(formattedDate);

    const [oldElectricityNum, setOldElectricityNum] = useState(100);
    const [newElectricityNum, setNewElectricityNum] = useState(oldElectricityNum);
    const [totalElectricity, setTotalElectricity] = useState("");

    const [oldWaterNum, setOldWaterNum] = useState(10);
    const [newWaterNum, setNewWaterNum] = useState(oldWaterNum);
    const [totalWater, setTotalWater] = useState("");

    const [totalInternet, setTotalInternet] = useState(0);
    const [totalTrash, setTotalTrash] = useState("");


    const [totalRoom, setTotalRoom] = useState(1800000);
    const [discount, setDiscount] = useState("");

    const [totalBill, setTotalBill] = useState(0);
    const bill = {
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

    const [apartment, setApartment] = useState("");

    // Initialize state variables for each row
    const [electricityUsage, setElectricityUsage] = useState(0);
    const [electricityUnitPrice, setElectricityUnitPrice] = useState(0);
    const [waterUsage, setWaterUsage] = useState(0);
    const [waterUnitPrice, setWaterUnitPrice] = useState(0);
    const [internetUsage, setInternetUsage] = useState(1);
    const [internetUnitPrice, setInternetUnitPrice] = useState(0);

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

                            // Set state variables directly from feesItem
                            if (feesItem.priceOfElectricity !== undefined) {
                                setElectricityUnitPrice(feesItem.priceOfElectricity);
                            }
                            if (feesItem.priceOfWater !== undefined) {
                                setWaterUnitPrice(feesItem.priceOfWater);
                            }
                            if (feesItem.priceOfInternet !== undefined) {
                                setInternetUnitPrice(feesItem.priceOfInternet);
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

    const formatCurrency = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const [waterUnit, setWaterUnit] = useState(true);
    // đơn vị là người
    const handleChangeWaterUnitF = () => {
        setOldWaterNum(0);
        setNewWaterNum(0);
        setWaterUnit(false);
    }
    // đơn vị là khối 
    const handleChangeWaterUnitT = () => {
        setWaterUnit(true);

    }

    // Function to calculate "Thành Tiền" based on the current state
    const calculateTotal = () => {
        return Number(totalElectricity) + Number(totalWater) + Number(totalInternet) + Number(totalTrash) + Number(totalRoom);
    };

    useEffect(() => {
        getApartment();
    }, []);


    // add new bill
    const handelAddBill = async () => {
        try {
            // Update the totalBill field in the bill object
            const updatedBill = {
                ...bill,
                totalBill: calculateTotal()
            };

            // Call the addBill function or perform any other necessary actions with the updatedBill

            let res = await addBill(updatedBill);
            navigate('/viewAllBills');

            console.log("SDate:", startDate);
            console.log("EDate:", endDate);

            console.log("Total Bill: ", updatedBill.totalBill);
            console.log("Bill: ", updatedBill);
        } catch (error) {
        }
    };

    useEffect(() => {
        setElectricityUsage(newElectricityNum - oldElectricityNum);
        if (newWaterNum < oldWaterNum) {
            setWaterUsage(0);
        } else {
            setWaterUsage(newWaterNum - oldWaterNum);
        }
    }, [newElectricityNum, newWaterNum])

    useEffect(() => {
        setTotalElectricity(electricityUsage * electricityUnitPrice);
        setTotalWater(waterUsage * waterUnitPrice);
    }, [electricityUsage, waterUsage])

    const calculateStartDate = (endDate) => {
        const end = new Date(endDate);
        const start = new Date(end);
        start.setMonth(end.getMonth() - 1);
        return start.toISOString().substr(0, 10);
    };

    // Function to calculate end date based on start date
    const calculateEndDate = (startDate) => {
        const start = new Date(startDate);
        const end = new Date(start);
        end.setMonth(start.getMonth() + 1);
        return end.toISOString().substr(0, 10);
    };


    return (
        <section>
            <div className="container py-5">
                <div className="row">

                    <div className="card mb-
                    4 mb-lg-0">
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
                                    <i className="fas fa-chart-area fa-fw me-3"></i><span>Ngày tạo hóa đơn: {formattedDate}</span>
                                </a>
                                <div className='d-flex my-2'>
                                    <div className='d-flex'>
                                        <p>Ngày bắt đầu: </p>
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => {
                                                setStartDate(e.target.value);
                                                setEndDate(calculateEndDate(e.target.value));
                                            }}
                                        />
                                    </div>
                                    <div className='d-flex'>
                                        <p>Ngày kết thúc: </p>
                                        <input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => {
                                                setEndDate(e.target.value);
                                                setStartDate(calculateStartDate(e.target.value))
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="card-body text-center d-flex">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">P103</th>
                                                <th scope="col">Số cũ</th>
                                                <th scope="col">Số mới</th>
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
                                                        value={oldElectricityNum}
                                                    />

                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={oldElectricityNum}
                                                        value={newElectricityNum}
                                                        onChange={(e) => { setNewElectricityNum(e.target.value) }}
                                                    />

                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={electricityUsage}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={electricityUnitPrice}
                                                    />
                                                    vnd
                                                </td>
                                                <td>{formatCurrency(totalElectricity)} vnd</td>
                                            </tr>


                                            {waterUnit ? (
                                                <tr>
                                                    <th scope="row">Nước</th>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            min={0}
                                                            value={oldWaterNum}
                                                        />

                                                    </td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            min={0}

                                                            value={newWaterNum}
                                                            onChange={(e) => { setNewWaterNum(e.target.value); setTotalWater((newWaterNum - oldWaterNum) * waterUnitPrice) }}
                                                        />

                                                    </td>
                                                    <td >
                                                        <div >
                                                            <input
                                                                type="number"
                                                                min={0}
                                                                value={waterUsage}
                                                                onChange={(e) => setWaterUsage(e.target.value)}
                                                            />
                                                        </div>

                                                        <div >
                                                            <input type="radio" checked={waterUnit} onClick={handleChangeWaterUnitT} />
                                                            <label>Khối</label>

                                                            <input type="radio" checked={!waterUnit} onClick={handleChangeWaterUnitF} />
                                                            <label>Người</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            min={0}
                                                            value={waterUnitPrice}
                                                        />
                                                        vnd
                                                    </td>
                                                    <td>{formatCurrency(totalWater)} vnd</td>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <th scope="row">Nước</th>
                                                    <td> </td>
                                                    <td></td>
                                                    <td >
                                                        <div>
                                                            <input
                                                                type="number"
                                                                min={0}
                                                                onChange={(e) => setNewWaterNum(e.target.value)}
                                                            />
                                                        </div>

                                                        <div >
                                                            <input type="radio" checked={waterUnit} onClick={handleChangeWaterUnitT} />
                                                            <label >Khối</label>

                                                            <input type="radio" checked={!waterUnit} onClick={handleChangeWaterUnitF} />
                                                            <label >Người</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            min={0}
                                                            value={waterUnitPrice}
                                                        />
                                                        vnd
                                                    </td>
                                                    <td>{formatCurrency(totalWater)} vnd</td>
                                                </tr>
                                            )}

                                            <tr>
                                                <th scope="row">Internet</th>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={internetUsage}
                                                    />

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
                                                <td>{formatCurrency(internetUnitPrice)} vnd</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Phòng</th>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={1}
                                                        value={1}
                                                    />

                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={totalRoom}
                                                    />
                                                    vnd
                                                </td>
                                                <td>{formatCurrency(totalRoom)} vnd</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th scope="row">Tổng</th>
                                                <td colspan="4">
                                                    {/* <input
                                                        type="number"
                                                        min={0}
                                                        onChange={(e) => setTotalBill(Number(totalElectricity) + Number(totalWater) + Number(totalInternet) + Number(totalTrash) + Number(totalRoom))}
                                                    />  */}
                                                </td>
                                                <td>{formatCurrency(calculateTotal())} vnd</td>
                                            </tr>
                                            <tr>
                                                <td colspan="5"></td>
                                                <td class="text-center">
                                                    <button type="button" class="btn btn-primary m-2" onClick={() => handelAddBill()}>Xác nhận</button>
                                                </td>
                                            </tr>
                                        </tfoot>
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
