
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

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
    <div className=' space-y-2 pt-20'>
      <h3>Add Apartment</h3>
      <div className=' flex justify-center'>
        <div className='body_left'>

          <div className="col-span-full">
            <label htmlFor="apartmentName" className="block text-sm font-medium leading-6 text-gray-900 text-start">
              Apartment Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm ">
                  {!apartment.name && <i class="fa-solid fa-house mr-2" ></i>}
                </span>
              </div>
              <input
                type="text"
                name="apartmentName"
                id="apartmentName"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setApartment({...apartment, name : e.target.value})}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="phone1" className="block text-sm font-medium leading-6 text-gray-900 text-start">
              Phone Number 1
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm ">
                  {!apartment.phoneNumber1 && <i class="fa-solid fa-phone"></i>}
                </span>
              </div>
              <input
                type="text"
                name="phone1"
                id="phone1"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setApartment({...apartment, phoneNumber1 : e.target.value})}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="phone2" className="block text-sm font-medium leading-6 text-gray-900 text-start">
              Phone Number 2
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm ">
                 {!apartment.phoneNumber2 &&  <i class="fa-solid fa-phone"></i>}
                </span>
              </div>
              <input
                type="text"
                name="phone2"
                id="phone2"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setApartment({...apartment, phoneNumber2 : e.target.value})}
              />
            </div>
          </div>


          <div className="col-span-full">
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900 text-start">
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                onChange={(e) => setApartment({...apartment, description : e.target.value})}

              />
            </div>

          </div>

          <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 text-start">
              Img url
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only"
                    onChange={(e) => setApartment({...apartment, img : e.target.value})} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

        </div>
        <div className='body_right ml-3'>

          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900 text-start">
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setApartment({...apartment, address : e.target.value})}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900 text-start">
              Size
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="size"
                id="size"
                autoComplete="size"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setApartment({...apartment, size : e.target.value})}
              />
            </div>
          </div>
          
          <div className="col-span-full border p-2 my-2 rounded">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900 text-start">Property</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="fullCondition"
                      name="fullCondition"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      onChange={(e) => setApartment({...apartment, property : e.target.value})}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="fullCondition" className="font-medium text-gray-900 text-start">
                      Full Conditions
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                {/* // tạo property array. */}

              </div>
            </fieldset>
          </div>

        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>

  )
}
