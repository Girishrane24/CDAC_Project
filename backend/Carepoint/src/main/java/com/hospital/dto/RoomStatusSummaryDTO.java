package com.hospital.dto;

import lombok.Data;

import java.util.List;

@Data
public class RoomStatusSummaryDTO {
    private long totalRooms;
    private long availableRooms;
    private long occupiedRooms;
    private long underMaintenanceRooms;
    private long cleaningNeededRooms;
    private long totalBeds;
    private long vacantBeds;
    private long occupiedBeds;
    
    public RoomStatusSummaryDTO()
    {
    	
    }

	public RoomStatusSummaryDTO(long totalRooms, long availableRooms, long occupiedRooms, long underMaintenanceRooms,
			long cleaningNeededRooms, long totalBeds, long vacantBeds, long occupiedBeds) {
		super();
		this.totalRooms = totalRooms;
		this.availableRooms = availableRooms;
		this.occupiedRooms = occupiedRooms;
		this.underMaintenanceRooms = underMaintenanceRooms;
		this.cleaningNeededRooms = cleaningNeededRooms;
		this.totalBeds = totalBeds;
		this.vacantBeds = vacantBeds;
		this.occupiedBeds = occupiedBeds;
	}

	public long getTotalRooms() {
		return totalRooms;
	}

	public void setTotalRooms(long totalRooms) {
		this.totalRooms = totalRooms;
	}

	public long getAvailableRooms() {
		return availableRooms;
	}

	public void setAvailableRooms(long availableRooms) {
		this.availableRooms = availableRooms;
	}

	public long getOccupiedRooms() {
		return occupiedRooms;
	}

	public void setOccupiedRooms(long occupiedRooms) {
		this.occupiedRooms = occupiedRooms;
	}

	public long getUnderMaintenanceRooms() {
		return underMaintenanceRooms;
	}

	public void setUnderMaintenanceRooms(long underMaintenanceRooms) {
		this.underMaintenanceRooms = underMaintenanceRooms;
	}

	public long getCleaningNeededRooms() {
		return cleaningNeededRooms;
	}

	public void setCleaningNeededRooms(long cleaningNeededRooms) {
		this.cleaningNeededRooms = cleaningNeededRooms;
	}

	public long getTotalBeds() {
		return totalBeds;
	}

	public void setTotalBeds(long totalBeds) {
		this.totalBeds = totalBeds;
	}

	public long getVacantBeds() {
		return vacantBeds;
	}

	public void setVacantBeds(long vacantBeds) {
		this.vacantBeds = vacantBeds;
	}

	public long getOccupiedBeds() {
		return occupiedBeds;
	}

	public void setOccupiedBeds(long occupiedBeds) {
		this.occupiedBeds = occupiedBeds;
	}
    
    
}