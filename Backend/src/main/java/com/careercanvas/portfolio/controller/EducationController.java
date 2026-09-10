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

import com.careercanvas.portfolio.entity.Education;
import com.careercanvas.portfolio.service.EducationService;

@RestController
@RequestMapping("/education")
public class EducationController {

    private final EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @PostMapping
    public Education createEducation(
            @RequestBody Education education) {

        return educationService.saveEducation(education);
    }

    @GetMapping
    public List<Education> getAllEducation() {

        return educationService.getAllEducation();
    }

    @GetMapping("/{id}")
    public Education getEducationById(
            @PathVariable Long id) {

        return educationService.getEducationById(id);
    }

    @PutMapping("/{id}")
    public Education updateEducation(
            @PathVariable Long id,
            @RequestBody Education education) {

        Education existing =
                educationService.getEducationById(id);

        existing.setDegree(education.getDegree());
        existing.setCollege(education.getCollege());
        existing.setBranch(education.getBranch());
        existing.setStartYear(education.getStartYear());
        existing.setEndYear(education.getEndYear());

        return educationService.saveEducation(existing);
    }

    @DeleteMapping("/{id}")
    public void deleteEducation(
            @PathVariable Long id) {

        educationService.deleteEducation(id);
    }
}