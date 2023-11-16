package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Users")
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "phone")
    private String phone;

    @Column(name = "emaill")
    private String email;

    @Column(name = "CCCD")
    private String cccd;

    @ManyToMany
    @JoinTable(name = "Users_Roles", joinColumns = @JoinColumn(name="Users_id"), inverseJoinColumns = @JoinColumn(name="Roles_id"))
    private Set<Role> roles = new HashSet<>();

    // @ManyToOne
    // @JoinColumn(name = "roomID")
    // private Room room;

    @Column(name = "createTime")
    private Date createTime;

    @Column(name = "updateTime")
    private Date updateTime;

    @OneToMany(mappedBy = "user")
    private Collection<Apartment> apartments;
    
}
