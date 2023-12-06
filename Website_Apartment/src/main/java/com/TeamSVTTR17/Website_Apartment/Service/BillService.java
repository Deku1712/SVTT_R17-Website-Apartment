package com.TeamSVTTR17.Website_Apartment.Service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TeamSVTTR17.Website_Apartment.Entity.Bill;

public interface BillService extends JpaRepository<Bill, Long>{

}
