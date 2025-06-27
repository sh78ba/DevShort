package com.url.DevShort.service;

import com.url.DevShort.dtos.ClickEventDto;
import com.url.DevShort.dtos.UrlMappingDTO;
import com.url.DevShort.models.ClickEvent;
import com.url.DevShort.models.UrlMapping;
import com.url.DevShort.models.User;
import com.url.DevShort.repository.ClickEventRepository;
import com.url.DevShort.repository.UrlMappingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class UrlMappingService {
    @Autowired
    private UrlMappingRepository urlMappingRepository;

    @Autowired
    private ClickEventRepository clickEventRepository;

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

    public List<UrlMappingDTO> getUrlsByUser(User user) {
        return urlMappingRepository.findByUser(user).stream().map(
                this::convertTODto
        ).toList();
    }

    public List<ClickEventDto> getClickEventsByDate(String shorturl, LocalDateTime start, LocalDateTime end) {
        UrlMapping urlMapping=urlMappingRepository.findByShortUrl(shorturl);
        if(urlMapping!=null){
          return clickEventRepository.findByUrlMappingAndClickDateBetween(urlMapping,start,end).stream().collect(
                  Collectors.groupingBy(click->click.getClickDate().toLocalDate(), Collectors.counting())
          ).entrySet().stream().map(entry->{
              ClickEventDto clickEventDto=new ClickEventDto();
              clickEventDto.setClickDate(entry.getKey());
              clickEventDto.setCount(entry.getValue());
              return clickEventDto;
          }).collect(Collectors.toList());

        }
        return null;
    }

    public Map<LocalDate, Long> getTotalClicksByUserAndDate(User user, LocalDate start, LocalDate end) {
        List<UrlMapping>urlMappings=urlMappingRepository.findByUser(user);
        List<ClickEvent>clickEvents=clickEventRepository.findByUrlMappingInAndClickDateBetween(urlMappings,start.atStartOfDay(),end.plusDays(1).atStartOfDay());
        return clickEvents.stream().collect(Collectors.groupingBy(click->
                click.getClickDate().toLocalDate(),Collectors.counting()));
    }

    public UrlMapping getOriginalUrl(String shorturl) {
        UrlMapping urlMapping=urlMappingRepository.findByShortUrl(shorturl);
        return  urlMapping;
    }
}
