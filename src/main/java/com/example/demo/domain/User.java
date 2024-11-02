package com.example.demo.domain;

import jakarta.persistence.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.EnableTransactionManagement;


import java.util.HashSet;

import java.util.Set;


@Entity
@Configuration

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String name;
    public User(long id,String name) {
        this.id = id;
        this.name = name;

    }

    public User() {

    }


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)

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
