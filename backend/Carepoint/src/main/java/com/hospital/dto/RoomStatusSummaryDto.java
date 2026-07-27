package com.hospital.dto;
/*
 * (Optional Data Transfer Object if you want to receive status counts directly from the backend API)
 */

public class RoomStatusSummaryDto {
    private long totalAvailable;
    private long totalOccupied;
    private long totalMaintenance;

    public RoomStatusSummaryDto(long totalAvailable, long totalOccupied, long totalMaintenance) {
        this.totalAvailable = totalAvailable;
        this.totalOccupied = totalOccupied;
        this.totalMaintenance = totalMaintenance;
    }

    
    // Getters and Setters
	public long getTotalAvailable() {
		return totalAvailable;
	}

	public void setTotalAvailable(long totalAvailable) {
		this.totalAvailable = totalAvailable;
	}

	public long getTotalOccupied() {
		return totalOccupied;
	}

	public void setTotalOccupied(long totalOccupied) {
		this.totalOccupied = totalOccupied;
	}

	public long getTotalMaintenance() {
		return totalMaintenance;
	}

	public void setTotalMaintenance(long totalMaintenance) {
		this.totalMaintenance = totalMaintenance;
	}

   
    
}