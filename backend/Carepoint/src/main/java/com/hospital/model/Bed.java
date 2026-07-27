package com.hospital.model;


import com.hospital.model.enumm.BedStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bed {
    private String bedNumber;
    private BedStatus status = BedStatus.VACANT;
    private String currentOccupantId;
    
    public Bed()
    {}

	public Bed(String bedNumber, BedStatus status, String currentOccupantId) {
		super();
		this.bedNumber = bedNumber;
		this.status = status;
		this.currentOccupantId = currentOccupantId;
	}

	public String getBedNumber() {
		return bedNumber;
	}

	public void setBedNumber(String bedNumber) {
		this.bedNumber = bedNumber;
	}

	public BedStatus getStatus() {
		return status;
	}

	public void setStatus(BedStatus status) {
		this.status = status;
	}

	public String getCurrentOccupantId() {
		return currentOccupantId;
	}

	public void setCurrentOccupantId(String currentOccupantId) {
		this.currentOccupantId = currentOccupantId;
	}
    
    
}