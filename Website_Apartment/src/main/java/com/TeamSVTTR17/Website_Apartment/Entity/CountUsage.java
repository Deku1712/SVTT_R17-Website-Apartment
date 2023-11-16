package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "CountUsage")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CountUsage {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    
    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "roomID")
    private Room room;

    @Column(name = "number_electricity")
    private int number_electricity;

    @Column(name = "number_water")
    private int number_water;

    @Column(name = "insTime")
    private Date insTime;

    @Column(name = "upTime")
    private Date upTime;

    @Column(name = "actie")
    private int actie;
}
