package com.TeamSVTTR17.Website_Apartment.Repository;

import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeeRepository extends JpaRepository<Fee,Integer> {
    @Query("SELECT d FROM Free d WHERE d.apartid = :id")
    List<Fee> findByApartmentId(@Param("id") String id);
}
