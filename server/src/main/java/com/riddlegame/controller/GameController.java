package com.riddlegame.controller;

import com.riddlegame.service.RiddleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/game")
@CrossOrigin("http://localhost:5173")
public class GameController {

    @Autowired
    private RiddleService riddleService;

    @GetMapping("/riddles")
    public Object getRiddles() {
        return riddleService.getAllRiddles();
    }
}