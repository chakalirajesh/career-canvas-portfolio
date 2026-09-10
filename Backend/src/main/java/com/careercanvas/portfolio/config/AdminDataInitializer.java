package com.careercanvas.portfolio.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.careercanvas.portfolio.entity.AdminUser;
import com.careercanvas.portfolio.repository.AdminUserRepository;

@Configuration
public class AdminDataInitializer {

    @Bean
    CommandLineRunner createAdmin(
            AdminUserRepository repository,
            PasswordEncoder passwordEncoder) {

        return args -> {

            if (repository.findByEmail("admin@gmail.com").isEmpty()) {

                AdminUser admin = new AdminUser();

                admin.setEmail("admin@gmail.com");
                admin.setPassword(passwordEncoder.encode("Admin@123"));
                admin.setRole("ADMIN");

                repository.save(admin);

                System.out.println("ADMIN USER CREATED");
            }
        };
    }
}