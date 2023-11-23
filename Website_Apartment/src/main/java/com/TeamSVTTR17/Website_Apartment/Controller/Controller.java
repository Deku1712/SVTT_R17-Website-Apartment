package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import com.TeamSVTTR17.Website_Apartment.Entity.Img;
import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Repository.ApartmentRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.FeeRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.ImgRepository;
import com.TeamSVTTR17.Website_Apartment.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/")
public class Controller {
    @Autowired
    private ApartmentRepository apartmentRepository;
    @Autowired
    private FeeRepository feeRepository;
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private ImgRepository imgRepository;

    @GetMapping("/apartment/{id}")
    public Apartment findApartmentById(@PathVariable int id) {
        try {
            Apartment apartment = apartmentRepository.findById(id).get();
            return apartment;
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    @GetMapping("/list-fee/{id}")
    public List<Fee> findFeeByApartmentId(@PathVariable int id) {
        try {
            List<Fee> fee = feeRepository.findByApartid(id);
            return fee;
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    @GetMapping("/list-img/{id}")
    public List<Img> findImgByRoomtId(@PathVariable int id) {
        try {
            List<Img> img = imgRepository.findByRoomId(id);
            return img;
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    @PutMapping("/edit-apartment/{id}")
    public Apartment updateApartment(@PathVariable int id, @RequestBody Apartment apartment, @RequestBody Fee fee) {
        try {
            Apartment updateAparment = apartmentRepository.findById(id).get();
            Fee updateFee = feeRepository.findById(fee.getId()).get();
            updateAparment.setApartmentName(apartment.getApartmentName());
            updateAparment.setUpdateTime(new java.sql.Date(new Date().getTime()));
            updateAparment.setPhoneNumber1(apartment.getPhoneNumber1());
            updateAparment.setPhoneNumber2(apartment.getPhoneNumber2());
            updateAparment.setAddress(apartment.getAddress());
            updateAparment.setImgUrl(apartment.getImgUrl());

            updateFee.setPriceOfElectricity(fee.getPriceOfElectricity());
            updateFee.setPriceOfWater(fee.getPriceOfWater());
            updateFee.setPriceOfInternet(fee.getPriceOfInternet());
            updateFee.setPriceOfTrash(fee.getPriceOfTrash());

            feeRepository.save(updateFee);
            apartmentRepository.save(updateAparment);
            return apartment;
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    @PutMapping("/edit-room/{id}")
    public Room updateRoom(@PathVariable int id, @RequestBody Room room) {
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
                    urlExisting.setId(img.getId());
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
