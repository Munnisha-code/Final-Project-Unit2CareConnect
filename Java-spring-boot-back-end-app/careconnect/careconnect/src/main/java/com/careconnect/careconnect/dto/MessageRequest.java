package com.careconnect.careconnect.dto;

import javax.xml.crypto.dsig.spec.XSLTTransformParameterSpec;

public class MessageRequest {

    private Long trustedContactId;
    private String messageText;

    public MessageRequest(){ }

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
}
