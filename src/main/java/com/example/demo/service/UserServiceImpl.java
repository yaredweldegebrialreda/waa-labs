package com.example.demo.service;



import com.example.demo.domain.Post;
import com.example.demo.domain.User;

import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    public Optional<User> getUserById(long id) {
        return userRepository.findById(id);
    }


    public void createUser(User user) {
        userRepository.save(user);
    }


    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }
    public void addPostToUser(Long userId, Post post) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        post.setUser(user);
        user.getPosts().add(post);

        userRepository.save(user);
    }

}
