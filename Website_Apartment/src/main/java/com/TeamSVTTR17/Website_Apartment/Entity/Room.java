package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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

    @OneToMany(mappedBy = "room",cascade = CascadeType.ALL)
    private List<Bill> bills = new ArrayList<>();

//    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    private List<Bill> bills = new ArrayList<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRoom_name() {
		return room_name;
	}

	public void setRoom_name(String room_name) {
		this.room_name = room_name;
	}

	public int getSizeOfRoom() {
		return sizeOfRoom;
	}

	public void setSizeOfRoom(int sizeOfRoom) {
		this.sizeOfRoom = sizeOfRoom;
	}

	public int getNumberOfRenter() {
		return numberOfRenter;
	}

	public void setNumberOfRenter(int numberOfRenter) {
		this.numberOfRenter = numberOfRenter;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPriceOfRoom() {
		return priceOfRoom;
	}

	public void setPriceOfRoom(float priceOfRoom) {
		this.priceOfRoom = priceOfRoom;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Apartment getApartment() {
		return apartment;
	}

	public void setApartment(Apartment apartment) {
		this.apartment = apartment;
	}

	public List<Img> getImgs() {
		return imgs;
	}

	public void setImgs(List<Img> imgs) {
		this.imgs = imgs;
	}

	public List<Bill> getBills() {
		return bills;
	}

	public void setBills(List<Bill> bills) {
		this.bills = bills;
	}

	@Override
	public String toString() {
		return "Room [id=" + id + ", room_name=" + room_name + ", sizeOfRoom=" + sizeOfRoom + ", numberOfRenter="
				+ numberOfRenter + ", description=" + description + ", priceOfRoom=" + priceOfRoom + ", createTime="
				+ createTime + ", updateTime=" + updateTime + ", active=" + active + ", type=" + type + ", apartment="
				+ apartment + ", imgs=" + imgs + ", bills=" + bills + "]";
	}
    

}
