package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.DTO.RoomInput;
import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/room")
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
    @GetMapping("/apart/{id}")
    public List<Room> getRoomsByApartmentID (@PathVariable( "id") int id){
        return roomService.findByApartmentID(id);
    }

    @PostMapping
    public void addRoom(@RequestBody RoomInput roomInput){
        roomService.addRoom(roomInput);
    }

}
