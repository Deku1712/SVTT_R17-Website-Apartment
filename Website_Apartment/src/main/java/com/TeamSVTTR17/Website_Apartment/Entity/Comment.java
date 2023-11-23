package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.validator.constraints.CodePointLength;

import jakarta.annotation.Generated;
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
@Table(name = "Comments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "reply_level")
    private int reply_level;
    @Column(name = "comment")
    private String comment;
    @Column(name = "createTime")
    private Date createTime;
    @Column(name = "updateTime")
    private Date updateTime;

    @ManyToOne
    @JoinColumn(name = "parent_cmtID")
    private Comment parent_cmt;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "postID")
    private Post post;

    @OneToMany(mappedBy = "parent_cmt" )
    private List<Comment> cmtChild = new ArrayList<>();

}
