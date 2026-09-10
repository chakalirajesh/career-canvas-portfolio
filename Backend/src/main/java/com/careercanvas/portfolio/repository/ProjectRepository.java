package com.careercanvas.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.careercanvas.portfolio.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}