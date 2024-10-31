// src/main/java/com/example/demo/repository/PostRepository.java
package com.example.demo.repository;

import com.example.demo.domain.Post;
import java.util.List;
import java.util.Optional;

public interface PostRepository {
    List<Post> findAll();
    Optional<Post> findById(long id);
    void save(Post post);
    void deleteById(long id);
}
