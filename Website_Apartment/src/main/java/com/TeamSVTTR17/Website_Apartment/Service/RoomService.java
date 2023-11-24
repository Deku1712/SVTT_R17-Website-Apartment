package com.TeamSVTTR17.Website_Apartment.Service;

import com.TeamSVTTR17.Website_Apartment.Entity.Img;
import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Repository.ImgRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.RoomRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class RoomService {
    private final RoomRepository roomRepository;
    private final ImgRepository imgRepository;
    @Transactional
    public Room updateRoom( int id, Room room) {
        try {
            Room updateRoom = roomRepository.findById(id).get();
            updateRoom.setRoom_name(room.getRoom_name());
            updateRoom.setNumberOfRenter(room.getNumberOfRenter());
            updateRoom.setSizeOfRoom(room.getSizeOfRoom());
            updateRoom.setDescription(room.getDescription());
            updateRoom.setUpdateTime(new java.sql.Date(new Date().getTime()));
            updateRoom.setType(room.getType());
            updateRoom.setPriceOfRoom(room.getPriceOfRoom());
            updateRoom.getImgs().clear();
            for (Img img : room.getImgs()) {
                Img existingImg = imgRepository.findById(img.getId()).orElse(new Img());
                Img urlExisting = imgRepository.findByUrl(img.getUrl_img());
                if(urlExisting == null){
                    urlExisting = new Img();
                    urlExisting.setUrl_img(img.getUrl_img());
                    imgRepository.save(urlExisting);
                }else {
                    existingImg.setId(img.getId());
                    existingImg.setUrl_img(img.getUrl_img());
                    updateRoom.getImgs().add(existingImg);
                }
            }
            return roomRepository.save(updateRoom);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

}
