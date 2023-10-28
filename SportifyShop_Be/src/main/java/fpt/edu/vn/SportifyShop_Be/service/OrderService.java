package fpt.edu.vn.SportifyShop_Be.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import fpt.edu.vn.SportifyShop_Be.model.Order;
import fpt.edu.vn.SportifyShop_Be.repository.OrderRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(int orderId) {
        Order order = orderRepository.findById(Long.valueOf(orderId)).orElse(null);

        if (order == null) {
            return null;
        }

        int orderIdAsInt = order.getOrderID();
        order.setOrderID(orderIdAsInt);
        return order;
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order updateOrder(int orderId, Order order) {
        // Kiểm tra xem đơn đặt hàng có tồn tại
        Order existingOrder = getOrderById(orderId);
        if (existingOrder == null) {
            return null;
        }

        // Cập nhật thông tin đơn đặt hàng
        existingOrder.setOrderDate(order.getOrderDate());
        existingOrder.setStatus(order.getStatus());
        return orderRepository.save(existingOrder);
    }

    public void deleteOrder(int orderId) {
        orderRepository.deleteById(Long.valueOf(orderId));
    }
}
