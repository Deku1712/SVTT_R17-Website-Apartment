import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../styles/styles.css';
const UpdateRoom = () => {
    const [room_id, setRoomId] = useState('');
    const [room_name, setRoomName] = useState('');
    const [size_renter, setSizeRenter] = useState('');
    const [room_size, setRoomSize] = useState('');
    const [description, setDescription] = useState('');
    const [room_free, setRoomFree] = useState('');
    const [room_type, setRoomType] = useState('');
    const [room_img, setRoomImg] = useState('');
    const [active, setActive] = useState("");
    const { id } = useParams();


    return (
        <div className="container mt-5 mb-3">
            <h2 className="text-center mt-3 "> UPDATE ROOM {id}</h2>
            <div className=" d-flex justify-content-center mt-3">
                <div className="card col-md-5 form-custom " >
                    <div className="card-body ">
                        <form>
                            <div className="form-group mb-2 d-flex">

                                <span className=" fa-custom" > <i class="fa fa-home" aria-hidden="true"></i></span>
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
                                <span className=" fa-custom"> <i class="fa fa-users" aria-hidden="true"></i></span>
                                <input
                                    type="number" minLength={1} required={true} min={0}
                                    placeholder="Number of people"
                                    className="form-control w-75"
                                    value={size_renter}
                                    onChange={(e) => setSizeRenter(e.target.value)}
                                />
                            </div> <br />
                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom" ><i class="fa fa-street-view" aria-hidden="true"></i></span>
                                <input
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter acreage"
                                    className="form-control w-75"
                                    value={room_size}
                                    onChange={(e) => setRoomSize(e.target.value)}
                                />
                            </div> <br />
                            <div className="form-group mb-2 d-flex">
                                <span className="fa-custom" ><i class="fa fa-check-square" aria-hidden="true"></i></span>

                                <input className="ms-3"
                                    type="radio"
                                    id="active"
                                    value="false"
                                    checked={active === "false"}
                                    onChange={(e) => setActive(e.target.value)}
                                /><label className="ms-3"  for="active">Active</label><br />

                                <input
                                    type="radio" className="ms-3" id="complete"
                                    value="true"
                                    checked={active === "true"}
                                    onChange={(e) => setActive(e.target.value)}
                                /><label className="ms-3" for="complete">Complete</label><br />


                            </div> <br />
                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom" ><i class="fa fa-money" aria-hidden="true"></i></span>
                                <input
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter price room"
                                    className="form-control w-75"
                                    value={room_free}
                                    onChange={(e) => setRoomFree(e.target.value)}
                                /><span className="input-group-text fa-custom-1" >VND</span>
                            </div> <br />
                            <div className="form-group mb-2  d-flex">
                                <span className=" fa-custom" ><i class="fa fa-info" aria-hidden="true"></i></span>
                                <textarea
                                    type="number" maxLength={255} minLength={1} required={true}
                                    placeholder="Enter description..."
                                    className="form-control w-75"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div><br />
                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom" ><i class="fa fa-filter" aria-hidden="true"></i></span>
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
                                    <input className="mb-1" type="file" id="images" accept="image/*" value={room_img} onChange={(e) => setRoomImg(e.target.value)} required />
                                </label>

                            </div><br />

                        </form>

                    </div>
                    <div className='d-flex justify-content-end mt-3 mb-3  justify-content-center'>
                <div className='col-2 '>
                    <button className="btn btn-success"  >Finish </button>
                </div>
                <div className='col-2'>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </div>
            </div>
                </div>

            </div>

        </div>
    );
};

export default UpdateRoom;
