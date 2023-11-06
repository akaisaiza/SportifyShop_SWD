package fpt.edu.vn.SportifyShop_Be.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

import fpt.edu.vn.SportifyShop_Be.model.CustomRequest;
import fpt.edu.vn.SportifyShop_Be.model.Customer;
import fpt.edu.vn.SportifyShop_Be.model.LoginRequest;
import fpt.edu.vn.SportifyShop_Be.service.CustomerService;
@RestController
@RequestMapping("/api/auth")
public class authcontroller {
    @Autowired
    private CustomerService customerService;

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> registerCustomer(@RequestBody CustomRequest customRequest) {
        // Create a new Customer object and map properties from CustomRequest
        Customer customer = new Customer();
        customer.setFirstName(customRequest.getFirstName());
        customer.setLastName(customRequest.getLastName());
        customer.setEmail(customRequest.getEmail());
        customer.setPhone(customRequest.getPhone());
        customer.setAddress(customRequest.getAddress());
        customer.setPassword(customRequest.getPassword());
        
        Customer registeredCustomer = customerService.registerCustomer(customer);
        
        if (registeredCustomer != null) {
            return ResponseEntity.ok(registeredCustomer);
        } else {
            // You can customize this part based on how you handle errors
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed");
        }
    }

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loginCustomer(@RequestBody LoginRequest loginRequest) {
        // Implement the logic to authenticate and log in a customer
        // You can add validation and error handling as needed
        Customer customer = customerService.loginCustomer(loginRequest.getEmail(), loginRequest.getPassword());
        if (customer != null) {
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
