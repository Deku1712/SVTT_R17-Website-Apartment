import React from 'react'
import Room from '../../Component/Room/Room';
import ModalRoom from '../../Component/Modal/ModalRoom';
import Button from 'react-bootstrap/Button';
export default function ApartmentRooms(props) {

    const apartment = props.apartment;
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="bg-white pt-3">
            <ModalRoom show={modalShow}
                onHide={() => setModalShow(false)} apartment = {apartment}/>

            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <Button className='mb-3 ' onClick={() => setModalShow(true)}>
                    Add Room
                </Button>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {apartment.rooms && apartment.rooms.map(room => <Room room ={room}/>)}
                </div>
            </div>
        </div>
    )
}
