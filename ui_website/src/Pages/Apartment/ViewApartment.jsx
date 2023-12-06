import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import CardApart from './CardApartment/CardApart';
export default function ViewApartment() {

  
    const user_store = useSelector((state) => state.userReducer);
    const [apartments, setApartments] = useState([]);

  useEffect(() => {
    if (user_store.apartments) {
      setApartments(user_store.apartments)
    }
  }, [user_store])
  return (
    <div className=" w-10/12  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {apartments && apartments.map(apartment => (

          <CardApart apartment={apartment} />
        ))}
      </div>
  )
}
