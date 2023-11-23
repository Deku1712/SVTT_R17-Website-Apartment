package com.TeamSVTTR17.Website_Apartment.Repository;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
@Service
public interface ApartmentRepository extends JpaRepository<Apartment,Integer> {
}
