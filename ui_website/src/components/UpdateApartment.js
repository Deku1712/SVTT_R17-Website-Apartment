import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ServiceWeb from "../service/Service";
import '../styles/styles.css';
const UpdateApartment = () => {


    const [validationErrors, setValidationErrors] = useState({});
    const [fee, setFee] = useState({});
    const { id } = useParams();
    const [oldImg, setOldImg] = useState('');
    const [apartment, setApartment] = useState({})
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        ServiceWeb.getApartmentByID(id).then((response) => {
            console.log(response.data)
            setApartment(response.data)
            setFee(response.data.fees.reverse()[0])
            setSubmitted(true);
            console.log(response.data)
        })
            .catch((error) => {
                console.log(error)
            });

    };

    const validateInput = (inputName, value) => {
        let error = "";

        if (inputName === "apartmentName" && value.trim() === "") {
            error = "Apartment name is required";
        }

        if (inputName === "phone1" && value.length > 11) {
            error = "Max lenght is 11 ";
        }
        if (inputName === "phone2" && value.length > 11) {
            error = "Max lenght is 11 ";
        }
        if (inputName === "phone2" && value.trim() === "" && apartment.phoneNumber1.trim() === "") {
            error = "At least  number of phone 1 or 2 is required";
        }
        if (inputName === "apartment_size" && value === '') {
            error = "Apartment size is required";
        }
        if (inputName === "address" && value.trim() === "") {
            error = "Address is required";
        }
        if (inputName === "property" && value.trim() === "") {
            error = "Property is required";
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
            case "apartmentName":
                // setApartmentName(value);
                setApartment({ ...apartment, apartmentName: value })
                break;
            case "phone1":
                setApartment({ ...apartment, phoneNumber1: value });
                break;
            case "phone2":
                setApartment({ ...apartment, phoneNumber2: value });
                break;
            case "address":
                setApartment({ ...apartment, address: value });
                break;
            case "property":
                setApartment({ ...apartment, property: value });
                break;
            case "active":
                setApartment({ ...apartment, active: value });
                break;
            case "active2":
                setApartment({ ...apartment, active: value });
                break;
            case "apartment_size":
                setApartment({ ...apartment, size: value });
                break;
            case "description":
                setApartment({ ...apartment, description: value });
                break;
            default:
                break;
        }
    };

    const handleBlur = (inputName, value) => {
        validateInput(inputName, value);
    };
    const handDelete = () => {
        setApartment({ imgUrl: "" });
    };
    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            setApartment({ imgUrl: e.target.files[0] });
            setSubmitted(false)
        } else {
            setApartment({ ...apartment, imgUrl: e.target.files });

        } setSubmitted(false)

    };

    const handleSubmit = async () => {
        try {
                const formData = new FormData();
                formData.append("apartment_img", apartment.imgUrl);
                // Upload the image
                await axios.post("http://localhost:3001/uploadApartment", formData);
        

            const updatedApartment = {
                ...apartment,
                fees: [fee],
            };

            await ServiceWeb.updateApartmentByID(id, updatedApartment).then((response) => {
               
                setSubmitted(true);
                console.log("Succes")
            })
                .catch((error) => {
                    console.log(error +updatedApartment)
                });
                fetchData();
        } catch (error) {
            console.error("Error updating apartment:", error);
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
                                    className={`form-control ${validationErrors.apartmentName && 'is-invalid'}`}

                                    value={apartment.apartmentName}
                                    onChange={(e) => handleInputChange("apartmentName", e.target.value)}
                                    onBlur={(e) => handleBlur("apartmentName", e.target.value)}
                                />
                                {validationErrors.apartment_name && (
                                    <div className="invalid-feedback">{validationErrors.apartmentName}</div>
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
                                    value={apartment.phoneNumber1}
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
                                    value={apartment.phoneNumber2}
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
                                    value={apartment.address}
                                    onChange={(e) => handleInputChange("address", e.target.value)}
                                    onBlur={(e) => handleBlur("address", e.target.value)}
                                />{validationErrors.address && (
                                    <div className="invalid-feedback">{validationErrors.address}</div>
                                )}</div>
                        </div><br />
                        <div className="form-group mb-2 d-flex">
                            <span className="  fa-custom" ><i className="fa fa-usd" aria-hidden="true"></i></span>
                            <div style={{ width: "100%" }}>
                                <input
                                    type="text" minLength={1} required={true}
                                    placeholder="Enters property "
                                    name="lastName"
                                    className={`form-control ${validationErrors.property && 'is-invalid'}`}
                                    value={apartment.property}
                                    onChange={(e) => handleInputChange("property", e.target.value)}
                                    onBlur={(e) => handleBlur("property", e.target.value)}
                                />{validationErrors.property && (
                                    <div className="invalid-feedback">{validationErrors.property}</div>
                                )}</div>
                        </div><br />

                        <div className="form-group mb-2 d-flex">
                            <span className="  fa-custom" ><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></span>
                            <div className="ms-1 row" style={{ width: "100%" }}>
                                <input
                                    type="number" maxLength={30} minLength={1} min={0} required={true}
                                    placeholder="Enter number room"
                                    name="lastName"
                                    className={`form-control  w-75 ${validationErrors.apartment_size && 'is-invalid'}`}
                                    value={apartment.size}
                                    onChange={(e) => handleInputChange("apartment_size", e.target.value)}
                                    onBlur={(e) => handleBlur("apartment_size", e.target.value)}
                                /><span className="col-2 ms-3 input-group-text justify-content-center" ><i className="fa fa-home" aria-hidden="true"></i></span>
                                {validationErrors.apartment_size && (
                                    <div className="invalid-feedback">{validationErrors.apartment_size}</div>
                                )}</div>
                        </div><br />
                        <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" ><i className="fa fa-check-square" aria-hidden="true"></i></span>
                            <input className="ms-3"
                                type="radio"
                                id="active"
                                value={"0"}
                                checked={apartment.active === "0"}
                                onChange={(e) => handleInputChange("active", e.target.value)}
                            /><label className="ms-3" htmlFor="active">Active</label><br />
                            <input
                                type="radio" className="ms-3" id="complete"
                                value={"1"}
                                checked={apartment.active === "1"}
                                onChange={(e) => handleInputChange("active2", e.target.value)}
                            /><label className="ms-3" htmlFor="complete">Complete</label><br />
                        </div> <br />

                        <div className="form-group mb-2 d-flex">
                            <span className=" fa-custom" >  <i className="fa fa-info-circle" aria-hidden="true"></i></span>
                            <textarea
                                type="number" maxLength={255} minLength={1}
                                placeholder="Enter description"
                                name="lastName"
                                className="form-control "
                                value={apartment.description}
                                onChange={(e) => handleInputChange("description", e.target.value)}
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
                                value={fee.priceOfElectricity}
                                onChange={(e) => setFee({ ...fee, priceOfElectricity: e.target.value })}
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
                                value={fee.priceOfWater}
                                onChange={(e) => setFee({ ...fee, priceOfWater: e.target.value })}
                            /><span className="input-group-text  mx-3  fa-custom-1" >m<sup>3</sup></span>
                        </div> <br />
                        <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" > <i className="fa fa-tint" aria-hidden="true"></i></span>
                            <input
                                type="number" minLength={1} required={true}
                                placeholder="Enter Water number"
                                name="lastName"
                                className="form-control"
                                value={fee.waterBill}
                                onChange={(e) => setFee({ ...fee, waterBill: e.target.value })}
                            /><span className="input-group-text  mx-3  fa-custom-1" >VND/1m<sup>3</sup></span>
                        </div> <br />
                        <div className="form-group mb-2 d-flex">
                            <span className="fa-custom" > <i style={{ fontSize: "16px" }} className="fa fa-wifi" aria-hidden="true"></i></span>
                            <input
                                type="number" maxLength={30} minLength={1} required={true}
                                placeholder="Enter internet"
                                name="lastName"
                                className="form-control"
                                value={fee.priceOfInternet}
                                onChange={(e) => setFee({ ...fee, priceOfInternet: e.target.value })}
                            /><span className=" input-group-text mx-3 fa-custom-1" >VND/M</span>
                        </div> <br />

                        <div className="form-group mb-2 d-flex" >
                            <span className="fa-custom"><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                            <input
                                type="number" maxLength={30} minLength={1} required={true}
                                placeholder="Enter trash"
                                name="lastName" style={{ width: "88%" }}
                                className="form-control "
                                value={fee.priceOfTrash}
                                onChange={(e) => setFee({ ...fee, priceOfTrash: e.target.value })}
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

                                <div className="d-flex">
                                    <div style={{ width: 190 }}><img style={{ width: "200px" }} src={apartment.imgUrl ? `http://localhost:3001/images/${apartment.imgUrl}` : null} /> </div>

                                    <div style={{ width: 20 }}>
                                        <sup >
                                            <i className="btn fa fa-times-circle" onClick={handDelete} aria-hidden="true"></i>
                                        </sup>
                                    </div>

                                </div>

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
