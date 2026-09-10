package com.example.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class EcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
		System.out.println("E-commerce application started successfully!");
//		System.out.println(new BCryptPasswordEncoder().encode("123456"));
//		System.out.println(new BCryptPasswordEncoder().encode("admin123"));
	}

}
 