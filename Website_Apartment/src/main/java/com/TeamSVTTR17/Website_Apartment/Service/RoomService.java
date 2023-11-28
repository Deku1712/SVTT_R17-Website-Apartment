package com.TeamSVTTR17.Website_Apartment.Service;


import com.TeamSVTTR17.Website_Apartment.Entity.Img;
import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Repository.ImgRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.RoomRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service

public class RoomService {
    @Autowired
    private  RoomRepository roomRepository;
    @Autowired
    private  ImgRepository imgRepository;

    public Room findRoomById(int id) {
        return roomRepository.findById(id).get();
    }
    @Transactional
    public Room updateRoom( int id, Room room) {
        try {
            Room updateRoom = findRoomById(id);
            updateRoom.setRoom_name(room.getRoom_name());
            updateRoom.setNumberOfRenter(room.getNumberOfRenter());
            updateRoom.setSizeOfRoom(room.getSizeOfRoom());
            updateRoom.setDescription(room.getDescription());
            updateRoom.setUpdateTime(new java.sql.Date(new Date().getTime()));
            updateRoom.setType(room.getType());
            updateRoom.setPriceOfRoom(room.getPriceOfRoom());
            updateRoom.getImgs().clear();
            for (Img img : room.getImgs()) {
                Img urlExisting = imgRepository.findByUrl(img.getUrl_img());
                if(urlExisting == null){
                    urlExisting = new Img();
                    urlExisting.setUrl_img(img.getUrl_img());
                    updateRoom.getImgs().add(urlExisting);
                    imgRepository.save(urlExisting);
                }else {
                    urlExisting.setId(urlExisting.getId());
                    urlExisting.setUrl_img(urlExisting.getUrl_img());
                    updateRoom.getImgs().add(urlExisting);
                }
            }
            return roomRepository.save(updateRoom);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

}
