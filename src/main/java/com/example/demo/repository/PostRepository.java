// src/main/java/com/example/demo/repository/PostRepository.java
package com.example.demo.repository;

import com.example.demo.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface PostRepository extends JpaRepository<Post,Long> {

//    @Query("select p from Post p where p.title=:test")
//
//    List<Post> findByTitle(String title);
}
