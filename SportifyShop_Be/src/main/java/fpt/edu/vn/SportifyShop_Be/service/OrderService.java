package fpt.edu.vn.SportifyShop_Be.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import fpt.edu.vn.SportifyShop_Be.repository.OrderRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Object[]> getOrderDetails() {
        return orderRepository.getOrderDetails();
    }
}

