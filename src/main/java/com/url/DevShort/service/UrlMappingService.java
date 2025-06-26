package com.url.DevShort.service;

import com.url.DevShort.dtos.UrlMappingDTO;
import com.url.DevShort.models.UrlMapping;
import com.url.DevShort.models.User;
import com.url.DevShort.repository.UrlMappingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class UrlMappingService {
    @Autowired
    private UrlMappingRepository urlMappingRepository;

    public UrlMappingDTO createShortUrl(String originalUrl, User user) {
        String shortUrl=generateShortUrl();
        UrlMapping urlMapping=new UrlMapping();
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setShortUrl(shortUrl);
        urlMapping.setUser(user);
        urlMapping.setCreateDate(LocalDateTime.now());
        UrlMapping savedUrlMapping=urlMappingRepository.save(urlMapping);
        return convertTODto(savedUrlMapping);
    }

 private UrlMappingDTO convertTODto(UrlMapping urlMapping){
        UrlMappingDTO urlMappingDTO=new UrlMappingDTO();
        urlMappingDTO.setId(urlMapping.getId());
        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
        urlMappingDTO.setClickCount(urlMapping.getClickCount());
        urlMappingDTO.setCreatedDate(urlMapping.getCreateDate());
        urlMappingDTO.setUsername(urlMapping.getUser().getUsername());
        return urlMappingDTO;
 }

    private String generateShortUrl() {
        Random random=new Random();
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder shorturl=new StringBuilder(8);
        for(int i=0;i<8;i++){
            shorturl.append(characters.charAt(random.nextInt(characters.length())));
        }
        return shorturl.toString();
    }
}
