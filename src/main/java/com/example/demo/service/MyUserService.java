package com.example.demo.service;





import com.example.demo.domain.User;

import java.util.List;
import java.util.Optional;


public interface MyUserService {
        List<User> getAllUsers();
        Optional<User> getUserById(long id);
        void createUser(User user);
        void deleteUser(long id);

}
