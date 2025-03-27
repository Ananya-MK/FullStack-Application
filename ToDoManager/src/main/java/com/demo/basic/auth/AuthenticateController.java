package com.demo.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
@RestController
public class AuthenticateController {

	
	
	@RequestMapping(method=RequestMethod.GET, path ="/basicAuth")
	public AuthenticateBean authenticat() {
		return new AuthenticateBean ("You are authenticated user!!");
	}
}
