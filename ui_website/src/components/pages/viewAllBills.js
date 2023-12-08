
import React, { useState, useEffect } from 'react';
import { fetchAllBill, getBillById, getBillByRoomName } from '../../Services/BillService';
import { useDispatch, useSelector } from 'react-redux';
import { getBillDetailsRedux, getBillRedux } from '../../Redux/bill/BillAction';
import { useNavigate, Link } from 'react-router-dom';
const ViewAllBills = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substr(0, 10);
    const bills = useSelector(state => state.bill.bill);

    const [searchRoomName, setSearchRoomName] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [filteredBills, setFilteredBills] = useState([]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const dispatch = useDispatch();
    const handleViewDetail = async (id) => {
        dispatch(getBillDetailsRedux(id));
    }

    const handleSearchByRoomName = (roomName) => {
        setSearchRoomName(roomName.trim());
    };
    const handleSearchByDate = (searchDate) => {
        setSearchDate(searchDate);
    };

    useEffect(() => {
        // Filter bills based on search criteria
        let tempFilteredBills = [...bills];

        if (searchRoomName !== "") {
            tempFilteredBills = tempFilteredBills.filter(item => item.room?.room_name.includes(searchRoomName));
        }

        if (searchDate !== "") {
            tempFilteredBills = tempFilteredBills.filter(item => {
                const startDate = new Date(item.startDate);
                const endDate = new Date(item.endDate);
                const searchDateTime = new Date(searchDate);

                return startDate <= searchDateTime && searchDateTime <= endDate;
            });
        }

        // Sort the filtered bills by create date in descending order
        tempFilteredBills.sort((a, b) => {
            const dateA = new Date(a.createDate);
            const dateB = new Date(b.createDate);
            return dateB - dateA;
        });

        setFilteredBills(tempFilteredBills);
    }, [searchRoomName, searchDate, bills]);

    useEffect(() => {
        dispatch(getBillRedux());
    }, []);


    // phan trang
    const [currentPage, setCurrentPage] = useState(1);
    const billsPerPage = 5;

    // Calculate the index range for the current page
    const indexOfLastBill = currentPage * billsPerPage;
    const indexOfFirstBill = indexOfLastBill - billsPerPage;
    const currentBills = filteredBills.slice(indexOfFirstBill, indexOfLastBill);

    const totalPages = Math.ceil(filteredBills.length / billsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
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
                                        <i className="fas fa-tachometer-alt fa-fw me-3"></i><span className='fw-bold'>Tìm kiếm:</span>
                                    </a>
                                    <div className="card-body p-0 my-2">
                                        <form className="form-inline my-2 my-lg-0 d-flex">
                                            <input
                                                className="form-control mr-sm-2 mx-2"
                                                type="search"
                                                placeholder="Tên phòng"
                                                aria-label="Search"
                                                onChange={(e) => { handleSearchByRoomName(e.target.value) }}
                                            />

                                            <input
                                                className="form-control mr-sm-2 mx-2"
                                                type="date"
                                                onChange={(e) => { handleSearchByDate(e.target.value) }}
                                            />
                                            {/* <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button> */}
                                        </form>
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
                                            <th scope="col">Tên Phòng</th>
                                            <th scope="col">Ngày tạo</th>
                                            <th scope="col">Ngày bắt đầu</th>
                                            <th scope="col">Ngày kết thúc</th>
                                            <th scope="col">Tổng tiền</th>
                                            <th scope="col">Xem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentBills && currentBills.length > 0 && currentBills.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th scope="row">{item.room?.room_name}</th>
                                                    <td>{formatDate(item.createDate)}</td>
                                                    <td>{formatDate(item.startDate)}</td>
                                                    <td>{formatDate(item.endDate)}</td>
                                                    <td>{item.totalBill}</td>
                                                    <td>
                                                        <Link
                                                            to={`/viewBillDetails/${item.id}`}
                                                            onClick={() => handleViewDetail(item.id)}
                                                            className="btn btn-primary m-2"
                                                        >
                                                            Xem chi tiết
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex justify-content-center">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                <a className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default ViewAllBills;