package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Rooms")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "room_name")
    private String room_name;

    @Column(name = "sizeOfRoom")
    private int sizeOfRoom;

    @Column(name = "numberOfRenter")
    private int numberOfRenter;

    @Column(name = "description")
    private String description;

    @Column(name = "priceOfRoom")
    private float priceOfRoom;

    @Column(name = "createTime")
    private Date createTime;

    @Column(name = "updateTime")
    private Date updateTime;

    @Column(name = "active")
    private int active;

    @Column(name = "type")
    private String type;

    @ManyToOne
    @JoinColumn(name = "apartID")
    @JsonIgnore
    private Apartment apartment;


    @ManyToMany
    @JoinTable(joinColumns = @JoinColumn(name = "roomID"), inverseJoinColumns = @JoinColumn(name = "imgID"))
    private List<Img> imgs = new ArrayList<>();

    @OneToMany(mappedBy = "room")
    private List<Bill> bills = new ArrayList<>();

}
