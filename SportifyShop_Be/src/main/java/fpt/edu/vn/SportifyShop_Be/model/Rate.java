package fpt.edu.vn.SportifyShop_Be.model;

import lombok.*;
import jakarta.persistence.*;
@Getter
@Setter
@Entity
@Table(name = "Rate")
public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rate_id;
    private Double number_Star;
    private String comment;
    private String date_rate;
    @ManyToOne
    @JoinColumn(name = "OrderId")
    private Order order;
}
