package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import com.TeamSVTTR17.Website_Apartment.Entity.Img;
import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Repository.ApartmentRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.FeeRepository;
import com.TeamSVTTR17.Website_Apartment.Service.ApartmentService;
import com.TeamSVTTR17.Website_Apartment.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/")
public class Controller {

   private RoomService roomService;
   private ApartmentService apartmentService;
    @PutMapping("/edit-apartment/{id}")
    public Apartment updateApartment(@PathVariable int id, @RequestBody Apartment apartment) {
       return apartmentService.updateApartment(id,apartment);
    }

    @PutMapping("/edit-room/{id}")
    public Room updateRoom(@PathVariable int id, @RequestBody Room room) {
        return roomService.updateRoom(id,room);
    }


}
