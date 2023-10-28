package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class PaymentCustom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentCustomId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "method_id")
    private PaymentMethod method;

    // Getter và setter
}

