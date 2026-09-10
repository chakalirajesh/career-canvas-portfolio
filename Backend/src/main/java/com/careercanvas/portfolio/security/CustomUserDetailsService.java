package com.careercanvas.portfolio.security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.careercanvas.portfolio.entity.AdminUser;
import com.careercanvas.portfolio.repository.AdminUserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AdminUserRepository adminUserRepository;

    public CustomUserDetailsService(AdminUserRepository adminUserRepository) {
        this.adminUserRepository = adminUserRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        AdminUser admin = adminUserRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("Admin not found")
                );

        return User.builder()
                .username(admin.getEmail())
                .password(admin.getPassword())
                .roles(admin.getRole())
                .build();
    }
}