package SBPortfolio.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;

import lombok.Setter;
import jakarta.persistence.*;
import jakarta.persistence.Entity;

@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "contacts")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String message;

    public Contact() {
    }

    // Getters and setters
}
