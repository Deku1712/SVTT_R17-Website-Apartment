package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/room")
public class RoomController {
    @Autowired
    private RoomService roomService;
    @GetMapping("{id}")
    public Room findByIdRoom(@PathVariable int id){
        return roomService.findRoomById(id);
    }
    @PutMapping("{id}")
    public Room updateRoom(@PathVariable int id, @RequestBody Room room) {
        System.out.println(room.toString());
        return roomService.updateRoom(id,room);
    }

}
