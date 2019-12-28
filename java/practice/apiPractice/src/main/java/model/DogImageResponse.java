package com.springDemo.apiPractice.model;

public class DogImageResponse {
    private String message;
    private String status;

    public DogImageResponse(){

    }
    public DogImageResponse(
        String message,
        String status
    ){
        this.message = message;
        this.status = status;
    }

    public String getMessage(){
        return this.message;
    }

    public String getStatus(){
        return this.status;
    }
}