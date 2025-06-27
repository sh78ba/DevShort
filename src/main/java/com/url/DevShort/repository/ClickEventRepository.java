package com.url.DevShort.repository;

import com.url.DevShort.models.ClickEvent;
import com.url.DevShort.models.UrlMapping;
import com.url.DevShort.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface ClickEventRepository extends JpaRepository<ClickEvent,Long> {
    List<ClickEvent>findByUrlMappingAndClickDateBetween(UrlMapping mapping, LocalDateTime startDate,LocalDateTime endDate);
    List<ClickEvent>findByUrlMappingInAndClickDateBetween(List<UrlMapping> urlMappings, LocalDateTime startDate,LocalDateTime endDate);
}
