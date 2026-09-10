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

import jakarta.validation.Valid;

import com.careercanvas.portfolio.dto.SkillRequest;
import com.careercanvas.portfolio.entity.Skill;
import com.careercanvas.portfolio.service.SkillService;

@RestController
@RequestMapping("/skills")
public class SkillController {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @PostMapping
    public Skill createSkill(
            @Valid @RequestBody SkillRequest request) {

        Skill skill = new Skill();

        skill.setName(request.getName());
        skill.setCategory(request.getCategory());
        skill.setLevel(request.getLevel());

        return skillService.saveSkill(skill);
    }

    @GetMapping
    public List<Skill> getAllSkills() {
        return skillService.getAllSkills();
    }

    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        return skillService.getSkillById(id);
    }

    @PutMapping("/{id}")
    public Skill updateSkill(
            @PathVariable Long id,
            @Valid @RequestBody SkillRequest request) {

        Skill skill = skillService.getSkillById(id);

        skill.setName(request.getName());
        skill.setCategory(request.getCategory());
        skill.setLevel(request.getLevel());

        return skillService.saveSkill(skill);
    }

    @DeleteMapping("/{id}")
    public void deleteSkill(@PathVariable Long id) {
        skillService.deleteSkill(id);
    }
}