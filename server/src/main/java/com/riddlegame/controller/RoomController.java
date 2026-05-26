package com.riddlegame.controller;

import com.riddlegame.model.Room;
import com.riddlegame.model.User;
import com.riddlegame.repository.RoomRepository;
import com.riddlegame.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
@CrossOrigin("*")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    public Room createRoom(@RequestBody Room room) {
        return roomRepository.save(room);
    }

    @PostMapping("/join/{roomName}/{userId}")
    public String joinRoom(
            @PathVariable String roomName,
            @PathVariable Long userId,
            @RequestBody Room room
    ) {

        Room existing = roomRepository
                .findByRoomName(roomName)
                .orElse(null);

        if (existing == null) {
            return "Room Not Found";
        }

        if (!existing.getRoomPassword()
                .equals(room.getRoomPassword())) {

            return "Wrong Password";
        }

        User user = userRepository.findById(userId).orElse(null);

        if (user == null) {
            return "User Not Found";
        }

        existing.getPlayers().add(user);

        roomRepository.save(existing);

        return "Joined Successfully";
    }

    @GetMapping("/players/{roomName}")
    public List<User> getPlayers(
            @PathVariable String roomName
    ) {

        Room room = roomRepository
                .findByRoomName(roomName)
                .orElse(null);

        if (room == null) {
            return null;
        }

        return room.getPlayers();
    }
}