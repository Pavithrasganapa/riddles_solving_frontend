package com.riddlegame.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RiddleService {

    private List<Map<String, String>> riddles = new ArrayList<>();

    public RiddleService() {

        addRiddle("What has keys but can't open locks?", "keyboard");
        addRiddle("What has hands but cannot clap?", "clock");
        addRiddle("What gets wetter while drying?", "towel");
        addRiddle("What has one eye but cannot see?", "needle");
    }
    private void addRiddle(String q, String a) {

        Map<String, String> map = new HashMap<>();
        map.put("question", q);
        map.put("answer", a);

        riddles.add(map);
    }

    public List<Map<String, String>> getAllRiddles() {
        return riddles;
    }
}