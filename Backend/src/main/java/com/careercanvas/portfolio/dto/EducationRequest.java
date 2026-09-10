package com.careercanvas.portfolio.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class EducationRequest {

    @NotBlank(message = "Degree is required")
    private String degree;

    @NotBlank(message = "College is required")
    private String college;

    @NotBlank(message = "Branch is required")
    private String branch;

    @NotNull(message = "Start year is required")
    private Integer startYear;

    @NotNull(message = "End year is required")
    private Integer endYear;

    public EducationRequest() {
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public Integer getStartYear() {
        return startYear;
    }

    public void setStartYear(Integer startYear) {
        this.startYear = startYear;
    }

    public Integer getEndYear() {
        return endYear;
    }

    public void setEndYear(Integer endYear) {
        this.endYear = endYear;
    }
}