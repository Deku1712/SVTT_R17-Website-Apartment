package com.TeamSVTTR17.Website_Apartment.Entity;

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
@Table(name = "Room_Types")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TypeRooms {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "apartID")
    private Apartment apartment;

    @Column(name = "type_room")
    private String type_room;

    @OneToMany(mappedBy = "typeRooms" , cascade = CascadeType.ALL)
    private List<Room> rooms;

    @OneToMany(mappedBy = "typeRooms" , cascade = CascadeType.ALL )
    private List<RoomPrice> roomPrices;

    @OneToMany(mappedBy = "typeRooms" ,cascade = CascadeType.ALL )
    private List<RoomIMG> roomImgs ;

    
}
