package com.TeamSVTTR17.Website_Apartment.Authen;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String fullname;
    private String username;
    private String password;
    private String repass;
    private String email;
}

