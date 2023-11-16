package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;

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
@Table(name = "Problems")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "roomID")
    private  Room room;

    @Column(name = "reason")
    private String reason;
    @Column(name = "createTime")
    private Date createTime;
    @Column(name = "fixTime")
    private Date fixTime;
    @Column(name = "bit")
    private int bit;

}
