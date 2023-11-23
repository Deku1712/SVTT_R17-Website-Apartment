package com.TeamSVTTR17.Website_Apartment.Controller;
import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import com.TeamSVTTR17.Website_Apartment.Repository.ApartmentRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.FeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class Controller {
    @Autowired
    private ApartmentRepository apartmentRepository;
    @Autowired
    private FeeRepository feeRepository;

    public Controller() {
    }

    @GetMapping("{id}")
    public Apartment findApartmentById(@PathVariable int id){
        try {
            Apartment apartment = apartmentRepository.findById(id).get();
            return apartment;
        }catch (Exception ex){
            throw new RuntimeException(ex);
        }
    }
    @GetMapping("{id}")
    public List<Fee> findFeeByApartmentId(@PathVariable int id){
        try {
            List<Fee> fee = feeRepository.findByApartmentId(String.valueOf(id));
            return fee;
        }catch (Exception ex){
            throw new RuntimeException(ex);
        }
    }

    @PutMapping("{id}")
    public Apartment updateApartment(@PathVariable  int id,@RequestBody Apartment apartment,@RequestBody Fee fee ){
        try {
           Apartment updateAparment = apartmentRepository.findById(id).get();
           Fee updateFee = feeRepository.findById(fee.getId()).get();
            updateAparment.setApartmentName(apartment.getApartmentName());
            updateAparment.setUpdateTime(new java.sql.Date(new Date().getTime()));
            updateAparment.setPhoneNumber1(apartment.getPhoneNumber1());
            updateAparment.setPhoneNumber2(apartment.getPhoneNumber2());
            updateAparment.setAddress(apartment.getAddress());
            updateAparment.setImgUrl(apartment.getImgUrl());

            updateFee.setPriceOfElectricity(fee.getPriceOfElectricity());
            updateFee.setPriceOfWater(fee.getPriceOfWater());
            updateFee.setPriceOfInternet(fee.getPriceOfInternet());
            updateFee.setPriceOfTrash(fee.getPriceOfTrash());

            feeRepository.save(updateFee);
            apartmentRepository.save(updateAparment);
            return apartment;
        }catch (Exception ex){
            throw new RuntimeException(ex);
        }
    }


}
