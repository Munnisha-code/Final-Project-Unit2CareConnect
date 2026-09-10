package com.careconnect.careconnect.controller;

import com.careconnect.careconnect.dto.LoginRequest;
import com.careconnect.careconnect.dto.LoginResponse;
import com.careconnect.careconnect.model.User;
import com.careconnect.careconnect.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin

public class AuthenticationController {

    private final UserRepository userRepository;

    public AuthenticationController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){

        User user = userRepository.findByEmail(request.getEmail()).orElse(null);

        if (user == null || !user.getPassword().equals(request.getPassword())) {

            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }

        LoginResponse response = new LoginResponse(user.getId(), user.getEmail(), "Login successful");

        return ResponseEntity.ok(response);

    }
}
