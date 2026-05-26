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

    @GetMapping("/leaderboard/{roomName}")
    public List<User> leaderboard(
        @PathVariable String roomName
    ) {

        Room room = roomRepository
            .findByRoomName(roomName)
            .orElse(null);

        if(room == null) {
            return null;
        }

        List<User> players = room.getPlayers();

            players.sort((a, b) ->
            Integer.compare(b.getScore(), a.getScore())
        );

    return players;
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