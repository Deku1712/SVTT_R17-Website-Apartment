package com.TeamSVTTR17.Website_Apartment.Service;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Repository.ApartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class ApartmentService {
    private ApartmentRepository apartmentRepository;
    public Apartment updateApartment(int id, Apartment apartment) {
        try {
            Apartment updateApartment = apartmentRepository.findById(id).get();
            updateApartment.setApartmentName(apartment.getApartmentName());
            updateApartment.setUpdateTime(new java.sql.Date(new Date().getTime()));
            updateApartment.setPhoneNumber1(apartment.getPhoneNumber1());
            updateApartment.setPhoneNumber2(apartment.getPhoneNumber2());
            updateApartment.setAddress(apartment.getAddress());
            updateApartment.setImgUrl(apartment.getImgUrl());
            updateApartment.setFees(apartment.getFees());
            apartmentRepository.save(updateApartment);
            return apartment;
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }
}
