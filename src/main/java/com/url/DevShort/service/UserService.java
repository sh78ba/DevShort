package com.url.DevShort.service;

import com.url.DevShort.dtos.LoginRequest;
import com.url.DevShort.models.User;
import com.url.DevShort.repository.UserRepository;
import com.url.DevShort.security.jwt.JwtAuthenticationResponse;
import com.url.DevShort.security.jwt.JwtUtils;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

//@Service
//public class UserService {
//
//    private final PasswordEncoder passwordEncoder;
//    private final UserRepository userRepository;
//
//    private AuthenticationManager authenticationManager;
//    private JwtUtils jwtUtils;
//
//    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository) {
//        this.passwordEncoder = passwordEncoder;
//        this.userRepository = userRepository;
//    }
//
//    public User registerUser(User user){
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userRepository.save(user);
//    }
//
//    public JwtAuthenticationResponse authenticatedUser(LoginRequest loginRequest){
//        Authentication authentication=authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),loginRequest.getPassword()));
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        UserDetailsImpl userDetails= (UserDetailsImpl) authentication.getPrincipal();
//        String jwt=jwtUtils.generateToken(userDetails);
//        return  new JwtAuthenticationResponse(jwt);
//    }
//}
//

@Service
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public UserService(PasswordEncoder passwordEncoder,
                       UserRepository userRepository,
                       AuthenticationManager authenticationManager,
                       JwtUtils jwtUtils) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    public User registerUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public JwtAuthenticationResponse authenticatedUser(LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String jwt = jwtUtils.generateToken(userDetails);
        return new JwtAuthenticationResponse(jwt);
    }
}
