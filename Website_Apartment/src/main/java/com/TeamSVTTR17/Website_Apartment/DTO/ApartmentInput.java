package com.TeamSVTTR17.Website_Apartment.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApartmentInput {

    private String apartment_name;
    private String address;
    private String area;
    private  String description;
    private  String imgUrl;
    private  String phone_number1;
    private  String phone_number2;
    private String property;
    private  String size;

    private String price_of_electricity;
    private String price_of_internet ;
    private String price_of_trash;
    private String price_of_water;
    private String water_bill;

}
