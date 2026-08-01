package com.hospital.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Component
public class JwtUtil {

    // Change this to a long random secret in production
    private static final String SECRET =
            "CarePointHospitalManagementSystemSecretKeyForJwtAuthentication2026";

    private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24 hours

    private final SecretKey secretKey = Keys.hmacShaKeyFor(SECRET.getBytes());

    /**
     * Generate JWT Token
     */
    public String generateToken(String email, String role) {

        return Jwts.builder()
                .setSubject(email)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }

    /**
     * Extract Email
     */
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    /**
     * Extract Role
     */
    public String extractRole(String token) {
        return extractAllClaims(token).get("role", String.class);
    }

    /**
     * Extract Expiration
     */
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    /**
     * Generic Claim Extractor
     */
    public <T> T extractClaim(String token,
                              Function<Claims, T> claimsResolver) {

        Claims claims = extractAllClaims(token);

        return claimsResolver.apply(claims);
    }

    /**
     * Extract All Claims
     */
    private Claims extractAllClaims(String token) {

        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    /**
     * Check Token Expired
     */
    public boolean isTokenExpired(String token) {

        return extractExpiration(token).before(new Date());
    }

    /**
     * Validate Token
     */
    public boolean validateToken(String token, String email) {

        final String username = extractUsername(token);

        return username.equals(email) && !isTokenExpired(token);
    }
}