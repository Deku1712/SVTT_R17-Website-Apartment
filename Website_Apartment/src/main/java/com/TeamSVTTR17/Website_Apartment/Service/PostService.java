package com.TeamSVTTR17.Website_Apartment.Service;

import com.TeamSVTTR17.Website_Apartment.Entity.Post;
import com.TeamSVTTR17.Website_Apartment.Repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepo postRepo;

    public List<Post> getAllPost(){
        return postRepo.findAll();
    }

    public void updatePost(Post post){
        postRepo.save(post);

    }

}
