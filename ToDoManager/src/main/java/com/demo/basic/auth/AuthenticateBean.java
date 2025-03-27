package com.demo.basic.auth;

public class AuthenticateBean {
private String message;

public String getMessage() {
	return message;
}

public void setMessage(String message) {
	this.message = message;
}

public AuthenticateBean(String message) {
	super();
	this.message = message;
}


}
