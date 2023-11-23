import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../styles/styles.css';
const UpdateApartment = () => {
    const [apartment_name, setApartmentName] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [address, setAddress] = useState('');
    const [number_room, setNumberRoom] = useState('');
    const [description, setDescription] = useState('');
    const [electric, setElectric] = useState('');
    const [water, setWater] = useState('');
    const [water_bill, setWaterBill] = useState('');
    const [internet, setInternet] = useState('');
    const [trash, setTrash] = useState('');
    const [apartment_img, setApartmentImg] = useState('');
    const { id } = useParams();
    const [fee, setFee] = useState([]);


    return (
        <div className="container mt-5">
            <h2 className="text-center mt-3"> UPDATE APARTMENT {id}</h2>
            <div className=" row-custome">
                <div className="card col-md-5  form-custome ">
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2 d-flex">

                                <label className="form-label"> Apartment Name :</label>

                                <input
                                    type="text" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter apartment name"
                                    name="lastName"
                                    className="form-control "
                                    value={apartment_name}
                                    onChange={(e) => setApartmentName(e.target.value)}
                                />


                            </div>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label"> Phone 1:</label>
                                <input
                                    type="number" minLength={1} maxLength={11} required={true} pattern="[0]{1}[0-9]{3}[0-9]{3}[0-9]{3}"
                                    placeholder="Enter number of phone 1"
                                    name="lastName"
                                    className="form-control"
                                    value={phone1}
                                    onChange={(e) => setPhone1(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label"> Phone 2:</label>
                                <input
                                    type="number" minLength={1} maxLength={11} required={true}
                                    placeholder="Enter number of phone 2"
                                    name="lastName"
                                    className="form-control"
                                    value={phone2}
                                    onChange={(e) => setPhone2(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label"> Address :</label>
                                <input
                                    type="text" minLength={1} required={true}
                                    placeholder="Enters address "
                                    name="lastName"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label"> Number room:</label>
                                <input
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter number room"
                                    name="lastName"
                                    className="form-control"
                                    value={number_room}
                                    onChange={(e) => setNumberRoom(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-2 d-flex">
                                <label className="form-label">Description :</label>
                                <textarea
                                    type="number" maxLength={255} minLength={1}
                                    placeholder="Enter description"
                                    name="lastName"
                                    className="form-control "
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div><br />
                            <div className="form-group mb-2  d-flex">
                                <label for="images" className="drop-container" id="dropcontainer" style={{ width: "95%" }}>
                                    <span class="drop-title">Drop files here</span>
                                    or
                                    <input className="mb-1" type="file" id="images" accept="image/*" value={apartment_img} onChange={(e) => setApartmentImg(e.target.value)} required />
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card col-md-4  form-custome">
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" > <i class="fa fa-bolt"></i></span>
                                <input
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter electric number"
                                    name="lastName"
                                    className="form-control"
                                    value={electric}
                                    onChange={(e) => setElectric(e.target.value)}
                                />
                            </div>
                            <br />
                            <div className="form-group mb-2 d-flex">
                                <span className="fa-custom" > <i class="fa fa-tint" aria-hidden="true"></i></span>
                                <input
                                    type="number" minLength={1} required={true}
                                    placeholder="Enter Water number"
                                    name="lastName"
                                    className="form-control"
                                    value={water}
                                    onChange={(e) => setWater(e.target.value)}
                                />
                            </div> <br />
                            <div className="form-group mb-2 d-flex">
                                <label className="form-label-1"> Water Bill:</label>
                                <input
                                    type="number" minLength={1} required={true}
                                    placeholder="Enter Water number"
                                    name="lastName"
                                    className="form-control"
                                    value={water_bill}
                                    onChange={(e) => setWaterBill(e.target.value)}
                                />
                            </div> <br />
                            <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" > <i class="fa fa-wifi" aria-hidden="true"></i></span>
                                <input
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter internet"
                                    name="lastName"
                                    className="form-control"
                                    value={internet}
                                    onChange={(e) => setInternet(e.target.value)}
                                />
                            </div> <br />
                            <div className="form-group mb-2 d-flex">
                            <span className="fa-custom"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                                <input
                                    type="number" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter trash"
                                    name="lastName"
                                    className="form-control"
                                    value={trash}
                                    onChange={(e) => setTrash(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-end mt-5 ms-5'>
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

export default UpdateApartment;
