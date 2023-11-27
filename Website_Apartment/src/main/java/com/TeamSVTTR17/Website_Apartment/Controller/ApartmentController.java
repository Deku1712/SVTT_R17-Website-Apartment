package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Repository.AparmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ApartmentController {

    @Autowired
    private AparmentRepo aparmentRepo;

    @GetMapping("/apartment")
    public List<Apartment> viewAllApartment(){
        return aparmentRepo.findAll();

    }
    @PostMapping("/apartment")
    public void addApartment(){
        Apartment apartment = new Apartment();
        apartment.setApartmentName("student Home");
        apartment.setPhoneNumber1("094454914000");
        apartment.setPhoneNumber1("09445491400a0");
        apartment.setAddress("42 khai dong 4 ");
        apartment.setProperty("  full condition ");
        apartment.setDescription(" new apartment ");
        apartment.setSize(43);
        apartment.setActive(1);
        apartment.setUser(null);
        apartment.setImgUrl(" no img here");

        aparmentRepo.save(apartment);




    }

}
