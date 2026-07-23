package com.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Room")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Room {

	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double roomId;
    
    @Column(nullable = false)
    private Double roomNumber;
    private String roomType;
    private String floor;
    private String dailyCharge;
    private String status;
    
	
}
