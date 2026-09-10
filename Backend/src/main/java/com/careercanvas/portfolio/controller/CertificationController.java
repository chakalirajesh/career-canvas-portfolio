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

import com.careercanvas.portfolio.entity.Certification;
import com.careercanvas.portfolio.service.CertificationService;

@RestController
@RequestMapping("/certifications")
public class CertificationController {

    private final CertificationService certificationService;

    public CertificationController(
            CertificationService certificationService) {

        this.certificationService = certificationService;
    }

    @PostMapping
    public Certification createCertification(
            @RequestBody Certification certification) {

        return certificationService.saveCertification(certification);
    }

    @GetMapping
    public List<Certification> getAllCertifications() {

        return certificationService.getAllCertifications();
    }

    @GetMapping("/{id}")
    public Certification getCertificationById(
            @PathVariable Long id) {

        return certificationService.getCertificationById(id);
    }

    @PutMapping("/{id}")
    public Certification updateCertification(
            @PathVariable Long id,
            @RequestBody Certification certification) {

        Certification existing =
                certificationService.getCertificationById(id);

        existing.setName(certification.getName());
        existing.setIssuer(certification.getIssuer());
        existing.setIssueDate(certification.getIssueDate());
        existing.setCredentialUrl(certification.getCredentialUrl());

        return certificationService.saveCertification(existing);
    }

    @DeleteMapping("/{id}")
    public void deleteCertification(
            @PathVariable Long id) {

        certificationService.deleteCertification(id);
    }
}