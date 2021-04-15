package com.ItsFRZ.GMB.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ItsFRZ.GMB.Entity.EntityMedData;



@Repository
public interface GreenMedRepository extends JpaRepository<EntityMedData, Long> {

	@Query("select s from EntityMedData s where mname like %?1%")
	List<EntityMedData> findBymname(String mname);
	
	
//	@Query("select s from EntityMedData s where city like %?1%")
//	List<EntityMedData> findBycity(String city);
	
	Optional<EntityMedData> findById(Long id);
	
//	Optional<EntityMedData> findByName(String uname);
}
