package com.url.DevShort.service;

import com.url.DevShort.dtos.UrlMappingDTO;
import com.url.DevShort.models.UrlMapping;
import com.url.DevShort.models.User;
import com.url.DevShort.repository.UrlMappingRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UrlMappingService {
    private UrlMappingRepository urlMappingRepository;

    public UrlMappingDTO createShortUrl(String originalUrl, User user) {
        String shortUrl=generateShortUrl();
        UrlMapping urlMapping=new UrlMapping();
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setShortUrl(shortUrl);
        urlMapping.setUser(user);
        urlMapping.setCreateDate(LocalDateTime.now());
        UrlMapping savedUrlMapping=urlMappingRepository.save(urlMapping);
        return null;
    }



    private String generateShortUrl() {
        return "";
    }
}
