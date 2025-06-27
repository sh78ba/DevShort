package com.url.DevShort.controller;


import com.url.DevShort.dtos.ClickEventDto;
import com.url.DevShort.dtos.UrlMappingDTO;
import com.url.DevShort.models.User;
import com.url.DevShort.service.UrlMappingService;
import com.url.DevShort.service.UserService;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.buf.UEncoder;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/urls")
@AllArgsConstructor
public class UrlMappingController {
    private UrlMappingService urlMappingService;
    private UserService userService;

    @PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<UrlMappingDTO>createShortUrl(@RequestBody Map<String,String> request,
                                                       Principal principal){
        String originalUrl=request.get("originalUrl");
      User user= userService.findByUsername(principal.getName());

      UrlMappingDTO urlMappingDTO= urlMappingService.createShortUrl(originalUrl,user);
      return ResponseEntity.ok(urlMappingDTO);

    }

    @GetMapping("/myurls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UrlMappingDTO>>getUserUrls(Principal principal){
        User user=userService.findByUsername(principal.getName());
       List<UrlMappingDTO> urls= urlMappingService.getUrlsByUser(user);
       return ResponseEntity.ok(urls);
    }

    @GetMapping("/analytics/{shorturl}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<ClickEventDto>>getUrlAnalytics(@PathVariable String shorturl,
                                                              @RequestParam("startDate") String startDate,
                                                              @RequestParam("endDate") String endDate){

        DateTimeFormatter formatter=DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime start=LocalDateTime.parse(startDate,formatter);
        LocalDateTime end=LocalDateTime.parse(endDate,formatter);

        List<ClickEventDto>clickEventDtos= urlMappingService.getClickEventsByDate(shorturl,start,end);

        return ResponseEntity.ok(clickEventDtos);
    }

    @GetMapping("/totalclicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate,Long>>getTotalClicksByDate(Principal principal,
                                                                   @RequestParam("startDate") String startDate,
                                                                   @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter=DateTimeFormatter.ISO_LOCAL_DATE;
        User user=userService.findByUsername(principal.getName());
        LocalDate start=LocalDate.parse(startDate,formatter);
        LocalDate end=LocalDate.parse(endDate,formatter);
        Map<LocalDate,Long>totalClicks= urlMappingService.getTotalClicksByUserAndDate(user,start,end);
        return  ResponseEntity.ok(totalClicks);
    }
}
