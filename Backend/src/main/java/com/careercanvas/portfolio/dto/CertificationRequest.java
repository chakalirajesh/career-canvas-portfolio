package com.careercanvas.portfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class CertificationRequest {

    @NotBlank(message = "Certification name is required")
    private String name;

    @NotBlank(message = "Issuer is required")
    private String issuer;

    @NotBlank(message = "Issue date is required")
    private String issueDate;

    private String credentialUrl;

    public CertificationRequest() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public String getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(String issueDate) {
        this.issueDate = issueDate;
    }

    public String getCredentialUrl() {
        return credentialUrl;
    }

    public void setCredentialUrl(String credentialUrl) {
        this.credentialUrl = credentialUrl;
    }
}