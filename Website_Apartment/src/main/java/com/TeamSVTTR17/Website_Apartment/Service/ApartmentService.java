package com.TeamSVTTR17.Website_Apartment.Service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;

public interface ApartmentService extends JpaRepository<Apartment, Long>{

}
