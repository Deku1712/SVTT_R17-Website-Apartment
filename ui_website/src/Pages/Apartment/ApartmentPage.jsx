import React from 'react'

import HomePage from '../HomePage/HomePage';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
export default function ApartmentPage() {

    const user_store = useSelector((state) => state.userReducer);
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
      if (user_store.apartments){
        setApartments(user_store.apartments)
      }
    },[user_store])


    return (
        <div>
          {apartments && apartments.map(apartment => (<p key={apartment.id}>{apartment.apartmentName}</p>))}
        </div>
      )
    };
    
    // Component thêm căn hộ
