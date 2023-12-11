import React, { useState } from 'react'
import Room from '../../Component/Room/Room';
import ModalRoom from '../../Component/Modal/ModalRoom';
import Button from 'react-bootstrap/Button';
import ReactPaginate from 'react-paginate';
import '../../styles/pagination.css'
export default function ApartmentRooms(props) {

    const apartment = props.apartment;
    const [modalShow, setModalShow] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const roomsPerPage = 4;

    const totalRooms = apartment.rooms.length;
    const totalPages = Math.ceil(totalRooms / roomsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const indexOfLastRoom = (currentPage + 1) * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = apartment.rooms.slice(indexOfFirstRoom, indexOfLastRoom);
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1 && value <= totalPages) {
            setCurrentPage(value - 1);
        }
    };
    return (
        <div className="bg-white pt-3">
            <ModalRoom show={modalShow} idApart={apartment.id}
                onHide={() => setModalShow(false)} apartment={apartment} />
            <h3 className='text-center'>List Room</h3>
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className='d-flex justify-content-between '>

                    <Button className='mb-3 ' onClick={() => setModalShow(true)}>
                        Add Room
                    </Button>
                    {apartment.rooms.length !== 0? (<div className='align-items-center d-flex'>
                        <input
                            type="number"
                            style={{ width: '20%' }}
                            onChange={handleInputChange}
                            defaultValue={currentPage + 1}
                            max={totalPages}
                        />
                        <span className='text-larger mx-3'>{currentPage + 1 + '/' + totalPages}</span>
                        <ReactPaginate
                            containerClassName={"pagination"}
                            pageClassName={"page-item"}
                            onPageChange={handlePageClick}
                            pageCount={totalPages}
                            previousLabel={
                                <span >
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                </span>
                            }
                            nextLabel={
                                <span >
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            }
                        />

                    </div>):null }

                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {/* {apartment.rooms && apartment.rooms.map(room => <Room room ={room}/>)} */}
                    {currentRooms && currentRooms.map((room) => <Room key={room.id} room={room} />)}
                </div>

            </div>
        </div>
    )
}
