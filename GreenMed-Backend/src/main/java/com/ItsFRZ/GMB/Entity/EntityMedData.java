package com.ItsFRZ.GMB.Entity;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ItsFRZ.GMB.Repository.GreenMedRepository;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "medData")
@NoArgsConstructor
@Getter
@Setter
public class EntityMedData {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	
	@Column(name = "medName")
	private String mname;
	
	@Column(name = "expDate")
	private String expDate;
	
	@Column(name = "uploadedBy")
	private String uploadedBy;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "city")
	private String city;

	
	@Column(name = "description")
	private String description;
	



	
	
	
	
}
