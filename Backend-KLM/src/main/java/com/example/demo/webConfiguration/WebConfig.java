package com.example.demo.webConfiguration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry
                        .addMapping("/**")
                        .allowedMethods("OPTIONS", "GET", "PUT", "POST", "DELETE")
                        .allowedOrigins("*", "http://localhost:8085" ,"http://localhost:4200")
                        .allowedHeaders("*")
                        .allowCredentials(false);

            }
        };
    }
}
