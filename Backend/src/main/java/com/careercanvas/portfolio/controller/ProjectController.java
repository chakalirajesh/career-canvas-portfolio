package com.careercanvas.portfolio.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.validation.Valid;

import com.careercanvas.portfolio.dto.ProjectRequest;

import com.careercanvas.portfolio.entity.Project;
import com.careercanvas.portfolio.service.ProjectService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/projects")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    // CREATE
    @PostMapping
    public Project createProject(@Valid @RequestBody ProjectRequest request) {

        Project project = new Project();

        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setTechnologies(request.getTechnologies());
        project.setGithubUrl(request.getGithubUrl());
        project.setLiveUrl(request.getLiveUrl());

        return projectService.saveProject(project);
    }

    // READ ALL
    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    // READ ONE
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {

        return projectService.getProjectById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // UPDATE
    @PutMapping("/{id}")
    public Project updateProject(
            @PathVariable Long id,
            @RequestBody Project project) {

        return projectService.updateProject(id, project);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProject(@PathVariable Long id) {

        projectService.deleteProject(id);

        return ResponseEntity.ok("Project deleted successfully");
    }
}