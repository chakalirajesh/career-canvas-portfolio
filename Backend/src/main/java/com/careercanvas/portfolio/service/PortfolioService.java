package com.careercanvas.portfolio.service;

import org.springframework.stereotype.Service;

@Service
public class PortfolioService {

    public String getPortfolioMessage() {
        return "Welcome to my portfolio!";
    }
}