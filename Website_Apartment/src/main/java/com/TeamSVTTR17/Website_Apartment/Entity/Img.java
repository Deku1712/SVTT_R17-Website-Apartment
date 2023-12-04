package com.TeamSVTTR17.Website_Apartment.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Generated;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Imgs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Img {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "url_img")
    private String url_img;

    @ManyToOne
    @JoinColumn(name = "postID")
    @JsonIgnore
    private Post post;
}
