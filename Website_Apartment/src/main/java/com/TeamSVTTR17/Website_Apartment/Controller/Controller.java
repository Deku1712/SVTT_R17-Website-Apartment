package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Service.ApartmentService;
import com.TeamSVTTR17.Website_Apartment.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/OJT")
public class Controller {
    @Autowired
   private RoomService roomService;
    @Autowired
   private ApartmentService apartmentService;

   @GetMapping("/apartmentID/{id}")
   public Apartment getApartmentById(@PathVariable int id) {
       return apartmentService.findApartmentById(id);
   }
    @PutMapping("/edit-apartment/{id}")
    public Apartment updateApartment(@PathVariable int id, @RequestBody Apartment apartment) {
        System.out.println(apartment.toString());
       return apartmentService.updateApartment(id,apartment);
    }

    @PutMapping("/edit-room/{id}")
    public Room updateRoom(@PathVariable int id, @RequestBody Room room) {
        return roomService.updateRoom(id,room);
    }


}
