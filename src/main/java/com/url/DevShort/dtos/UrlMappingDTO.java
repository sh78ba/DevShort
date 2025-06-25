package com.url.DevShort.dtos;

import lombok.Data;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
public class UrlMappingDTO {
    private Long id;
    private String originalUrl;
    private String shortUrl;
    private  int clickCount;
    private LocalDateTime createdDate;
    private String username;
}
