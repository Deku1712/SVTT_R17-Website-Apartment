package com.TeamSVTTR17.Website_Apartment.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Generated;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Fees")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Fee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "priceOfElectricity")
    private float priceOfElectricity;
    @Column(name = "priceOfWater")
    private float priceOfWater;
    @Column(name = "priceOfTrash")
    private float priceOfTrash;
    @Column(name = "priceOfInternet")
    private float priceOfInternet;
    @Column(name = "waterBill")
    private float waterBill;

    @ManyToOne
    @JoinColumn(name = "apartID")
    @JsonIgnore
    private Apartment apartment;


}
