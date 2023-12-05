package com.TeamSVTTR17.Website_Apartment.Authen;

import com.TeamSVTTR17.Website_Apartment.Config.JwtService;
import com.TeamSVTTR17.Website_Apartment.Entity.User;
import com.TeamSVTTR17.Website_Apartment.Repository.RoleRepo;
import com.TeamSVTTR17.Website_Apartment.Repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RoleRepo roleRepo;

    public String register(RegisterRequest request) {
//        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        var user = User.builder()
//                .username(request.getUsername())
//                .password(passwordEncoder.encode(request.getPassword()))
//                .email(request.getEmail())
////                .role(Role.USER)
//                .role(roleRepo.findByRoleName("User"))
//                .build();
//        var savedUser = userRepo.save(user);
//        authorities = user.getRole().stream()
//                .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
//                .collect(Collectors.toList());
//        var jwtToken = jwtService.generateToken(user, authorities);
//        var refreshToken = jwtService.generateRefreshToken(user, authorities);
//        return AuthenticationResponse.builder()
//                .accessToken(jwtToken)
//                .refreshToken(refreshToken)
//                .build();
        if(userRepo.findByUsername(request.getUsername()).isPresent()){
            return "User has exists";
        }
        if(request.getPassword().equals(request.getRepass())){
            User user = new User();
            Date updateTime = new Date(System.currentTimeMillis());
            user.setUsername(request.getUsername());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setRole(roleRepo.findByRoleName("User"));
            user.setFullname(request.getFullname());
            user.setAvatar("https://img.upanh.tv/2023/12/04/viet.jpg");
            user.setEmail(request.getEmail());
            user.setCreateTime(updateTime);
            user.setUpdateTime(updateTime);
            userRepo.save(user);
            return "Sighup success";
        }
        return "password not same repass";
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        var user = userRepo.findByUsername(request.getUsername())
                .orElseThrow();
        authorities = user.getRole().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
                .collect(Collectors.toList());
        var jwtToken = jwtService.generateToken(user, authorities);
//        var refreshToken = jwtService.generateRefreshToken(user, authorities);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .userId(user.getId())
                .build();
    }


}

