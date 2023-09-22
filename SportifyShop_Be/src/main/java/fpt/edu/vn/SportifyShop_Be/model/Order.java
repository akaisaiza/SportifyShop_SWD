package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "[Order]")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private int orderID;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customerID;

    @Column(name = "order_date", columnDefinition = "timestamp default current_timestamp")
    private LocalDateTime orderDate;

    @Column(name = "status", columnDefinition = "varchar(50) not null")
    private String status;

    @OneToMany(mappedBy = "orderID")
    private List<OrderDetail> orderDetails;
    public Order(Customer customerID, LocalDateTime orderDate, String status) {
        this.customerID = customerID;
        this.orderDate = orderDate;
        this.status = status;
    }

    public Order() {
    }
}
