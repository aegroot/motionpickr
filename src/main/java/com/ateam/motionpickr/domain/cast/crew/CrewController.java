package com.ateam.motionpickr.domain.cast.crew;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/v1/crew")
public class CrewController {

    @Autowired
    CrewRepository crewRepository;

}
