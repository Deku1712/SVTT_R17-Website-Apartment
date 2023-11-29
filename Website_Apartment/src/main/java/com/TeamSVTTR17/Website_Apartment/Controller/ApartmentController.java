package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/apartment")
public class ApartmentController {

    @Autowired
    private ApartmentService apartmentService;

    @PostMapping
    public  Apartment createApartment(@RequestBody Apartment apartment){
        return apartmentService.createApartment(apartment);
    }
   @GetMapping
   public List<Apartment> getAllApartment(){
       return apartmentService.getAllApartment();
   }
    @GetMapping("{id}")
    public Apartment getApartmentById(@PathVariable int id) {
        return apartmentService.findApartmentById(id);
    }

    @PutMapping("{id}")
    public Apartment updateApartment(@PathVariable int id, @RequestBody Apartment apartment) {
        System.out.println(apartment.toString());
        return apartmentService.updateApartment(id, apartment);
    }


}
