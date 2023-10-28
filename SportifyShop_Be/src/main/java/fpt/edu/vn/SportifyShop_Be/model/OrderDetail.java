package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "OrderDetail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_detail_id")
    private int orderDetailID;

    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    private Order orderID;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product productID;

    @Column(name = "quantity_ordered")
    private int quantityOrdered;

    @Column(name = "total_price")
    private BigDecimal totalPrice;


    public OrderDetail() {
    }

    public OrderDetail(Order orderID, Product productID, int quantityOrdered, BigDecimal totalPrice) {
        this.orderID = orderID;
        this.productID = productID;
        this.quantityOrdered = quantityOrdered;
        this.totalPrice = totalPrice;
    }
}
