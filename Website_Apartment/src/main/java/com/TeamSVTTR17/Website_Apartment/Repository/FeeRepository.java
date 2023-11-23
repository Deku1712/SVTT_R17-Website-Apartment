package com.TeamSVTTR17.Website_Apartment.Repository;

import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public interface FeeRepository extends JpaRepository<Fee,Integer> {
    @Query("SELECT f FROM Fee f WHERE f.apartment.id = :id")
    List<Fee> findByApartid(@Param("id") int id);
}
