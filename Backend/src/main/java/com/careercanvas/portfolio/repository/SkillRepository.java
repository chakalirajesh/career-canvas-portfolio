package com.careercanvas.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.careercanvas.portfolio.entity.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long> {
}