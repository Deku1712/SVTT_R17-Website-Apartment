package com.TeamSVTTR17.Website_Apartment.Service;


import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import com.TeamSVTTR17.Website_Apartment.Repository.ApartmentRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.FeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TeamSVTTR17.Website_Apartment.DTO.ApartmentInput;
import com.TeamSVTTR17.Website_Apartment.Entity.User;
import com.TeamSVTTR17.Website_Apartment.Repository.AparmentRepo;
import com.TeamSVTTR17.Website_Apartment.Repository.FeeRepo;
import com.TeamSVTTR17.Website_Apartment.Repository.UserRepo;

import java.sql.Date;
import java.util.List;

import java.util.*;

@Service
public class ApartmentService {
    @Autowired
    private ApartmentRepository apartmentRepository;
    @Autowired
    private FeeRepository feeRepository;
    
     @Autowired
    private AparmentRepo aparmentRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private FeeRepo feeRepo;
    
    @Transactional
    public Apartment createApartment(Apartment apartment) {
        try {
            Date updateTime = new Date(System.currentTimeMillis());
            apartment.setCreateTime(updateTime);
            apartment.setUpdateTime(updateTime);
            apartmentRepository.save(apartment);
            List<Fee> fees = apartment.getFees();

            Set<Fee> uniqueFees = new HashSet<>(fees);
            for (Fee fee : uniqueFees) {
                fee.setApartment(apartment);
                feeRepository.save(fee);
            }
            return apartment;
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }
    public Apartment findApartmentById(int id) {
        return apartmentRepository.findById(id).get();
    }
    public void deleteApartmentById(int id) {
         apartmentRepository.deleteById(id);
    }
    public List<Apartment> getAllApartment(){
        return apartmentRepository.findAll();
    }
    @Transactional
    public Apartment updateApartment(int id, Apartment apartment) {
       
        try {
            Apartment updateApartment = findApartmentById(id);
            Date updateTime = new Date(System.currentTimeMillis());
            updateApartment.setUser(apartment.getUser());
            updateApartment.setApartmentName(apartment.getApartmentName());
            updateApartment.setUpdateTime(updateTime);
            updateApartment.setPhoneNumber1(apartment.getPhoneNumber1());
            updateApartment.setPhoneNumber2(apartment.getPhoneNumber2());
            updateApartment.setAddress(apartment.getAddress());
            updateApartment.setImgUrl(apartment.getImgUrl());
            updateApartment.setDescription(apartment.getDescription());
            updateApartment.setProperty(apartment.getProperty());
            updateApartment.setSize(apartment.getSize());
            updateApartment.setActive(apartment.getActive());
            updateApartment.setArea(apartment.getArea());
            apartmentRepository.save(updateApartment);
            List<Fee> fees = apartment.getFees();
            Fee newFee = new Fee();
            Set<Fee> uniqueFees = new HashSet<>(fees);
            for (Fee fee : uniqueFees) {
                fee.setApartment(apartment);
                feeRepository.save(fee);
            }

            return apartmentRepository.save(updateApartment);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }
       public void addApartment(ApartmentInput apartmentInput){

        User user = userRepo.findById(2).get();
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
        if(apartmentInput.getPrice_of_electricity() != null || apartmentInput.getPrice_of_water()!= null || apartmentInput.getPrice_of_trash() != null || apartmentInput.getWater_bill() != null ){
            Fee fee = new Fee();
            fee.setPriceOfElectricity(Float.parseFloat(apartmentInput.getPrice_of_electricity()));
            fee.setPriceOfInternet(Float.parseFloat(apartmentInput.getPrice_of_internet()));
            fee.setPriceOfWater(Float.parseFloat(apartmentInput.getPrice_of_water()));
            fee.setPriceOfTrash(Float.parseFloat(apartmentInput.getPrice_of_trash()));
            fee.setWaterBill(Float.parseFloat(apartmentInput.getWater_bill()));
            fee.setApartment(apartment);
            feeRepo.save(fee);

        }








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
