import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import RoomService from "../Service/RoomService"
import { updateRooms } from "../redux/rooms/roomsAction"
import '../styles/styles.css';

const UpdateRoom = () => {
    const [room_img, setRoomImg] = useState([]);
    const [validationErrors, setValidationErrors] = useState({});
    const [img, setImg] = useState([]);
    const { id } = useParams();
    const [room, setRoom] = useState({})
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        RoomService.getRoomByID(id).then((response) => {
            console.log(response.data)
            setRoom(response.data)
            setRoomImg(response.data.imgs)

            console.log(response.data)
        })
            .catch((error) => {
                console.log(error)
            });

    };
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
        setErrors("")
        switch (inputName) {
            case "room_name":
                setRoom({ ...room, room_name: value });
                break;
            case "size_renter":
                setRoom({ ...room, numberOfRenter: value });
                break;
            case "room_size":
                setRoom({ ...room, sizeOfRoom: value });
                break;
            case "room_fee":
                setRoom({ ...room, priceOfRoom: value });
                break;
            case "description":
                setRoom({ ...room, description: value });
                break;
            default:
                break;
        }
    };

    const handleBlur = (inputName, value) => {
        validateInput(inputName, value);
    };

    const handDelete = async (imgName) => {
        try {
            const updatedRoomImg = room_img.filter((img) => img.url_img !== imgName);
            const updatedRoom = {
                ...room,
                imgs: updatedRoomImg,
            };
            dispatch(updateRooms(id, updatedRoom));
            fetchData();
            console.log(updatedRoomImg);
            document.getElementById('images').value = null;
            setRoomImg(updatedRoomImg);
        } catch (error) {
            console.error("Lỗi khi xóa ảnh:", error);
        }
    };
    const handleImageChange = async (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData();
            const newImages = [];
            newImages.push(...room_img);
            for (let i = 0; i < e.target.files.length; i++) {
                formData.append("room_imgs", e.target.files[i]);
                newImages.push({ url_img: e.target.files[i].name });
            }
            await axios.post("http://localhost:3001/uploadRoomImages", formData).then((response) => {
                setRoomImg(newImages);
                setImg(newImages)
                document.getElementById('images').value = null;
                console.log("Succes")

            })
                .catch((error) => {
                    console.log(error + formData)
                });;

        } else {
            // If there are no new images, update room_img with the array of existing images
            setRoomImg([{ ...room_img }]);
            setImg([{ ...room_img }])
        }


    };


    const handleSubmit = async () => {
        const requiredFields = ['room_name', 'numberOfRenter', 'sizeOfRoom', 'priceOfRoom'];
        let hasError = false;

        requiredFields.forEach((field) => {
            if (field === 'numberOfRenter' || field === 'sizeOfRoom') {
                if (room[field] === undefined || room[field] === null) {
                    setErrors("Please don't leave it null")
                    hasError = true;
                }
            } else {
                if (!room[field] || room[field] === '') {
                    setErrors("Please don't leave it null")
                    hasError = true;
                }
            }
        });

        if (hasError) {
            return;
        }
        try {

            if (img.length > 0) {
                const updatedRoom = {
                    ...room,
                    imgs: img,
                };
                dispatch(updateRooms(id, updatedRoom));

                fetchData();
            } else {
                const updatedRoom = {
                    ...room,
                    imgs: room_img,
                };
                dispatch(updateRooms(id, updatedRoom));

                fetchData();
            }


        } catch (error) {
            console.error("Error updating room: ", error);
        }
    };

    return (
        <div className="container mt-5 mb-3">
            <h2 className="text-center mt-3 "> UPDATE ROOM </h2>
            <h3 className="text-danger text-center">{errors}</h3>
            <div className=" d-flex justify-content-center mt-3 form-custome">
                <div className="card  form-custom " style={{width:"50%"}}>
                    <div className="card-body " >
                        <form>
                            <div className="form-group mb-2 d-flex ">
                                <span className=" fa-custom" > <i className="fa fa-home" aria-hidden="true"></i></span>
                                <div style={{ width: "100%" }}>
                                    <input
                                        type="text" maxLength={30} minLength={1} required={true}
                                        placeholder="Enter room name "
                                        className={`form-control w-75 ${validationErrors.room_name && 'is-invalid'}`}
                                        value={room.room_name}
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
                                        value={room.numberOfRenter}
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
                                        value={room.sizeOfRoom}
                                        onChange={(e) => handleInputChange("room_size", e.target.value)}
                                        onBlur={(e) => handleBlur("room_size", e.target.value)}
                                    />
                                    {validationErrors.room_size && (
                                        <div className="invalid-feedback">{validationErrors.room_size}</div>
                                    )}
                                </div>
                            </div> <br />

                            <div className="form-group mb-2 active-custome col-md-12">
                            <span className="fa-custom" ><i className="fa fa-check-square" aria-hidden="true"></i></span>
                                <div className="col-md-3 d-flex">
                                    <input className=" "
                                        type="radio"
                                        id="active"
                                        value={0}
                                        checked={room.active === 0 ? true : false}
                                        onChange={(e) => setRoom({ ...room, active: Number(e.target.value) })}
                                    /><label className="ms-3" htmlFor="active">Active</label><br />
                                </div>
                                <div className=" col-md-4 d-flex " >
                                    <input
                                        type="radio" className="" id="complete"
                                        value={1}
                                        checked={room.active === 1 ? true : false}
                                        onChange={(e) => setRoom({ ...room, active: Number(e.target.value) })}
                                    /><label className="ms-3" htmlFor="complete">Complete</label><br />
                                </div>


                            </div> <br />

                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom" ><i className="fa fa-money" aria-hidden="true"></i></span>
                                <div className="ms-1 row" style={{ width: "100%" }}>
                                    <input
                                        type="number" maxLength={30} minLength={1} required={true}
                                        placeholder="Enter price room"
                                        className={` col-2 form-control w-75 ${validationErrors.room_fee && 'is-invalid'}`}
                                        value={room.priceOfRoom}
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
                                    value={room.description}
                                    onChange={(e) => handleInputChange("description", e.target.value)}
                                />
                            </div><br />
                            <div className="form-group mb-2 d-flex">
                                <span className=" fa-custom" ><i className="fa fa-filter" aria-hidden="true"></i></span>
                                <br />
                                <select className="text-center form-control form-select w-50" value={room.type}
                                    onChange={(e) => setRoom({ ...room, type: e.target.value })}>
                                    <option value="" disabled >Choose type room</option>
                                    <option value="t" >Vip</option>
                                    <option value="n" >Normal</option>
                                </select>
                            </div>
                            <br />

                            <div className="form-group mb-2  d-flex">
                                <label htmlFor="images" className="drop-container" id="dropcontainer" style={{ width: "95%" }}>
                                    <span className="drop-title">Drop files here</span>
                                    or
                                    <input type="file" multiple id="images" accept="image/*" onChange={handleImageChange} required />
                                </label>
                                <br />

                            </div><br />
                            <div className="d-flex flex-wrap">
                                {room_img.map((file, i) => (

                                    <div key={i} className="ms-3 d-flex mb-3" style={{ width: 200 }}>
                                        <div style={{ width: 100 }}>
                                            <img style={{ width: "100px" }} src={file.url_img !== '' ? `http://localhost:3001/images/${file.url_img}` : null} />
                                        </div>

                                        <div style={{ width: 200 }}>
                                            <sup>
                                                <i className="fa fa-times-circle" onClick={() => handDelete(file.url_img)} aria-hidden="true"></i>
                                            </sup>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </form>

                    </div>
                    <div className='d-flex col-ms-6 justify-content-end mt-3 mb-3  justify-content-center'>
                        <div className='col-3 '>
                            <button className="btn btn-success" onClick={handleSubmit} >Finish </button>
                        </div>
                        <div className='col-3'>
                            <Link to="/" className="btn btn-danger">Cancel</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UpdateRoom;
