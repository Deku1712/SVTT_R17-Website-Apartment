package com.TeamSVTTR17.Website_Apartment.Controller;

import com.TeamSVTTR17.Website_Apartment.Entity.Post;
import com.TeamSVTTR17.Website_Apartment.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/posts")

public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping()
    public List<Post> getAll(){
        return  postService.getAllPost();
    }

}
