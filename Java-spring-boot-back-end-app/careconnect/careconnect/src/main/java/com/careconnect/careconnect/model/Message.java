package com.careconnect.careconnect.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;


@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Long trustedContactId;

    @Column(nullable = false)
    private String messageText;
    private String status;
    private LocalDateTime createdAt;

    public Message() { }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTrustedContactId() {
        return trustedContactId;
    }

    public void setTrustedContactId(Long trustedContactId) {
        this.trustedContactId = trustedContactId;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}



