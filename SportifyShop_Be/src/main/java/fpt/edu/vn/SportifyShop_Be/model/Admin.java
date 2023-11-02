package fpt.edu.vn.SportifyShop_Be.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id")
    private int adminID;

    @Column(name = "username" ,nullable = false)
    private String username;

    @Column(name = "password", columnDefinition = "varchar(255) not null")
    private  String password;

    @Column(name = "full_name", columnDefinition = "varchar(100) not null")
    private String fullName;

    @Column(name = "email", columnDefinition = "varchar(100)")
    private  String email;

    public Admin(String username, String password, String fullName, String email) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
    }

    public Admin() {
    }
}
