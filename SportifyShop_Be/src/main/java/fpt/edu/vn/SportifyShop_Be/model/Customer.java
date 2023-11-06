package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Getter
@Setter
@Entity
@Table(name = "Customer", uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
@JsonIgnoreProperties(ignoreUnknown = true) // Ignore unknown fields in JSON

public class Customer {
    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerID;

    @Column(name = "first_name", columnDefinition = "varchar(50)")
    private String firstName;

    @Column(name = "last_name", columnDefinition = "varchar(50)")
    private String lastName;

    @Column(name = "email", columnDefinition = "varchar(100)")
    private String email;

    @Column(name = "phone", columnDefinition = "varchar(15)")
    private String phone;

    @Column(name = "address", columnDefinition = "text")
    private String address;

    @Column(name = "password", columnDefinition = "varchar(255) not null")
    private String password;

    @OneToMany(mappedBy = "customerID")
    @JsonManagedReference
    private List<Order> orders;

    @OneToMany(mappedBy = "customerID")
    @JsonManagedReference
    private List<CustomerSession> customerSessions;
    public Customer(String firstName, String lastName, String email, String phone, String address, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.password = password;
    }

    public Customer() {
    }

    public Customer(int customerId2) {
    }

   


}
