package com.riddlegame.websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GameSocketController {

    @MessageMapping("/play")
    @SendTo("/topic/game")
    public String play(String message) {
        return message;
    }
}