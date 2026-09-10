package com.careercanvas.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.careercanvas.portfolio.entity.ContactMessage;

public interface ContactRepository
        extends JpaRepository<ContactMessage, Long> {

}