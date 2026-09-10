package com.careercanvas.portfolio.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.careercanvas.portfolio.entity.Experience;
import com.careercanvas.portfolio.service.ExperienceService;

@RestController
@RequestMapping("/experience")
public class ExperienceController {

    private final ExperienceService experienceService;

    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @PostMapping
    public Experience createExperience(
            @RequestBody Experience experience) {

        return experienceService.saveExperience(experience);
    }

    @GetMapping
    public List<Experience> getAllExperience() {

        return experienceService.getAllExperience();
    }

    @GetMapping("/{id}")
    public Experience getExperienceById(
            @PathVariable Long id) {

        return experienceService.getExperienceById(id);
    }

    @PutMapping("/{id}")
    public Experience updateExperience(
            @PathVariable Long id,
            @RequestBody Experience experience) {

        Experience existing =
                experienceService.getExperienceById(id);

        existing.setCompany(experience.getCompany());
        existing.setRole(experience.getRole());
        existing.setDescription(experience.getDescription());
        existing.setStartDate(experience.getStartDate());
        existing.setEndDate(experience.getEndDate());

        return experienceService.saveExperience(existing);
    }

    @DeleteMapping("/{id}")
    public void deleteExperience(
            @PathVariable Long id) {

        experienceService.deleteExperience(id);
    }
}