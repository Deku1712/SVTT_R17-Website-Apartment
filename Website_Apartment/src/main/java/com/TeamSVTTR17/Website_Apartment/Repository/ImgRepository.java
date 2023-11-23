package com.TeamSVTTR17.Website_Apartment.Repository;

import com.TeamSVTTR17.Website_Apartment.Entity.Img;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImgRepository extends JpaRepository<Img, Integer> {
    @Query("SELECT i FROM Imgs i WHERE i.room.id = :id")
    List<Img> findByRoomId(@Param("id") int id);

    @Query("SELECT i FROM Imgs i WHERE i.url_img = :url")
    Img findByUrl(@Param("url") String url);
}
