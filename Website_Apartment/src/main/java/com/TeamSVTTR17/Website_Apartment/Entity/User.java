package com.TeamSVTTR17.Website_Apartment.Entity;

import java.sql.Date;
import java.util.*;
import java.util.stream.Collectors;

import io.netty.handler.codec.socks.SocksAuthRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "fullname")
    private String fullname;
    @Column(name = "phone")
    private String phone;
    @Column(name = "email")
    private String email;
    @Column(name = "address")
    private String address;
    @Column(name = "cccd")
    private String cccd;
    @Column(name = "avatar")
    private String avatar;
    @Column(name = "createTime")
    private Date createTime;
    @Column(name = "updateTime")
    private Date updateTime;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "Users_Roles" , joinColumns =  @JoinColumn(name = "userID"), inverseJoinColumns = @JoinColumn(name="roleID"))
    private Set<Role> role = new HashSet<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return List.of(new SimpleGrantedAuthority(roleRepo.findAll()));
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        role.stream().forEach(i-> authorities.add(new SimpleGrantedAuthority(i.getRoleName())));
        return List.of(new SimpleGrantedAuthority(authorities.toString()));
    }
//@Override
//public Collection<? extends GrantedAuthority> getAuthorities() {
//    return role.stream()
//            .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
//            .collect(Collectors.toList());
//}


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

//    @ManyToOne
//    @JoinColumn(name = "roomID")
//    private Room room;




    


    
}
