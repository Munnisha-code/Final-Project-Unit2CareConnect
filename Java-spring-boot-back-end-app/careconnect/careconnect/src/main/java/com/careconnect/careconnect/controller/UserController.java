package com.careconnect.careconnect.controller;

import com.careconnect.careconnect.repository.UserRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/users")

public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){

        this.userRepository = userRepository;
    }
}
