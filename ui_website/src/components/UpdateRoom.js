import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../styles/styles.css';

const UpdateRoom = () => {
    const [room_id, setRoomId] = useState('');
    const [room_name, setRoomName] = useState('');
    const [size_renter, setSizeRenter] = useState('');
    const [room_size, setRoomSize] = useState('');
    const [description, setDescription] = useState('');
    const [room_fee, setRoomFee] = useState('');
    const [room_type, setRoomType] = useState('');
    const [room_img, setRoomImg] = useState([]);
    const [active, setActive] = useState("");
    const [validationErrors, setValidationErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [newFileNames, setNewFileNames] = useState([]);
    const [fileData, setFileData] = useState([]);
    const { id } = useParams();
    const files = room_img ? [...room_img] : [];

    const validateInput = (inputName, value) => {
        let error = "";

        if (inputName === "room_name" && value.trim() === "") {
            error = "Room name is required";
        }
        if (inputName === "size_renter" && value === '') {
            error = "Number renter is required";
        }
        if (inputName === "room_size" && value === '') {
            error = "Room size is required";
        }
        if (inputName === "room_fee" && value === '') {
            error = "Price is required";
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
            case "room_name":
                setRoomName(value);
                break;
            case "size_renter":
                setSizeRenter(value);
                break;
            case "room_size":
                setRoomSize(value);
                break;
            case "room_fee":
                setRoomFee(value);
                break;
            default:
                break;
        }
    };

    const handleBlur = (inputName, value) => {
        validateInput(inputName, value);
    };

    const handDelete = (index, e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setRoomImg(updatedFiles);
    };
    const handleImageChange = (e) => {
        const newFiles = [...files, ...e.target.files];
        const validImageFiles = Array.from(e.target.files).filter((file) =>
            file.type.startsWith("image/")
        );

        setRoomImg(newFiles);
        setFileData((prevData) => [
            ...prevData,
            ...validImageFiles.map((file) => ({
                file,
                newName: null,
            })),
        ]);
        setSubmitted(false);
    };
    const handleSubmit = async () => {
        try {
            if (room_img.length === 0) {
                console.error("No images selected.");
                return;
            }

            const formData = new FormData();
            room_img.forEach((room_imgs, index) => {
                formData.append("room_imgs", room_imgs);
            });

            const response = await axios.post("http://localhost:3001/uploadRoomImages", formData);

            const newNames = response.data.paths.map((path, index) => ({
                index,
                newName: path.newName,
            }));

            // Update the newName property for each file in the fileData array
            setFileData((prevData) =>
                prevData.map((data, i) => {
                    const match = newNames.find((name) => name.index === i);
                    return match ? { ...data, newName: match.newName } : data;
                })
            );
            setSubmitted(true);
            console.log("Room images uploaded!", response.data);
        } catch (error) {
            console.error("Error uploading room images: ", error);
        }
    };

    return (
        <div className="container mt-5 mb-3">
            <h2 className="text-center mt-3 "> UPDATE ROOM {id}</h2>
            <div className=" d-flex justify-content-center mt-3">
                <div className="card col-md-5 form-custom " >
                    <div className="card-body ">
                        <form>
                            <div className="form-group mb-2 d-flex ">
                                <span className=" fa-custom" > <i className="fa fa-home" aria-hidden="true"></i></span>
                                <div style={{ width: "100%" }}>
                                    <input
                                        type="text" maxLength={30} minLength={1} required={true}
                                        placeholder="Enter room name "
                                        className={`form-control w-75 ${validationErrors.room_name && 'is-invalid'}`}
                                        value={room_name}
                                        onChange={(e) => handleInputChange("room_name", e.target.value)}
                                        onBlur={(e) => handleBlur("room_name", e.target.value)}
                                    />
                                    {validationErrors.room_name && (
                                        <div className="invalid-feedback">{validationErrors.room_name}</div>
                                    )}
                                </div>

                            </div> <br />
                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom"> <i className="fa fa-users" aria-hidden="true"></i></span>
                                <div style={{ width: "100%" }}>
                                    <input
                                        type="number" required={true}
                                        placeholder="Number of people"
                                        className={`form-control w-75 ${validationErrors.size_renter && 'is-invalid'}`}
                                        value={size_renter}
                                        onChange={(e) => handleInputChange("size_renter", e.target.value)}
                                        onBlur={(e) => handleBlur("size_renter", e.target.value)}
                                    />
                                    {validationErrors.size_renter && (
                                        <div className="invalid-feedback">{validationErrors.size_renter}</div>
                                    )}
                                </div>
                            </div> <br />

                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom" ><i className="fa fa-street-view" aria-hidden="true"></i></span>
                                <div style={{ width: "100%" }}>
                                    <input
                                        type="number" maxLength={30} minLength={1} required={true}
                                        placeholder="Enter acreage"
                                        className={`form-control w-75 ${validationErrors.room_size && 'is-invalid'}`}
                                        value={room_size}
                                        onChange={(e) => handleInputChange("room_size", e.target.value)}
                                        onBlur={(e) => handleBlur("room_size", e.target.value)}
                                    />
                                    {validationErrors.room_size && (
                                        <div className="invalid-feedback">{validationErrors.room_size}</div>
                                    )}
                                </div>
                            </div> <br />

                            <div className="form-group mb-2 d-flex">
                                <span className="fa-custom" ><i className="fa fa-check-square" aria-hidden="true"></i></span>
                                <input className="ms-3"
                                    type="radio"
                                    id="active"
                                    value="false"
                                    checked={active === "false"}
                                    onChange={(e) => setActive(e.target.value)}
                                /><label className="ms-3" htmlFor="active">Active</label><br />
                                <input
                                    type="radio" className="ms-3" id="complete"
                                    value="true"
                                    checked={active === "true"}
                                    onChange={(e) => setActive(e.target.value)}
                                /><label className="ms-3" htmlFor="complete">Complete</label><br />
                            </div> <br />

                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom" ><i className="fa fa-money" aria-hidden="true"></i></span>
                                <div className="ms-1 row" style={{ width: "100%" }}>
                                    <input
                                        type="number" maxLength={30} minLength={1} required={true}
                                        placeholder="Enter price room"
                                        className={` col-2 form-control w-75 ${validationErrors.room_fee && 'is-invalid'}`}
                                        value={room_fee}
                                        onChange={(e) => handleInputChange("room_fee", e.target.value)}
                                        onBlur={(e) => handleBlur("room_fee", e.target.value)}
                                    /><span className="col-2 input-group-text fa-custom-1" >VND</span>
                                    {validationErrors.room_fee && (
                                        <div className="invalid-feedback">{validationErrors.room_fee}</div>
                                    )}
                                </div>

                            </div> <br />
                            <div className="form-group mb-2  d-flex">
                                <span className=" fa-custom" ><i className="fa fa-info" aria-hidden="true"></i></span>
                                <textarea
                                    type="number" maxLength={255} minLength={1} required={true}
                                    placeholder="Enter description..."
                                    className="form-control w-75"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div><br />
                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom" ><i className="fa fa-filter" aria-hidden="true"></i></span>
                                <br />
                                <select className="text-center form-control form-select w-50" value={room_type}
                                    onChange={(e) => setRoomType(e.target.value)}>
                                    <option value="" disabled >Choose type room</option>
                                    <option value="E" >Vip</option>
                                    <option value="N" >Normal</option>
                                </select>
                            </div>
                            <br />

                            <div className="form-group mb-2  d-flex">
                                <label htmlFor="images" className="drop-container" id="dropcontainer" style={{ width: "95%" }}>
                                    <span className="drop-title">Drop files here</span>
                                    or
                                    <input className="mb-3 w-25" type="file" multiple id="images" accept="image/*" onChange={handleImageChange} required />
                                </label>
                                <br />

                            </div><br />
                            <div className="d-flex flex-wrap">
                                {fileData.map(({ file, newName }, i) => (
                                    <div key={i} className="ms-3 d-flex mb-3" style={{ width: 200 }}>
                                        {file && (
                                            <div style={{ width: 100 }}>
                                                <img
                                                    style={{ width: "100px" }}
                                                    src={submitted ? `http://localhost:3001/images/${newName}` : URL.createObjectURL(file)}
                                                    alt={`Selected Image ${i + 1}`}
                                                />

                                            </div>
                                        )}
                                        <div style={{ width: 20 }}>
                                            <sup>
                                                <i className="fa fa-times-circle" onClick={(e) => handDelete(i, e)} aria-hidden="true"></i>
                                            </sup>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </form>

                    </div>
                    <div className='d-flex justify-content-end mt-3 mb-3  justify-content-center'>
                        <div className='col-2 '>
                            <button className="btn btn-success" onClick={handleSubmit} >Finish </button>
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
