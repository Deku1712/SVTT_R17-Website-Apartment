package com.TeamSVTTR17.Website_Apartment.Entity;

import java.util.Date;

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
@Table(name = "Bills")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Bill {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
	
    @Column(name = "createDate")
    private Date createDate;
    
    @Column(name = "startDate")
    private Date startDate;
    
    @Column(name = "endDate")
    private Date endDate;
    
    @Column(name = "oldElectricityNum")
    private int oldElectricityNum;
    @Column(name = "newElectricityNum")
    private int newElectricityNum;
    @Column(name = "totalElectricity")
    private int totalElectricity;
    
    @Column(name = "oldWaterNum")
    private int oldWaterNum;
    @Column(name = "newWaterNum")
    private int newWaterNum;
    @Column(name = "totalWater")
    private int totalWater;
    
    @Column(name = "totalInternet")
    private int totalInternet;
    
    @Column(name = "totalTrash")
    private int totalTrash;
    
    @Column(name = "totalRoom")
    private int totalRoom;
    
    @Column(name = "discount")
    private int discount;
    
    @Column(name = "totalBill")
    private int totalBill;

    @ManyToOne
    @JoinColumn(name = "roomID")
   
    private Room room;


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getOldElectricityNum() {
		return oldElectricityNum;
	}

	public void setOldElectricityNum(int oldElectricityNum) {
		this.oldElectricityNum = oldElectricityNum;
	}

	public int getNewElectricityNum() {
		return newElectricityNum;
	}

	public void setNewElectricityNum(int newElectricityNum) {
		this.newElectricityNum = newElectricityNum;
	}

	public int getTotalElectricity() {
		return totalElectricity;
	}

	public void setTotalElectricity(int totalElectricity) {
		this.totalElectricity = totalElectricity;
	}

	public int getOldWaterNum() {
		return oldWaterNum;
	}

	public void setOldWaterNum(int oldWaterNum) {
		this.oldWaterNum = oldWaterNum;
	}

	public int getNewWaterNum() {
		return newWaterNum;
	}

	public void setNewWaterNum(int newWaterNum) {
		this.newWaterNum = newWaterNum;
	}

	public int getTotalWater() {
		return totalWater;
	}

	public void setTotalWater(int totalWater) {
		this.totalWater = totalWater;
	}

	public int getTotalInternet() {
		return totalInternet;
	}

	public void setTotalInternet(int totalInternet) {
		this.totalInternet = totalInternet;
	}

	public int getTotalTrash() {
		return totalTrash;
	}

	public void setTotalTrash(int totalTrash) {
		this.totalTrash = totalTrash;
	}

	public int getTotalBill() {
		return totalBill;
	}

	public void setTotalBill(int totalBill) {
		this.totalBill = totalBill;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

	public int getTotalRoom() {
		return totalRoom;
	}

	public void setTotalRoom(int totalRoom) {
		this.totalRoom = totalRoom;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	@Override
	public String toString() {
		return "Bill [id=" + id + ", createDate=" + createDate + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", oldElectricityNum=" + oldElectricityNum + ", newElectricityNum=" + newElectricityNum
				+ ", totalElectricity=" + totalElectricity + ", oldWaterNum=" + oldWaterNum + ", newWaterNum="
				+ newWaterNum + ", totalWater=" + totalWater + ", totalInternet=" + totalInternet + ", totalTrash="
				+ totalTrash + ", totalRoom=" + totalRoom + ", discount=" + discount + ", totalBill=" + totalBill
				+ ", room=" + room + "]";
	}

	
//	INSERT INTO bills ( [start_date], end_date, create_date, old_electricity_num, new_electricity_num, total_electricity, old_water_num, new_water_num, total_water, total_internet, total_trash, discount, total_bill)
//	VALUES
//	  ( '2023-01-01', '2023-01-31', '2023-01-15', 100, 200, 300000, 50, 70, 50000, 30000, 20000, 0, 2500000),
//	  ( '2023-02-01', '2023-02-28', '2023-02-15', 100, 250, 350000, 50, 70, 50000, 30000, 20000, 0, 2400000),
//	  ( '2023-03-01', '2023-03-31', '2023-03-15', 100, 200, 300000, 50, 70, 50000, 30000, 20000, 0, 2600000);



    
    
}
