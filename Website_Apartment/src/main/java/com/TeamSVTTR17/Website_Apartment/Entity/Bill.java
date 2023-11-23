package com.TeamSVTTR17.Website_Apartment.Entity;

import jakarta.annotation.Generated;
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
@Table(name = "Bills")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Bill {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "numberOfPeople")
    private int numberOfPeople;
    @Column(name = "oldElectricityNumber")
    private int oldElectricityNumber;
    @Column(name = "newElectricityNumber")
    private int newElectricityNumber;
    @Column(name = "amountOfElectricityUsed")
    private int amountOfElectricityUsed;
    @Column(name = "priceOfElectricity")
    private float priceOfElectricity;
    @Column(name = "totalElectricity")
    private float totalElectricity;
    @Column(name = "oldWaterNumber")
    private int oldWaterNumber;
    @Column(name = "newWaterNumber")
    private int newWaterNumber;
    @Column(name = "amountOfWaterUsed")
    private int amountOfWaterUsed;
    @Column(name = "priceOfwater")
    private float priceOfwater;
    @Column(name = "waterBill")
    private float waterBill;
    @Column(name = "totalWater")
    private float totalWater;
    @Column(name = "totalInternet")
    private float totalInternet;
    @Column(name = "totalTrash")
    private float totalTrash;
    @Column(name = "totalBill")
    private float totalBill;

    @ManyToOne
    @JoinColumn(name = "roomID")
    private Room room;
}
