package fpt.edu.vn.SportifyShop_Be.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fpt.edu.vn.SportifyShop_Be.model.Order;
import fpt.edu.vn.SportifyShop_Be.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // API để lấy thông tin tất cả đơn đặt hàng
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    // API để lấy thông tin đơn đặt hàng dựa trên ID
    @GetMapping("/{orderId}")
    public Order getOrderById(@PathVariable int orderId) {
        return orderService.getOrderById(orderId);
    }

    // API để tạo một đơn đặt hàng mới
    @PostMapping("/create")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order createdOrder = orderService.createOrder(order);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }

    // API để cập nhật thông tin đơn đặt hàng dựa trên ID
    @PutMapping("/{orderId}")
    public Order updateOrder(@PathVariable int orderId, @RequestBody Order order) {
        return orderService.updateOrder(orderId, order);
    }

    // API để xóa một đơn đặt hàng dựa trên ID
    @DeleteMapping("/{orderId}")
    public void deleteOrder(@PathVariable int orderId) {
        orderService.deleteOrder(orderId);
    }
}

