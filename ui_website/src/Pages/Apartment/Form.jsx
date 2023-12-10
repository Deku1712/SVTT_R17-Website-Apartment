/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🐯 Purpose: RENDERS FORM CONTEXT AND INPUTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/


import { FormProvider, useForm } from 'react-hook-form'
import {

  desc_validation,
  phone_validation_1,
  phone_validation_2,
  apartment_name_validation,
  address_validation,
  size_validation,
  area_validation,
  fileImg_validation,
  property,
  imgUrl,
  price_of_electricity_validation,
  price_of_internet_validation,
  price_of_trash_validation,
  water_bill_validation,
  price_of_water_validation,
  roomName_validation,
  descriptionRoom_validation,
  priceRoom_validation,
  typeRoom_validation,
  sizeRoom_validation,
  amount_validation,
} from '../../utils/inputValidations'
import React, { useState } from 'react'
import { GrFormAdd, GrFormUpload, GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { Input } from '../../Component/Input/Input'
import { Button } from '@mui/material'

import { generateUploadURL, s3Config } from '../../Config/s3'
import { env } from '../../Config/aws'
import { uploadFileToS3 } from '../../utils/s3Utils'
import Service from '../../Service/Service'
import { useDispatch, useSelector } from 'react-redux'
import { addApartment, createRoom } from '../../redux/action/actionUser'
import { useNavigate } from 'react-router-dom'




const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: env.accessKeyId,
  secretAccessKey: env.secretAccessKey,
  region: env.region
});
export const Form = (props) => {

  const user_store = useSelector(state => state.userReducer);
  const id = user_store.info.id;

  const typeadd = props.typeadd
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState([]);
  const [change, setChange] = useState(false);
  const [files, setFiles] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const s3 = new AWS.S3();


  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFile(files);
  };




  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      let apartment_input = { ...data, imgUrl: data.imgUrl[0] };

      const uploadResult = await uploadFileToS3(apartment_input.imgUrl, s3Config);
      apartment_input = { ...apartment_input, imgUrl: uploadResult.Location };

      console.log(apartment_input);

      dispatch(addApartment(id,apartment_input))

      methods.reset();
      setSuccess(true);

    } catch (err) {
      console.error('Error:', err);
      setSuccess(false);
    }
  });

  const onSubmitRoom = methods.handleSubmit(async (data) => {
    try {
      console.log(files)
      let fileUrls = [];

      // if (Array.isArray(files) && files.length > 0) {
      //   const uploadPromises = Array.from(files).map(async file => {
      //     const uploadResult = await uploadFileToS3(file, s3Config);
      //     console.log(uploadResult.Location)
      //     return uploadResult.Location;
      //   });

      //   // Wait for all promises to resolve
      //   fileUrls = await Promise.all(uploadPromises);
      // }

      if (files.length > 0) {
        const filesUrl = Array.from(files).map(async (file) => {
          const uploadResult = await uploadFileToS3(file, s3Config)
          return uploadResult.Location
        })
        data = { ...data, file_url: await Promise.all(filesUrl) };
      }
      data = { ...data, apartmentID: props.apartment.id }

      // Add file URLs to the form data
      dispatch(createRoom(data));


      console.log("Form Data:", data);

      // Dispatch action or perform further actions with the data


      setSuccess(true);

      navigate(`/viewApartment/${props.apartment.id}`)
      
    } catch (error) {
      console.error('Error:', error);
      setSuccess(false);
    }
  });


  return (
    <FormProvider {...methods}>
      {typeadd === 'addroom' ?
        // room//
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="container"
        >
          <div className="grid gap-5 md:grid-cols-2">

            <Input {...roomName_validation} />
            <Input {...priceRoom_validation} />
            <Input {...typeRoom_validation} />
            <Input {...sizeRoom_validation} />
            <Input {...amount_validation} />
            <input className='p-3 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60' type='file' multiple accept="image/*" onChange={(e) => setFiles(e.target.files)} />
            <Input {...desc_validation} className="md:col-span-2" />




          </div>
          <div className="mt-5">
            {success && (
              <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
                <BsFillCheckSquareFill /> Form has been submitted successfully
              </p>
            )}
            <button
              onClick={onSubmitRoom}
              className="p-3 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
            >
              <GrFormAdd />
              Create Room
            </button>
          </div>
        </form>
        :
        // apartment//
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="container"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Input {...apartment_name_validation} />
            <Input {...address_validation} />
            <Input {...phone_validation_1} />
            <Input {...phone_validation_2} />
            <Input {...size_validation} />
            <Input {...area_validation} />
            <Input {...property} />
            <Input {...fileImg_validation} />
            <Input {...desc_validation} className="md:col-span-2" />

            <button className="md:col-span-2 bg-green-500 text-white p-2 rounded-xl hover:bg-green-800 transform ease ease-in-out duration-150 " onClick={() => setChange(!change)}>Fees </button>

            {change && <>
              <h3 className=' md:col-span-2'>Fees</h3>
              <Input {...price_of_electricity_validation} />
              <Input {...price_of_internet_validation} />
              <Input {...price_of_trash_validation} />
              <Input {...price_of_water_validation} />
              <Input {...water_bill_validation} />
            </>}

          </div>
          <div className="mt-5">
            {success && (
              <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
                <BsFillCheckSquareFill /> Form has been submitted successfully
              </p>
            )}
            <button
              onClick={onSubmit}
              className="p-3 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
            >
              <GrFormAdd />
              Add Appartment
            </button>
          </div>
        </form>
      }
    </FormProvider>
  )
}
