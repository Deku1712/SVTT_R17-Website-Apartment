package com.TeamSVTTR17.Website_Apartment.Service;


import com.TeamSVTTR17.Website_Apartment.DTO.ApartmentInput;
import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.User;
import com.TeamSVTTR17.Website_Apartment.Repository.AparmentRepo;
import com.TeamSVTTR17.Website_Apartment.Repository.FeeRepo;
import com.TeamSVTTR17.Website_Apartment.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class ApartmentService {

    @Autowired
    private AparmentRepo aparmentRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private FeeRepo feeRepo;


    public void addApartment(ApartmentInput apartmentInput){

        User user = userRepo.findById(3).get();
        Apartment apartment = new Apartment();
        apartment.setUser(user);
        Date updateTime = new Date(System.currentTimeMillis());
        apartment.setApartmentName(apartmentInput.getApartment_name());
        apartment.setAddress(apartmentInput.getAddress());
        apartment.setImgUrl(apartmentInput.getImgUrl());
        apartment.setProperty(apartmentInput.getProperty());
        apartment.setPhoneNumber1(apartmentInput.getPhone_number1());
        apartment.setPhoneNumber2(apartmentInput.getPhone_number2());
        apartment.setSize(Integer.parseInt(apartmentInput.getSize()));
        apartment.setArea(apartmentInput.getArea() + "m2");
        apartment.setDescription(apartmentInput.getDescription());
        apartment.setCreateTime(updateTime);
        apartment.setUpdateTime(updateTime);

        aparmentRepo.save(apartment);

    }


    public List<Apartment> getApartmentByUserID(int id) {
        User user = userRepo.findById(id).get();
        List<Apartment> apartmentsByUser = aparmentRepo.findApartmentsByUser(user);
        return apartmentsByUser;


    }

    public List<Apartment> getAll() {
        return aparmentRepo.findAll();
    }
}
