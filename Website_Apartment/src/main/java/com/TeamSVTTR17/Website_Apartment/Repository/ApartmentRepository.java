package com.TeamSVTTR17.Website_Apartment.Repository;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public interface ApartmentRepository extends JpaRepository<Apartment,Integer> {
//    @Query("SELECT  a ,f FROM Apartment a LEFT JOIN  f Fee ON a.id = f.apartment.id WHERE a.id = :apartmentId")
//    Apartment findApartmentAndFeesById(@Param("apartmentId") int apartmentId);
}
