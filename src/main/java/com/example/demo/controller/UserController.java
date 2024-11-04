package com.example.demo.controller;

import com.example.demo.domain.User;

import com.example.demo.service.MyUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    private final MyUserService myUserService;

   @Autowired
    public UserController( MyUserService myUserService) {
       this.myUserService = myUserService;

    }


    @GetMapping("/")


    public List<User> getAllUsers() {
        return myUserService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable long id) {
        Optional<User> user = myUserService.getUserById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        myUserService.createUser(user);
        return ResponseEntity.ok("User created successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable long id) {
        myUserService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }


}
