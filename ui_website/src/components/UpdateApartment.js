import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../styles/styles.css';
const UpdateApartment = () => {
    const [apartment_id, setApartmentId] = useState('');
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
    const [validationErrors, setValidationErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const { id } = useParams();
    const [fee, setFee] = useState([]);
    const [fileData, setFileData] = useState([]);
    const validateInput = (inputName, value) => {
        let error = "";

        if (inputName === "apartment_name" && value.trim() === "") {
            error = "Apartment name is required";
        }

        if (inputName === "phone1" && value.length > 11) {
            error = "Max lenght is 11 ";
        }
        if (inputName === "phone2" && value.length > 11) {
            error = "Max lenght is 11 ";
        }
        if (inputName === "phone2" && value.trim() === "" && phone1.trim() === "") {
            error = "At least  number of phone 1 or 2 is required";
        }
        if (inputName === "number_room" && value === '') {
            error = "Number room is required";
        }
        if (inputName === "address" && value.trim() === "") {
            error = "Address is required";
        }

        if (inputName === "electric" && value === '') {
            error = "Number electric is required";
        }
        if (inputName === "water" && value === '') {
            error = "Number water is required";
        }
        if (inputName === "water_bill " && value === '') {
            error = "Number water bil is required";
        }
        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [inputName]: error,
        }));
    };

    const handleInputChange = (inputName, value) => {
        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [inputName]: "",
        }));

        switch (inputName) {
            case "apartment_name":
                setApartmentName(value);
                break;
            case "phone1":
                setPhone1(value);
                break;
            case "phone2":
                setPhone2(value);
                break;
            case "address":
                setAddress(value);
                break;
            case "number_room":
                setNumberRoom(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "electric":
                setElectric(value);
                break;
            case "water":
                setWater(value);
                break;
            case "water_bill":
                setWaterBill(value);
                break;
            case "internet":
                setInternet(value);
                break;
            case "trash":
                setTrash(value);
                break;
            default:
                break;
        }
    };

    const handleBlur = (inputName, value) => {
        validateInput(inputName, value);
    };
    const handDelete = () => {
        setApartmentImg('');
    };
    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            setApartmentImg(e.target.files[0]);
            setSubmitted(false)
        }
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("apartment_img", apartment_img);

            // Gửi file ảnh tới server
            const response = await axios.post("http://localhost:3001/uploadApartment", formData);
            console.log(response.data);
            const newFileName = response.data.newFileName;
            setApartmentImg(newFileName);
            setSubmitted(true);
        } catch (error) {
            console.error("Error uploading image: ", error);
        }
    };
    return (
        <div className="container mt-5">
            <h2 className="text-center mt-3"> UPDATE APARTMENT {id}</h2>
            <div className="d-flex justify-content-center">
                <div className=" col-md-8  form-custome mt-3" >
                    <div className="card-body col-md-4 ">
                        <div className="form-group mb-2 d-flex">
                            <span className="  fa-custom" ><i className="fa fa-building" aria-hidden="true"></i></span>
                            <div style={{ width: "100%" }}>
                                <input
                                    type="text" maxLength={30} minLength={1} required={true}
                                    placeholder="Enter apartment name"
                                    name="lastName"
                                    className={`form-control ${validationErrors.apartment_name && 'is-invalid'}`}
                                    value={apartment_name}
                                    onChange={(e) => handleInputChange("apartment_name", e.target.value)}
                                    onBlur={(e) => handleBlur("apartment_name", e.target.value)}
                                />
                                {validationErrors.apartment_name && (
                                    <div className="invalid-feedback">{validationErrors.apartment_name}</div>
                                )}</div>
                        </div><br />
                        <div className="form-group mb-2 d-flex">
                            <span className="  fa-custom" ><i className="fa fa-phone" aria-hidden="true"></i></span>
                            <div style={{ width: "100%" }}>
                                <input
                                    type="number" required={true}
                                    placeholder="Enter number of phone 1"
                                    name="lastName"
                                    className={`form-control ${validationErrors.phone1 && 'is-invalid'}`}
                                    value={phone1}
                                    onChange={(e) => handleInputChange("phone1", e.target.value)}
                                    onBlur={(e) => handleBlur("phone1", e.target.value)}
                                />{validationErrors.phone1 && (
                                    <div className="invalid-feedback">{validationErrors.phone1}</div>
                                )}</div>
                        </div><br />
                        <div className="form-group mb-2 d-flex">
                            <span className="  fa-custom" ><i className="fa fa-phone" aria-hidden="true"></i></span>
                            <div style={{ width: "100%" }}>
                                <input
                                    type="number" required={true}
                                    placeholder="Enter number of phone 2"
                                    name="lastName"
                                    className={`form-control ${validationErrors.phone2 && 'is-invalid'}`}
                                    value={phone2}
                                    onChange={(e) => handleInputChange("phone2", e.target.value)}
                                    onBlur={(e) => handleBlur("phone2", e.target.value)}
                                />{validationErrors.phone2 && (
                                    <div className="invalid-feedback">{validationErrors.phone2}</div>
                                )}</div>
                        </div><br />
                        <div className="form-group mb-2 d-flex">
                            <span className="  fa-custom" ><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                            <div style={{ width: "100%" }}>
                                <input
                                    type="text" minLength={1} required={true}
                                    placeholder="Enters address "
                                    name="lastName"
                                    className={`form-control ${validationErrors.address && 'is-invalid'}`}
                                    value={address}
                                    onChange={(e) => handleInputChange("address", e.target.value)}
                                    onBlur={(e) => handleBlur("address", e.target.value)}
                                />{validationErrors.address && (
                                    <div className="invalid-feedback">{validationErrors.address}</div>
                                )}</div>
                        </div><br />
                        <div className="form-group mb-2 d-flex">
                            <span className="  fa-custom" ><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></span>
                            <div className="ms-1 row" style={{ width: "100%" }}>
                                <input
                                    type="number" maxLength={30} minLength={1} min={0} required={true}
                                    placeholder="Enter number room"
                                    name="lastName"
                                    className={`form-control  w-75 ${validationErrors.number_room && 'is-invalid'}`}
                                    value={number_room}
                                    onChange={(e) => handleInputChange("number_room", e.target.value)}
                                    onBlur={(e) => handleBlur("number_room", e.target.value)}
                                /><span className="col-2 ms-3 input-group-text justify-content-center" ><i className="fa fa-home" aria-hidden="true"></i></span>
                                {validationErrors.number_room && (
                                    <div className="invalid-feedback">{validationErrors.number_room}</div>
                                )}</div>
                        </div><br />

                        <div className="form-group mb-2 d-flex">
                            <span className=" fa-custom" >  <i className="fa fa-info-circle" aria-hidden="true"></i></span>
                            <textarea
                                type="number" maxLength={255} minLength={1}
                                placeholder="Enter description"
                                name="lastName"
                                className="form-control "
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div><br />
                    </div>
                    <div className="card-body col-md-4 ms-5">

                        <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" > <i className="fa fa-bolt"></i></span>
                            <input
                                type="number" maxLength={30} minLength={1} required={true}
                                placeholder="Enter electric number"
                                name="lastName"
                                className="form-control"
                                value={electric}
                                onChange={(e) => setElectric(e.target.value)}
                            /><span className=" input-group-text  mx-3  fa-custom-1" >kWh</span>
                        </div>
                        <br />
                        <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" > <i className="fa fa-tint" aria-hidden="true"></i></span>
                            <input
                                type="number" minLength={1} required={true}
                                placeholder="Enter Water number"
                                name="lastName"
                                className="form-control"
                                value={water}
                                onChange={(e) => setWater(e.target.value)}
                            /><span className="input-group-text  mx-3  fa-custom-1" >m<sup>3</sup></span>
                        </div> <br />
                        <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" > <i className="fa fa-tint" aria-hidden="true"></i></span>
                            <input
                                type="number" minLength={1} required={true}
                                placeholder="Enter Water number"
                                name="lastName"
                                className="form-control"
                                value={water_bill}
                                onChange={(e) => setWaterBill(e.target.value)}
                            /><span className="input-group-text  mx-3  fa-custom-1" >VND/1m<sup>3</sup></span>
                        </div> <br />
                        <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" > <i style={{ fontSize: "16px" }} className="fa fa-wifi" aria-hidden="true"></i></span>
                            <input
                                type="number" maxLength={30} minLength={1} required={true}
                                placeholder="Enter internet"
                                name="lastName"
                                className="form-control"
                                value={internet}
                                onChange={(e) => setInternet(e.target.value)}
                            /><span className=" input-group-text mx-3 fa-custom-1" >VND/M</span>
                        </div> <br />

                        <div className="form-group mb-2 d-flex" >
                            <span className="fa-custom"><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                            <input
                                type="number" maxLength={30} minLength={1} required={true}
                                placeholder="Enter trash"
                                name="lastName" style={{ width: "88%" }}
                                className="form-control "
                                value={trash}
                                onChange={(e) => setTrash(e.target.value)}
                            />
                        </div><br />
                        <div className="form-group ms-3 mb-2 d-flex ">
                            <label for="images" width className="drop-container" id="dropcontainer" style={{ width: "120%" }}>
                                <span className="drop-title">Drop files here</span>
                                or
                                <input style={{ width: "30%" }} className="mb-1" type="file" id="images" accept="image/*" onChange={handleImageChange} required />
                            </label>

                        </div><br />
                        <div>
                            <div>
                                {apartment_img && (
                                    <div className="d-flex">
                                        <div style={{ width: 190 }}><img style={{ width: "200px" }} src={submitted ? `http://localhost:3001/images/${apartment_img}` : URL.createObjectURL(apartment_img)} /> </div>
                                        {console.log(apartment_img)}
                                        <div style={{ width: 20 }}>
                                            <sup >
                                                <i className="btn fa fa-times-circle" onClick={handDelete} aria-hidden="true"></i>
                                            </sup>
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='d-flex justify-content-end mt-5 mb-3 ms-5 justify-content-center'>
                <div className='col-1 '>
                    <button className="btn btn-success" onClick={handleSubmit} >Finish </button>
                </div>
                <div className='col-2'>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateApartment;
