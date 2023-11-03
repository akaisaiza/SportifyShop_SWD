package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Getter
@Setter
@Entity
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int productID;

    @Column(name = "product_name", columnDefinition = "varchar(255) not null")
    private String productName;

    @Column(name = "description", columnDefinition = "text")
    private String description;
    @Column(name = "urlImg", columnDefinition = "text")
    private String urlImg;
    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "quantity")
    private int quantity;

    @OneToMany(mappedBy = "productID")
    @JsonManagedReference
    private List<OrderDetail> orderDetails;

    public Product(String productName, String description,String urlImg, BigDecimal price, int quantity) {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.urlImg = urlImg;
    }

    public Product() {
    }
}
