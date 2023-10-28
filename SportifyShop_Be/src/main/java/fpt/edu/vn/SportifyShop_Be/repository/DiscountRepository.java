package fpt.edu.vn.SportifyShop_Be.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fpt.edu.vn.SportifyShop_Be.model.Discount;

public interface DiscountRepository extends JpaRepository<Discount , Integer> {
    
}
