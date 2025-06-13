package com.url.DevShort.controller;

import com.url.DevShort.dtos.RegisterRequest;
import com.url.DevShort.models.User;
import com.url.DevShort.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    @Autowired
    private UserService userService;
    @PostMapping("/public/register")
    public ResponseEntity<?>registerUser(@RequestBody RegisterRequest registerRequest){
    User user=new User();
    user.setUsername(registerRequest.getUsername());
    user.setEmail(registerRequest.getEmail());
    user.setPassword(registerRequest.getPassword());
    user.setRole("ROLE_USER");

    userService.registerUser(user);

    return ResponseEntity.ok("User Registered Successfully");

    }
}
