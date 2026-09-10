package com.careercanvas.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.careercanvas.portfolio.entity.Skill;
import com.careercanvas.portfolio.repository.SkillRepository;

@Service
public class SkillService {

    private final SkillRepository skillRepository;

    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    public Skill saveSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    public Skill getSkillById(Long id) {
        return skillRepository.findById(id)
                .orElseThrow(() ->
                    new RuntimeException(
                        "Skill not found with id: " + id
                    )
                );
    }

    public void deleteSkill(Long id) {
        Skill skill = getSkillById(id);
        skillRepository.delete(skill);
    }
}