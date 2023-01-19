package com.c4c.challenge.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class MessageValidator implements ConstraintValidator<ValidMessageConstraint, String> {

    @Override
    public void initialize(ValidMessageConstraint messageConstraint) {

    }

    @Override
    public boolean isValid(String message, ConstraintValidatorContext context) {
        return message != null && message.length() > 0 && message.length() <= 128;
    }
}
