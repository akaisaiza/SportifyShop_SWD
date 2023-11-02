package fpt.edu.vn.SportifyShop_Be.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fpt.edu.vn.SportifyShop_Be.model.Customer;
import fpt.edu.vn.SportifyShop_Be.repository.CustomerRepository;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public Customer registerCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer loginCustomer(String email, String password) {
        return customerRepository.findByEmail(email);
    }
    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer getCustomerById(int customerId) {
        // Thực hiện logic để lấy thông tin khách hàng bằng ID
        return customerRepository.findById(customerId).orElse(null);
    }

    public List<Customer> getAllCustomers() {
        // Thực hiện logic để lấy danh sách tất cả khách hàng
        return customerRepository.findAll();
    }

    public Customer updateCustomer(int customerId, Customer updatedCustomer) {
        // Thực hiện logic để cập nhật thông tin khách hàng với ID đã cho
        // Kiểm tra xem khách hàng có tồn tại không, sau đó cập nhật thông tin
        Customer existingCustomer = customerRepository.findById(customerId).orElse(null);
        if (existingCustomer != null) {
            // Cập nhật thông tin từ updatedCustomer vào existingCustomer
            // Lưu lại vào cơ sở dữ liệu và trả về khách hàng đã cập nhật
            // Bạn cần thực hiện các kiểm tra hợp lệ và xử lý ngoại lệ tùy theo yêu cầu của ứng dụng
        }
        return null;
    }

    public void deleteCustomer(int customerId) {
        // Thực hiện logic để xóa khách hàng với ID đã cho
        customerRepository.deleteById(customerId);
    }
}
