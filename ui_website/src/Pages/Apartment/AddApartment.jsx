
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Form } from './Form'


export default function AddApartment() {
  
  const [apartment , setApartment] = useState(
    {
      name : '',
      phoneNumber1: '',
      phoneNumber2: '',
      description: '',
      img: '',
      address: '',
      size: '',
      property: '',
    }
  )

  const handleSave = () => {
    console.log(apartment)
  }
  

  return (
    <div className=' space-y-2 border rounded-lg mt-3 shadow-lg p-3'>
      <h3 className=' text-center font-bold mb-3 '>Add Appartment</h3>
      <Form/>
    </div>

  )
}
