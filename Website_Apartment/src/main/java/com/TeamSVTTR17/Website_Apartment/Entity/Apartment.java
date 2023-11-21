package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Apartments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Apartment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "apartmentName")
    private String apartmentName;
    @Column(name = "phoneNumber1")
    private String phoneNumber1;
    @Column(name = "phoneNumber2")
    private String phoneNumber2;
    @Column(name = "address")
    private String address;
    @Column(name = "property")
    private String property;
    @Column(name = "description")
    private String description;
    @Column(name = "size")
    private int size;
    @Column(name = "active")
    private int active;
    @Column(name = "createTime")
    private Date createTime;
    @Column(name = "updateTime")
    private Date updateTime;
    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;
    @Column(name = "imgUrl")
    private String imgUrl;

    @OneToMany(mappedBy = "apartment",  cascade = CascadeType.ALL )
    private List<Room> rooms = new ArrayList<>();

    @OneToMany(mappedBy = "apartment", cascade = CascadeType.ALL)
    private List<Fee> fees = new ArrayList<>();
    
    


    
}
