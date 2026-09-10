package com.careercanvas.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.careercanvas.portfolio.entity.Certification;
import com.careercanvas.portfolio.repository.CertificationRepository;

@Service
public class CertificationService {

    private final CertificationRepository certificationRepository;

    public CertificationService(
            CertificationRepository certificationRepository) {

        this.certificationRepository = certificationRepository;
    }

    public Certification saveCertification(
            Certification certification) {

        return certificationRepository.save(certification);
    }

    public List<Certification> getAllCertifications() {

        return certificationRepository.findAll();
    }

    public Certification getCertificationById(Long id) {

        return certificationRepository.findById(id)
                .orElseThrow(() ->
                    new RuntimeException(
                        "Certification not found with id: " + id
                    )
                );
    }

    public void deleteCertification(Long id) {

        Certification certification =
                getCertificationById(id);

        certificationRepository.delete(certification);
    }
}