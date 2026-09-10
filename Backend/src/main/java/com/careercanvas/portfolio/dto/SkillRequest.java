package com.careercanvas.portfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class SkillRequest {

    @NotBlank(message = "Skill name is required")
    private String name;

    @NotBlank(message = "Category is required")
    private String category;

    @NotBlank(message = "Level is required")
    private String level;

    public SkillRequest() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}