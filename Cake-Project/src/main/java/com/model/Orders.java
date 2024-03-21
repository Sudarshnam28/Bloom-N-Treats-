package com.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Orders {
	@Id
	@GeneratedValue
	private int id;
	private String fullName;
	private String mobile;
	private String doorNo;
	private String street;
	private String landMark;
	private String district;
	private String state;
	private String pinCode;
	

	public Orders() {
		super();
	}


	public Orders(int id, String fullName, String mobile, String doorNo, String street, String landMark,
			String district, String state, String pinCode) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.mobile = mobile;
		this.doorNo = doorNo;
		this.street = street;
		this.landMark = landMark;
		this.district = district;
		this.state = state;
		this.pinCode = pinCode;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getFullName() {
		return fullName;
	}


	public void setFullName(String fullName) {
		this.fullName = fullName;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getDoorNo() {
		return doorNo;
	}


	public void setDoorNo(String doorNo) {
		this.doorNo = doorNo;
	}


	public String getStreet() {
		return street;
	}


	public void setStreet(String street) {
		this.street = street;
	}


	public String getLandMark() {
		return landMark;
	}


	public void setLandMark(String landMark) {
		this.landMark = landMark;
	}


	public String getDistrict() {
		return district;
	}


	public void setDistrict(String district) {
		this.district = district;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getPinCode() {
		return pinCode;
	}


	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}


	@Override
	public String toString() {
		return "Orders [id=" + id + ", fullName=" + fullName + ", mobile=" + mobile + ", doorNo=" + doorNo + ", street="
				+ street + ", landMark=" + landMark + ", district=" + district + ", state=" + state + ", pinCode="
				+ pinCode + "]";
	}
	
	
   
	
	

}
