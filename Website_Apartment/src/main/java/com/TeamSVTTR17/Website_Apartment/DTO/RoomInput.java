package com.TeamSVTTR17.Website_Apartment.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoomInput {

    private int apartmentID;
    private  String roomName;
    private int amount;
    private String typeRoom;
    private String description;
    private float priceRoom;
    private int sizeRoom;
    private List<String> file_url;
}
