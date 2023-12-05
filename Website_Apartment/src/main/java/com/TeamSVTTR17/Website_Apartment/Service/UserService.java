package com.TeamSVTTR17.Website_Apartment.Service;

import com.TeamSVTTR17.Website_Apartment.Authen.RegisterRequest;
import com.TeamSVTTR17.Website_Apartment.Entity.User;
import com.TeamSVTTR17.Website_Apartment.Repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
//    private final PasswordEncoder passwordEncoder;


    public User getUserById(int id){
        return userRepo.findById(id).get();
    }

    public User GetUserByUsername(String username) {
        return userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

//    public void saveUser(RegisterRequest request){
//        if(request.getPassword().equals(request.getRepass())){
//            User user = new User();
//            Date updateTime = new Date(System.currentTimeMillis());
//            user.setUsername(request.getUsername());
//            user.setPassword(passwordEncoder.encode(request.getPassword()));
//            user.setRole();
//            user.setFullname(request.getFullname());
//            user.setEmail(request.getEmail());
//            user.setCreateTime(updateTime);
//            user.setUpdateTime(updateTime);
////            user.getAvatar()
//            userRepo.save(user);
//        }
//    }

}
