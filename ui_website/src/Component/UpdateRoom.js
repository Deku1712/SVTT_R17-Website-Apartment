import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../styles/styles.css';
const UpdateRoom = () => {
    const [room_id, setRoomId] = useState('');
    const [room_name, setRoomName] = useState('');
    const [size_renter, setSizeRenter] = useState('');
    const [room_size, setRoomSize] = useState('');
    const [description, setDescription] = useState('');
    const [room_status, setRoomStatus] = useState(true);
    const [room_free, setRoomFree] = useState('');
    const [room_type, setRoomType] = useState('');
    const [room_img, setRoomImg] = useState('');
    const { id } = useParams();
    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center mt-3"> UPDATE ROOM </h2>

                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label"> Room id :</label>

                                <input
                                    type="hidden" maxLength={10} minLength={1} required={true}

                                    name="lastName"
                                    className="form-control"
                                    value={room_id}
                                    onChange={(e) => setRoomId(e.target.value)}
                                />
                                {id}
                            </div>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label"> Room Name :</label>
                                <input
                                    type="text" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter room name"
                                    name="lastName"
                                    className="form-control"
                                    value={room_name}
                                    onChange={(e) => setRoomName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label"> Number of people:</label>
                                <input
                                    type="number" minLength={1} required={true}
                                    placeholder="Enter number of people"
                                    name="lastName"
                                    className="form-control"
                                    value={size_renter}
                                    onChange={(e) => setSizeRenter(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label"> Acreage:</label>
                                <input
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter acreage"
                                    name="lastName"
                                    className="form-control"
                                    value={room_size}
                                    onChange={(e) => setRoomSize(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label">Description:</label>
                                <textarea
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter description"
                                    name="lastName"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2  d-flex">
                                <label className="form-label"> Type room  :</label>
                                <br />
                                <select name="text-center form-control form-select" value={room_type}
                                    onChange={(e) => setRoomType(e.target.value)}>
                                    <option disabled >Choose type room</option>
                                    <option value="E" >Easy</option>
                                    <option value="N" >Normal</option>
                                    <option value="H" >Hard</option>
                                </select>
                            </div>
                            <br />
                            <div className=' row d-flex justify-content-end'>
                                <div className='col-3 '>
                                    <button className="btn btn-success"  >Finish </button>
                                </div>
                                <div className='col-3'>
                                    <Link to="/" className="btn btn-danger">Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default UpdateRoom;
