package com.url.DevShort.dtos;

import lombok.Data;

import java.util.Set;

//@Data
//public class RegisterRequest {
//
//     private String username;
//     private String email;
//     private Set<String>role;
//     private String password;
//}


public class RegisterRequest {

     private String username;
     private String email;
     private Set<String> role;
     private String password;

     // Constructors
     public RegisterRequest() {}

     public RegisterRequest(String username, String email, Set<String> role, String password) {
          this.username = username;
          this.email = email;
          this.role = role;
          this.password = password;
     }

     // Getters
     public String getUsername() {
          return username;
     }

     public String getEmail() {
          return email;
     }

     public Set<String> getRole() {
          return role;
     }

     public String getPassword() {
          return password;
     }

     // Setters
     public void setUsername(String username) {
          this.username = username;
     }

     public void setEmail(String email) {
          this.email = email;
     }

     public void setRole(Set<String> role) {
          this.role = role;
     }

     public void setPassword(String password) {
          this.password = password;
     }
}
