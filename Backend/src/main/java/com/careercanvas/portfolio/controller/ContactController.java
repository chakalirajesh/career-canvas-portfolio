package com.careercanvas.portfolio.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.careercanvas.portfolio.entity.ContactMessage;
import com.careercanvas.portfolio.service.ContactService;

@RestController
@RequestMapping("/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ContactMessage createMessage(
            @RequestBody ContactMessage contactMessage) {

        return contactService.saveMessage(contactMessage);
    }

    @GetMapping
    public List<ContactMessage> getAllMessages() {

        return contactService.getAllMessages();
    }

    @GetMapping("/{id}")
    public ContactMessage getMessageById(
            @PathVariable Long id) {

        return contactService.getMessageById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(
            @PathVariable Long id) {

        contactService.deleteMessage(id);
    }
}