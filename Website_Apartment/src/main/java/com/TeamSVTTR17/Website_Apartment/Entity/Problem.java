package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;


import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Problem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "problem")
    private String problem;
    @Column(name = "createTime")
    private Date createTime;
    @Column(name = "updateTime")
    private Date updateTime;
    @Column(name = "fix")
    private int fix;

    @ManyToOne
    @JoinColumn(name = "roomID")
    private Room room;
}
