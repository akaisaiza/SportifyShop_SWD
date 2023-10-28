package fpt.edu.vn.SportifyShop_Be.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fpt.edu.vn.SportifyShop_Be.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}