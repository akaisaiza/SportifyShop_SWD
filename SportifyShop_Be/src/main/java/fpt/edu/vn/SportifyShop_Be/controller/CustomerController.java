package fpt.edu.vn.SportifyShop_Be.controller;

import org.springframework.beans.factory.annotation.Autowired;
import fpt.edu.vn.SportifyShop_Be.model.Customer;
import fpt.edu.vn.SportifyShop_Be.service.CustomerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    // API để tạo người dùng mới
    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }

    // API để lấy thông tin người dùng bằng ID
    @GetMapping("/{customerId}")
    public Customer getCustomerById(@PathVariable int customerId) {
        return customerService.getCustomerById(customerId);
    }

    // API để cập nhật thông tin người dùng
    @PutMapping("/{customerId}")
    public Customer updateCustomer(@PathVariable int customerId, @RequestBody Customer customer) {
        return customerService.updateCustomer(customerId, customer);
    }

    // API để xóa người dùng bằng ID
    @DeleteMapping("/{customerId}")
    public void deleteCustomer(@PathVariable int customerId) {
        customerService.deleteCustomer(customerId);
    }
}
