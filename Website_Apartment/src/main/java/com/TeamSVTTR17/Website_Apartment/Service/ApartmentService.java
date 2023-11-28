package com.TeamSVTTR17.Website_Apartment.Service;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import com.TeamSVTTR17.Website_Apartment.Repository.ApartmentRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.FeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ApartmentService {
    @Autowired
    private ApartmentRepository apartmentRepository;
    @Autowired
    private FeeRepository feeRepository;
    public Apartment create(Apartment apartment){
        return apartmentRepository.save(apartment);
    }
    public Apartment findApartmentById(int id) {
        return apartmentRepository.findById(id).get();
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

            Fee newFee = new Fee();
            newFee.setPriceOfElectricity(apartment.getFees().get(0).getPriceOfElectricity());
            newFee.setPriceOfWater(apartment.getFees().get(0).getPriceOfWater());
            newFee.setPriceOfInternet(apartment.getFees().get(0).getPriceOfInternet());
            newFee.setPriceOfTrash(apartment.getFees().get(0).getPriceOfTrash());
            newFee.setWaterBill(apartment.getFees().get(0).getWaterBill());
            newFee.setApartment(updateApartment);
            feeRepository.save(newFee);
            apartmentRepository.save(updateApartment);
            return updateApartment;
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }
}
