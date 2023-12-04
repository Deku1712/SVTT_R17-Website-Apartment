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
} from '../../utils/inputValidations'
import { useState } from 'react'
import { GrFormAdd, GrFormUpload, GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { Input } from '../../Component/Input/Input'
import { Button } from '@mui/material'

import { generateUploadURL, s3Config } from '../../Config/s3'
import { env } from '../../Config/aws'
import { uploadFileToS3 } from '../../utils/s3Utils'
import Service from '../../Service/Service'
import { useDispatch } from 'react-redux'
import { addApartment } from '../../redux/action/actionUser'




const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: env.accessKeyId,
  secretAccessKey: env.secretAccessKey,
  region: env.region
});
export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const [change, setChange] = useState(false);

  const dispatch = useDispatch();


  const s3 = new AWS.S3();


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0])
  };




  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      let apartment_input = { ...data, imgUrl: data.imgUrl[0] };

      const uploadResult = await uploadFileToS3(apartment_input.imgUrl, s3Config);
      apartment_input = { ...apartment_input, imgUrl: uploadResult.Location };

      console.log(apartment_input);

      dispatch(addApartment(apartment_input))

      methods.reset();
      setSuccess(true);

    } catch (err) {
      console.error('Error:', err);
      setSuccess(false);
    }
  });


  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  )
}
