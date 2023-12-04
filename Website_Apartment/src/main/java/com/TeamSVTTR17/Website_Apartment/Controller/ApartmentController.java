package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.DTO.ApartmentInput;
import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Repository.AparmentRepo;
import com.TeamSVTTR17.Website_Apartment.Service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/apartments")
public class ApartmentController {

    @Autowired
    private AparmentRepo aparmentRepo;

    @Autowired
    private ApartmentService apartmentService;



    @GetMapping
    public List<Apartment> viewAllApartment(){
        return apartmentService.getAll();

    }
    @PostMapping("/user/{id}")
    public void addApartment(@PathVariable("id") int id, @RequestBody ApartmentInput apartmentInput){

        apartmentService.addApartment(apartmentInput);

    }

    @GetMapping("/user/{id}")
    public List<Apartment> getApartmentByUserId(@PathVariable("id") int id){
        List<Apartment> list = apartmentService.getApartmentByUserID(id);
        return list;
    }

}
