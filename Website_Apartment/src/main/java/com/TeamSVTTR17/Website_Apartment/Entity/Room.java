package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.List;

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
@Table(name = "Rooms")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "typeID")
    private TypeRooms typeRooms;

    @Column(name = "room_name")
    private String room_name;

    @Column(name = "sizeOfRoom")
    private int sizeOfRoom;

    @Column(name = "numberOfRenter")
    private int numberOfRenter;

    @Column(name = "description")
    private String description;

    @Column(name = "upTime")
    private Date upTime;

    @Column(name = "active")
    private int active;
    
    @Column(name = "status")
    private String status;

    @Column(name = "priceWithCondition")
    private float priceWithCondition;

    @OneToMany(mappedBy = "room" , cascade = CascadeType.ALL)
    private List<Problem> problems;

    @OneToMany(mappedBy = "room" , cascade = CascadeType.ALL)
    private List<CountUsage> countUsages;

    @OneToMany(mappedBy = "room" , cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
    private List<Bill> bills;
    
}
