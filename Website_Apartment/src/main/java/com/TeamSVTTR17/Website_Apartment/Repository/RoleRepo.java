package com.TeamSVTTR17.Website_Apartment.Repository;

import com.TeamSVTTR17.Website_Apartment.Entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface RoleRepo extends JpaRepository<Role, Integer> {

    Set<Role> findByRoleName(String roleName);
}
