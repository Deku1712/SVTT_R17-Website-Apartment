package com.TeamSVTTR17.Website_Apartment.Service;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import com.TeamSVTTR17.Website_Apartment.Repository.ApartmentRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.FeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ApartmentService {
    @Autowired
    private ApartmentRepository apartmentRepository;
    @Autowired
    private FeeRepository feeRepository;
    @Transactional
    public Apartment createApartment(Apartment apartment) {
        try {
            apartment.setCreateTime(new java.sql.Date(new Date().getTime()));
            apartment.setUpdateTime(new java.sql.Date(new Date().getTime()));
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

    public List<Apartment> getAllApartment(){
        return apartmentRepository.findAll();
    }
    @Transactional
    public Apartment updateApartment(int id, Apartment apartment) {
        try {
            Apartment updateApartment = findApartmentById(id);


            updateApartment.setApartmentName(apartment.getApartmentName());
            updateApartment.setUpdateTime(new java.sql.Date(new Date().getTime()));
            updateApartment.setPhoneNumber1(apartment.getPhoneNumber1());
            updateApartment.setPhoneNumber2(apartment.getPhoneNumber2());
            updateApartment.setAddress(apartment.getAddress());
            updateApartment.setImgUrl(apartment.getImgUrl());
            updateApartment.setDescription(apartment.getDescription());
            updateApartment.setProperty(apartment.getProperty());
            updateApartment.setActive(apartment.getActive());
//            apartmentRepository.save(updateApartment);
//            List<Fee> fees = apartment.getFees();
//            Fee newFee = new Fee();
//            Set<Fee> uniqueFees = new HashSet<>(fees);
//            for (Fee fee : uniqueFees) {
//                fee.setApartment(apartment);
//                feeRepository.save(fee);
//            }
            Fee newFee = new Fee();
            newFee.setPriceOfElectricity(apartment.getFees().get(0).getPriceOfElectricity());
            newFee.setPriceOfWater(apartment.getFees().get(0).getPriceOfWater());
            newFee.setPriceOfInternet(apartment.getFees().get(0).getPriceOfInternet());
            newFee.setPriceOfTrash(apartment.getFees().get(0).getPriceOfTrash());
            newFee.setWaterBill(apartment.getFees().get(0).getWaterBill());
            newFee.setApartment(updateApartment);
            feeRepository.save(newFee);
            return apartmentRepository.save(updateApartment);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }
}
