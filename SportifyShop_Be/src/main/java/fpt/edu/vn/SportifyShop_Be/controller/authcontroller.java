package fpt.edu.vn.SportifyShop_Be.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fpt.edu.vn.SportifyShop_Be.model.Customer;
import fpt.edu.vn.SportifyShop_Be.model.LoginRequest;
import fpt.edu.vn.SportifyShop_Be.service.CustomerService;
@RestController
@RequestMapping("/api/auth")
public class authcontroller {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@RequestBody Customer customer) {
        // Implement the logic to register a customer
        // You can add validation and error handling as needed
        Customer registeredCustomer = customerService.registerCustomer(customer);
        return ResponseEntity.ok(registeredCustomer);
    }

    @PostMapping("/login")
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
