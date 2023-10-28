package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name = "CustomerSession")
public class CustomerSession {
    @Id
    @Column(name = "session_id")
    private String sessionID;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customerID;

    @Column(name = "login_time")
    private String loginTime;

    @Column(name = "logout_time")
    private String logoutTime;

}
