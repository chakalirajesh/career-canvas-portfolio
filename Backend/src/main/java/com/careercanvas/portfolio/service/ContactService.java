package com.careercanvas.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.careercanvas.portfolio.entity.ContactMessage;
import com.careercanvas.portfolio.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    // Create message
    public ContactMessage saveMessage(ContactMessage contactMessage) {
        return contactRepository.save(contactMessage);
    }

    // Get all messages
    public List<ContactMessage> getAllMessages() {
        return contactRepository.findAll();
    }

    // Get message by ID
    public ContactMessage getMessageById(Long id) {

        return contactRepository.findById(id)
                .orElseThrow(() ->
                    new RuntimeException(
                        "Message not found with id: " + id
                    )
                );
    }

    // Delete message
    public void deleteMessage(Long id) {

        ContactMessage contactMessage = getMessageById(id);

        contactRepository.delete(contactMessage);
    }
}