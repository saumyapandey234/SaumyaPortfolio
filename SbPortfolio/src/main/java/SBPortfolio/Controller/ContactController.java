package SBPortfolio.Controller;

import SBPortfolio.Entity.Contact;
import SBPortfolio.Repo.contactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ContactController {

  @Autowired
  private contactRepo contactRepo;

  @PostMapping("/contacts") // 👈 API endpoint
  public String saveContact(@RequestBody Contact contact) {
    contactRepo.save(contact);
    return "Saved Successfully";
  }
}
