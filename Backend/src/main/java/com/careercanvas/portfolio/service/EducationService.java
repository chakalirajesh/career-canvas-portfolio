package com.careercanvas.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.careercanvas.portfolio.entity.Education;
import com.careercanvas.portfolio.repository.EducationRepository;

@Service
public class EducationService {

    private final EducationRepository educationRepository;

    public EducationService(
            EducationRepository educationRepository) {

        this.educationRepository = educationRepository;
    }

    public Education saveEducation(Education education) {
        return educationRepository.save(education);
    }

    public List<Education> getAllEducation() {
        return educationRepository.findAll();
    }

    public Education getEducationById(Long id) {

        return educationRepository.findById(id)
                .orElseThrow(() ->
                    new RuntimeException(
                        "Education not found with id: " + id
                    )
                );
    }

    public void deleteEducation(Long id) {

        Education education =
                getEducationById(id);

        educationRepository.delete(education);
    }
}