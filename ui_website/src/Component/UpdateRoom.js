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
    const [eclectric, setElectric] = useState('')
    const [water, setWater] = useState('')
    const [internet, setInternet] = useState('')
    const [trash, setTrash] = useState('')
    const { id } = useParams();

    return (
        <div className="container mt-5">
            <h2 className="text-center mt-3"> UPDATE ROOM {id}</h2>
            <div className=" row-custome">
                <div className="card col-md-4 form-custom " >
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2 d-flex">

                                <span className="fa-custom" > <i class="fa fa-home" aria-hidden="true"></i></span>
                                <input
                                    type="text" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter room name"
                                    className="form-control w-75"
                                    value={room_name}
                                    onChange={(e) => setRoomName(e.target.value)}
                                />
                            </div>
                            <br />
                            <div className="form-group mb-2 d-flex">
                                <span className="fa-custom"> <i class="fa fa-users" aria-hidden="true"></i></span>
                                <input
                                    type="number" minLength={1} required={true} min={0}
                                    placeholder="Number of people"
                                    className="form-control w-75"
                                    value={size_renter}
                                    onChange={(e) => setSizeRenter(e.target.value)}
                                />
                            </div> <br />
                            <div className="form-group mb-2 d-flex">
                                <span className="fa-custom" ><i class="fa fa-street-view" aria-hidden="true"></i></span>
                                <input
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter acreage"
                                    className="form-control w-75"
                                    value={room_size}
                                    onChange={(e) => setRoomSize(e.target.value)}
                                />
                            </div> <br />
                            <div className="form-group mb-2  d-flex">
                                <span className="fa-custom" ><i class="fa fa-info" aria-hidden="true"></i></span>
                                <textarea
                                    type="number" maxLength={255} minLength={1} required={true}
                                    placeholder="Enter description..."
                                    className="form-control w-75"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div><br />
                            <div className="form-group mb-2 d-flex">
                                <span className="fa-custom" ><i class="fa fa-filter" aria-hidden="true"></i></span>
                                <br />
                                <select name="text-center form-control form-select" value={room_type}
                                    onChange={(e) => setRoomType(e.target.value)}>
                                    <option value="" disabled >Choose type room</option>
                                    <option value="E" >Vip</option>
                                    <option value="N" >Normal</option>
                                </select>
                            </div>
                            <br />

                            <div className="form-group mb-2  d-flex">
                                <label for="images" className="drop-container" id="dropcontainer" style={{ width: "95%" }}>
                                    <span class="drop-title">Drop files here</span>
                                    or
                                    <input  className="mb-1" type="file" id="images" accept="image/*" value={room_img} onChange={(e) => setRoomImg(e.target.value)} required />
                                </label>

                            </div><br />

                        </form>

                    </div>
                </div>

                <div className="card col-md-4  form-custom " >
                    <div className="card-body">
                        <form >
                            <div className="form-group mb-2 d-flex justify-content-center">
                                <span className="fa-custom" > <i class="fa fa-bolt"></i></span>
                                <input
                                    type="number" minLength={1} required={true} min={0}
                                    placeholder=" Eclectric number"
                                    className="form-control w-50"
                                    value={eclectric}
                                    onChange={(e) => setElectric(e.target.value)}
                                />

                            </div>
                            <br />
                            <div className="form-group mb-2 d-flex justify-content-center">
                                <span className="fa-custom" > <i class="fa fa-tint" aria-hidden="true"></i></span>
                                <input
                                    type="number" minLength={1} required={true} min={0}
                                    placeholder=" Water number"
                                    className="form-control w-50"
                                    value={water}
                                    onChange={(e) => setWater(e.target.value)}
                                />

                            </div>
                            <br />
                            <div className="form-group mb-2 d-flex justify-content-center">
                                <span className="fa-custom" > <i class="fa fa-wifi" aria-hidden="true"></i></span>
                                <input
                                    type="number" minLength={1} required={true} min={0}
                                    placeholder=" Internet number"
                                    className="form-control w-50"
                                    value={internet}
                                    onChange={(e) => setInternet(e.target.value)}
                                />

                            </div>
                            <br />
                            <div className="form-group mb-2 d-flex justify-content-center">
                                <span className="fa-custom"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                                <input
                                    type="number" minLength={1} required={true} min={0}
                                    placeholder=" Trash number"
                                    className="form-control w-50"
                                    value={trash}
                                    onChange={(e) => setTrash(e.target.value)}
                                />

                            </div>
                            <br />
                            <div className="form-group mb-2 d-flex justify-content-center">
                                <span className="fa-custom"> <i class="fa fa-money" aria-hidden="true"></i></span>
                                <input
                                    type="number" minLength={1} required={true} min={0}
                                    placeholder="Total free"
                                    className="form-control w-50"
                                    value={room_free}
                                    onChange={(e) => setRoomFree(e.target.value)}
                                />
                            </div> <br />

                        </form>

                    </div>

                </div>

            </div>
            <div className='d-flex justify-content-end mt-3 mb-3 ms-5'>
                <div className='col-1 '>
                    <button className="btn btn-success"  >Finish </button>
                </div>
                <div className='col-2'>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateRoom;
