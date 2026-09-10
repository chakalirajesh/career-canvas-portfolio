package com.careercanvas.portfolio.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private final CustomUserDetailsService userDetailsService;

    public SecurityConfig(CustomUserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
            .csrf(csrf -> csrf.disable())

            .cors(cors -> {})

            .authorizeHttpRequests(auth -> auth

                // =========================
                // PUBLIC PORTFOLIO
                // =========================

                .requestMatchers(
                    HttpMethod.GET,
                    "/",
                    "/projects/**",
                    "/skills/**",
                    "/education/**",
                    "/experience/**",
                    "/certifications/**"
                ).permitAll()

                // =========================
                // PUBLIC CONTACT FORM
                // =========================

                .requestMatchers(
                    HttpMethod.POST,
                    "/contact"
                ).permitAll()

                // =========================
                // PUBLIC ADMIN LOGIN
                // =========================

                .requestMatchers("/auth/**").permitAll()

                // =========================
                // ADMIN CREATE
                // =========================

                .requestMatchers(
                    HttpMethod.POST,
                    "/projects/**",
                    "/skills/**",
                    "/education/**",
                    "/experience/**",
                    "/certifications/**"
                ).hasRole("ADMIN")

                // =========================
                // ADMIN UPDATE
                // =========================

                .requestMatchers(
                    HttpMethod.PUT,
                    "/projects/**",
                    "/skills/**",
                    "/education/**",
                    "/experience/**",
                    "/certifications/**"
                ).hasRole("ADMIN")

                // =========================
                // ADMIN DELETE
                // =========================

                .requestMatchers(
                    HttpMethod.DELETE,
                    "/projects/**",
                    "/skills/**",
                    "/education/**",
                    "/experience/**",
                    "/certifications/**"
                ).hasRole("ADMIN")

                // =========================
                // PRIVATE MESSAGES
                // =========================

                .requestMatchers(
                    HttpMethod.GET,
                    "/contact",
                    "/contact/**"
                ).hasRole("ADMIN")

                .requestMatchers(
                    HttpMethod.DELETE,
                    "/contact/**"
                ).hasRole("ADMIN")

                // =========================
                // ADMIN ROUTES
                // =========================

                .requestMatchers("/admin/**").hasRole("ADMIN")

                // =========================
                // EVERYTHING ELSE
                // =========================

                .anyRequest().authenticated()
            )

            .authenticationProvider(authenticationProvider());

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {

        DaoAuthenticationProvider provider =
                new DaoAuthenticationProvider(userDetailsService);

        provider.setPasswordEncoder(passwordEncoder());

        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration configuration)
            throws Exception {

        return configuration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }
}