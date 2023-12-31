package com.TeamSVTTR17.Website_Apartment.Service;


import com.TeamSVTTR17.Website_Apartment.DTO.RoomInput;
import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Img;
import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Repository.AparmentRepo;
import com.TeamSVTTR17.Website_Apartment.Repository.ImgRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.RoomRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service

public class RoomService {
    @Autowired
    private  RoomRepository roomRepository;
    @Autowired
    private  ImgRepository imgRepository;

    @Autowired
    private AparmentRepo aparmentRepo;

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
            updateRoom.setActive(room.getActive());
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

    public void addRoom(RoomInput roomInput) {
        java.sql.Date updateTime = new java.sql.Date(System.currentTimeMillis());
        Apartment apartment = aparmentRepo.findById(roomInput.getApartmentID()).get();
        List<Img> list_img = new ArrayList<>();

        for (String imgUrl : roomInput.getFile_url()
             ) {
            Img img = new Img();
            img.setUrl_img(imgUrl);
            list_img.add(img);
        }
        imgRepository.saveAll(list_img);

        for (int i = 0 ; i < roomInput.getAmount() ; i++) {

            Room room = new Room();
            room.setRoom_name(roomInput.getRoomName());
            room.setPriceOfRoom(roomInput.getPriceRoom());
            room.setType(roomInput.getTypeRoom());
            room.setApartment(apartment);
            room.setSizeOfRoom(roomInput.getSizeRoom());
            room.setCreateTime(updateTime);
            room.setUpdateTime(updateTime);
            room.setImgs(list_img);
            room.setDescription(room.getDescription());

            roomRepository.save(room);

        }









    }

    public List<Room> findByApartmentID(int id) {
        Apartment apartment = aparmentRepo.findById(id).get();
        List<Room> list = roomRepository.findRoomsByApartment(apartment);
        return list;


    }
}
