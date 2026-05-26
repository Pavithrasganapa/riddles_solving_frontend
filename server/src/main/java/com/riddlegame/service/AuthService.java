package com.riddlegame.service;

import com.riddlegame.model.User;
import com.riddlegame.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService { 
    
    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User register(User user) {

        user.setPassword(encoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    public User login(String email, String password) {

    User user = userRepository.findByEmail(email);

    if(user != null &&
       user.getPassword().equals(password)) {

        return user;
    }

    return null;
}
}