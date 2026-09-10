package com.careercanvas.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.careercanvas.portfolio.entity.Experience;

public interface ExperienceRepository
        extends JpaRepository<Experience, Long> {
}