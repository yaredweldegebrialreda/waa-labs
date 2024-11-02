
package com.example.demo.service;

import com.example.demo.domain.Post;
import java.util.List;
import java.util.Optional;

public interface PostService {
    List<Post> getAllPosts();
    Optional<Post> getPostById(long id);
    void createPost(Post post);
    void deletePost(long id);
    void updatePost(long id, Post post);
}
