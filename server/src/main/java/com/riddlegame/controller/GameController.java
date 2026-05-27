package com.riddlegame.controller;

import com.riddlegame.service.RiddleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/game")
@CrossOrigin("*")
public class GameController {

    @Autowired
    private RiddleService riddleService;

    @GetMapping("/riddles")
    public Object getRiddles() {
        return riddleService.getAllRiddles();
    }

    @PostMapping("/update-score/{userId}/{score}")
public User updateScore(
        @PathVariable Long userId,
        @PathVariable int score
) {

    User user = userRepository.findById(userId).orElse(null);

    if(user != null) {

        user.setScore(score);

        return userRepository.save(user);
    }

    return null;
}
}