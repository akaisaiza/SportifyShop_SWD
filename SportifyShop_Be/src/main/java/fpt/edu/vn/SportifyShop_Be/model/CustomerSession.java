package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

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

    @Column(name = "login_time", columnDefinition = "default current_timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp loginTime;

    @Column(name = "logout_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp logoutTime;
}
