package com.buga.boxes.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buga.boxes.logic.PermutationsOfString;
import com.buga.boxes.login.to.User;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RestfulController {
	
	private final Logger logger=LoggerFactory.getLogger(RestfulController.class);

	@RequestMapping("")
    public String defaultLanding() {
    	logger.info("defaultLanding");
        return "Hello world!";
    }
	
    @RequestMapping("ping")
    public String ping() {
    	logger.info("ping");
        return "Pong!";
    }
    
    @RequestMapping("users")
    public List<User> listUsers() {
    	logger.info("listUsers");
        return List.of(new User("user", "password", "s@buga.com", "8087520506"));
    }
    
    @RequestMapping("time")
    public long getTime() {
    	logger.info("getTime");
    	return System.currentTimeMillis();
    }

    @RequestMapping("delay")
    public long delayedResponse() {
    	logger.info("delayedResponse");
    	PermutationsOfString permutationsOfString=new PermutationsOfString("BUGABOXES");
    	permutationsOfString.generatePermutations();
    	return permutationsOfString.getCount();
    }
    
    @RequestMapping("delay/{string}")
    public long delayedResponse(@PathVariable("string") String s) {
    	logger.info("delayedResponse");
    	PermutationsOfString permutationsOfString=new PermutationsOfString(s);
    	permutationsOfString.generatePermutations();
    	return permutationsOfString.getCount();
    }
}