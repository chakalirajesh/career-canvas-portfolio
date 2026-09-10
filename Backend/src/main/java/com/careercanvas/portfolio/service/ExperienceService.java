package com.careercanvas.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.careercanvas.portfolio.entity.Experience;
import com.careercanvas.portfolio.repository.ExperienceRepository;

@Service
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    public ExperienceService(
            ExperienceRepository experienceRepository) {

        this.experienceRepository = experienceRepository;
    }

    public Experience saveExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    public List<Experience> getAllExperience() {
        return experienceRepository.findAll();
    }

    public Experience getExperienceById(Long id) {

        return experienceRepository.findById(id)
                .orElseThrow(() ->
                    new RuntimeException(
                        "Experience not found with id: " + id
                    )
                );
    }

    public void deleteExperience(Long id) {

        Experience experience =
                getExperienceById(id);

        experienceRepository.delete(experience);
    }
}