package SBPortfolio.Repo;

import SBPortfolio.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface contactRepo extends JpaRepository<Contact, Long> {
}
