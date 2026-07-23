package com.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Inventory")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Inventory {
	
	// create field name
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double itemId;
    
    @Column(name = "itemName",nullable = false)
    private String itemName;
    private String category;
    private Double unitPrice;
    private Double quantityinstock;
    private Double reorderLevel;
    private String supplier;
	
	
}
