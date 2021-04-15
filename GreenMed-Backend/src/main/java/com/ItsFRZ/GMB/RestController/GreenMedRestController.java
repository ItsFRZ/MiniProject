package com.ItsFRZ.GMB.RestController;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Sort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ItsFRZ.GMB.Entity.EntityMedData;
import com.ItsFRZ.GMB.Entity.ImageModel;
import com.ItsFRZ.GMB.Repository.GreenMedRepository;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:4200")
public class GreenMedRestController {

	@Autowired
	private GreenMedRepository repository;

	// Insert Data
	@PostMapping("med")
	public String registerMedData(@RequestBody EntityMedData data)  {
		
		repository.save(data);
		return "" + data.getUploadedBy() + " contributed in Green Med campaign";
	}
	
	
	
//	System.out.println("Original Image Byte Size - " + file.getBytes().length);
//	ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
//			file.getBytes());
//	imageRepository.save(img);
//	return ResponseEntity.status(HttpStatus.OK);
	
	

	// Update by Id
	@PutMapping("med")
	public EntityMedData updateMedData(@RequestBody EntityMedData data) {

		
		return repository.save(data);
	}

	
	
	// Get by medicine name
	@GetMapping("med/{mname}")
	public List<EntityMedData> getAllDataByName(@PathVariable Optional<String> mname) {
		return repository.findBymname(mname.orElse("_"));
	}
	
	
	// Get by city name
//	@GetMapping("med/{city}")
//	public List<EntityMedData> getAllDataByCity(@PathVariable Optional<String> city) {
//		return repository.findBycity(city.orElse("_"));
//	}
		
		
	
	@GetMapping("med/p{id}")
	public Optional<EntityMedData> getMedDataById(@PathVariable Long id) {
		return repository.findById(id);
	}
	

	// Get All
	@GetMapping("med")
	public List<EntityMedData> getAllData() {
		return repository.findAll();
	}

	// Delete by Id
	@DeleteMapping("med/{id}")
	public void deleteMedData(@PathVariable("id") long id) {

		repository.deleteById(id);
	}
	
	
}
