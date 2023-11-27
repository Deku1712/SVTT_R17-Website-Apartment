package com.TeamSVTTR17.Website_Apartment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.TeamSVTTR17.Website_Apartment.*")
public class WebsiteApartmentApplication  {

	public static void main(String[] args) {
		SpringApplication.run(WebsiteApartmentApplication.class, args);
	}


}
