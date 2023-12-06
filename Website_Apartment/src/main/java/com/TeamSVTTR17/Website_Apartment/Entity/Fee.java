package com.TeamSVTTR17.Website_Apartment.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getPriceOfElectricity() {
		return priceOfElectricity;
	}

	public void setPriceOfElectricity(float priceOfElectricity) {
		this.priceOfElectricity = priceOfElectricity;
	}

	public float getPriceOfWater() {
		return priceOfWater;
	}

	public void setPriceOfWater(float priceOfWater) {
		this.priceOfWater = priceOfWater;
	}

	public float getPriceOfTrash() {
		return priceOfTrash;
	}

	public void setPriceOfTrash(float priceOfTrash) {
		this.priceOfTrash = priceOfTrash;
	}

	public float getPriceOfInternet() {
		return priceOfInternet;
	}

	public void setPriceOfInternet(float priceOfInternet) {
		this.priceOfInternet = priceOfInternet;
	}

	public float getWaterBill() {
		return waterBill;
	}

	public void setWaterBill(float waterBill) {
		this.waterBill = waterBill;
	}

	public Apartment getApartment() {
		return apartment;
	}

	public void setApartment(Apartment apartment) {
		this.apartment = apartment;
	}
	public int getApartmentId(Apartment apartment) {
		return apartment.getId();
	}

	@Override
	public String toString() {
		return "Fee [id=" + id + ", priceOfElectricity=" + priceOfElectricity + ", priceOfWater=" + priceOfWater
				+ ", priceOfTrash=" + priceOfTrash + ", priceOfInternet=" + priceOfInternet + ", waterBill=" + waterBill
				+ ", apartment=" + apartment + "]";
	}
    
    
}
