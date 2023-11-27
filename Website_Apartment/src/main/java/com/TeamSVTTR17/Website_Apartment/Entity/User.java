package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "fullname")
    private String fullname;
    @Column(name = "phone")
    private String phone;
    @Column(name = "email")
    private String email;
    @Column(name = "address")
    private String address;
    @Column(name = "cccd")
    private String cccd;
    @Column(name = "avatar")
    private String avatar;
    @Column(name = "createTime")
    private Date createTime;
    @Column(name = "updateTime")
    private Date updateTime;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "Users_Roles" , joinColumns =  @JoinColumn(name = "userID"), inverseJoinColumns = @JoinColumn(name="roleID"))
    private Set<Role> role = new HashSet<>();

//    @ManyToOne
//    @JoinColumn(name = "roomID")
//    private Room room;




    


    
}
