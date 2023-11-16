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
@Data
@Table(name = "Apartments")
@NoArgsConstructor
@AllArgsConstructor
public class Apartment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "id")
    private int id;

    @Column(name = "apartment_name")
    private String apartment_name;

    @Column (name = "address")
    private String adress;

    @Column (name = "description")
    private String description;

    @Column( name = "size")
    private int size;

    @Column (name = "active")
    private int active;

    @Column (name = "createTime")
    private Date createTimDate;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;

    @Column (name = "imgUrl")
    private String imgUrl;

    @Column(name = "type_data")
    private int type_data;

    @OneToMany(mappedBy = "apartment", cascade = CascadeType.ALL)
    private List<TypeRooms> typeRooms ;

    @OneToMany(mappedBy = "apartment" ,cascade = CascadeType.ALL)
    private List<Fee> fees;

}
