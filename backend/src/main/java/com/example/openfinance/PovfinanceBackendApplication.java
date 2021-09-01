package com.example.openfinance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.openfinance.model") // Explicitamente dizendo para escanear este pacote para
                                                            // entidades
public class PovfinanceBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PovfinanceBackendApplication.class, args);
    }
}
