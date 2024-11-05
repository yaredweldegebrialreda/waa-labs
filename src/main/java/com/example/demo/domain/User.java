package com.example.demo.domain;

import jakarta.persistence.*;
import org.springframework.context.annotation.Configuration;
import java.util.HashSet;
import java.util.Set;


@Entity
@Configuration
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    String name;
    public User(long id,String name) {
        this.id = id;
        this.name = name;

    }
    public User() {

    }

    @OneToMany
    @JoinColumn(name="user_id")
    private Set<Post> posts = new HashSet<>();


    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }


}