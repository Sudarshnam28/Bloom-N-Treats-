package com.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Review {
	@Id @GeneratedValue
	private int id;
	private String feedBack;
	
	public Review() {}
	
	

	public Review(int id, String feedBack) {
		super();
		this.id = id;
		this.feedBack = feedBack;
	}



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getFeedBack() {
		return feedBack;
	}

	public void setFeedBack(String feedBack) {
		this.feedBack = feedBack;
	}

	@Override
	public String toString() {
		return "Review [id=" + id + ", feedBack=" + feedBack + "]";
	}
	
	
	
}
