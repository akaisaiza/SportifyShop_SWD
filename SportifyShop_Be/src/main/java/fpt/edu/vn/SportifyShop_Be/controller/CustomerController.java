package fpt.edu.vn.SportifyShop_Be.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fpt.edu.vn.SportifyShop_Be.model.Customer;
import fpt.edu.vn.SportifyShop_Be.model.Order;
import fpt.edu.vn.SportifyShop_Be.service.OrderService;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private OrderService orderService;

    // API để tạo đơn đặt hàng cho khách hàng
    @PostMapping("/{customerId}/orders")
    public ResponseEntity<Order> createOrderForCustomer(@PathVariable int customerId, @RequestBody Order order) {
        // Ở đây, bạn có thể kiểm tra xem khách hàng có tồn tại (dựa trên customerId) trước khi tạo đơn đặt hàng.
        // Nếu khách hàng không tồn tại, bạn có thể trả về một lỗi hoặc xử lý một cách phù hợp.
        // Sau đó, bạn có thể gán customerId cho đơn đặt hàng trước khi tạo đơn đặt hàng.
        order.setCustomerID(new Customer(customerId));

        Order createdOrder = orderService.createOrder(order);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }
}

