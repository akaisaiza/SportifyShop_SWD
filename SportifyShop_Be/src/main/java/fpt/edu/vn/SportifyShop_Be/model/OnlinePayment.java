package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;
@Getter
@Setter
@Entity
@Table(name = "OnlinePayment")
public class OnlinePayment {
    @Id
    private int id;
    private Double amount;
    private String date;
    private Boolean status;
    @ManyToOne
    @JoinColumn(name = "method_id")
    private PaymentMethod method;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}