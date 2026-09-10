package com.careercanvas.portfolio;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordTest {

    public static void main(String[] args) {

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String password = "Admin@123";

        String hash = encoder.encode(password);

        System.out.println(hash);
    }
}