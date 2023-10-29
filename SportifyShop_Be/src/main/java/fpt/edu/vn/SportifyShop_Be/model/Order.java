package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.sql.Timestamp;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Getter
@Setter
@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private int orderID;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customerID;

    @Column(name = "order_date")
    private Timestamp orderDate;

    @Column(name = "status", columnDefinition = "varchar(50) not null")
    private String status;

    @OneToMany(mappedBy = "orderID")
    @JsonManagedReference
    private List<OrderDetail> orderDetails;
    public Order(Customer customerID, Timestamp orderDate, String status) {
        this.customerID = customerID;
        this.orderDate = orderDate;
        this.status = status;
    }

    public Order() {
    }
}
