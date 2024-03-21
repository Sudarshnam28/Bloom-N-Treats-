package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Customer {
	@Id@GeneratedValue
	private int id;
    private String name;
    private String gender;
    private String DOB;
    private long Mobile;
    private String userName;
    private String password;
   
	public Customer() {
		super();
		
	}
	public Customer(int id,String name, String gender, String dOB, long Mobile,String userName, String password) {
		super();
		this.id=id;
		this.name = name;
		this.gender = gender;
		this.DOB = dOB;
		this.Mobile=Mobile;
		this.userName = userName;
		this.password = password;
	
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDOB() {
		return DOB;
	}
	public void setDOB(String dOB) {
		this.DOB = dOB;
	}
	public long getMobile() {
		return Mobile;
	}
	public void setMobile(long mobile) {
		this.Mobile = mobile;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	@Override
	public String toString() {
		return "Customer [id=" + id + ",name=" + name + ", gender=" + gender + ", DOB=" + DOB + ",Mobile=" + Mobile + ", userName=" + userName
				+ ", password=" + password + "]";
	}
    
    
}
