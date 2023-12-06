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


    @PostMapping("/user/{id}")
    public void addApartment(@PathVariable("id") int id, @RequestBody ApartmentInput apartmentInput){

        apartmentService.addApartment(apartmentInput);

    }

    @GetMapping("/user/{id}")
    public List<Apartment> getApartmentByUserId(@PathVariable("id") int id){
        List<Apartment> list = apartmentService.getApartmentByUserID(id);
        return list;
    }
  
  
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
    @DeleteMapping("{id}")
    public void deleteApartment(@PathVariable int id) {
         apartmentService.deleteApartmentById(id);

    }
    @PutMapping("{id}")
    public Apartment updateApartment(@PathVariable int id, @RequestBody Apartment apartment) {
        System.out.println(apartment.toString());
        return apartmentService.updateApartment(id, apartment);
    }


}
