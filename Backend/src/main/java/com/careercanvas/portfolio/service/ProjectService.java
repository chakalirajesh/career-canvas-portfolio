package com.careercanvas.portfolio.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.careercanvas.portfolio.entity.Project;
import com.careercanvas.portfolio.repository.ProjectRepository;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    // Create
    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    // Read all
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Read one
    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    // Update
    public Project updateProject(Long id, Project updatedProject) {

        Project existingProject = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));

        existingProject.setTitle(updatedProject.getTitle());
        existingProject.setDescription(updatedProject.getDescription());
        existingProject.setTechnologies(updatedProject.getTechnologies());
        existingProject.setGithubUrl(updatedProject.getGithubUrl());
        existingProject.setLiveUrl(updatedProject.getLiveUrl());

        return projectRepository.save(existingProject);
    }

    // Delete
    public void deleteProject(Long id) {

        if (!projectRepository.existsById(id)) {
            throw new RuntimeException("Project not found with id: " + id);
        }

        projectRepository.deleteById(id);
    }
}