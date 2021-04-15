package com.ItsFRZ.GMB.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "image_table")
public class ImageModel {

	public ImageModel() {
		super();
	}

	
	

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "type")
	private String type;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
	
	@Lob
	@Column(name = "picByte" , columnDefinition = "MEDIUMBLOB")
	private String picByte;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ImageModel(String name, String type, String picByte) {
		super();
		this.name = name;
		this.type = type;
		this.picByte = picByte;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPicByte() {
		return picByte;
	}

	public void setPicByte(String picByte) {
		this.picByte = picByte;
	}

	
	
	
}