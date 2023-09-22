package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;



@Getter
@Setter
@Entity
@Table(name = "CustomerSession")
public class CustomerSession {
    @Id
    @Column(name = "session_id", columnDefinition = "varchar(36)")
    private String sessionID;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customerID;

    @Column(name = "login_time", columnDefinition = "timestamp default current_timestamp")
    private LocalDateTime loginTime;

    @Column(name = "logout_time", columnDefinition = "timestamp")
    private LocalDateTime logoutTime;

    public CustomerSession() {
    }

    public CustomerSession(String sessionID, Customer customerID, LocalDateTime loginTime, LocalDateTime logoutTime) {
        this.sessionID = sessionID;
        this.customerID = customerID;
        this.loginTime = loginTime;
        this.logoutTime = logoutTime;
    }
}
