package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "Posts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "title")
    private String title;
    @Column(name = "apartmentName")
    private String apartmentName;
    @Column(name = "phoneNumber1")
    private String phoneNumber1 ;
    @Column(name = "phoneNumber2")
    private String phoneNumber2;
    @Column(name = "address")
    private String address;
    @Column(name = "property")
    private String property;
    @Column(name = "description")
    private String description;
    @Column(name = "size")
    private int size;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL )
    private List<Img> imgs = new ArrayList<>();

    @Column(name = "createTime")
    private Date createTime;
    @Column(name = "updateTime")
    private Date updateTime;

    @Column(name = "area")
    private String area;

    @Column(name = "price")
    private String price;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL )
    private List<Comment> comments  =  new ArrayList<>();

}
