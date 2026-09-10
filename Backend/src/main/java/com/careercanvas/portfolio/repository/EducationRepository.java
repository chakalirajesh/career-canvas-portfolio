package com.careercanvas.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.careercanvas.portfolio.entity.Education;

public interface EducationRepository
        extends JpaRepository<Education, Long> {
}