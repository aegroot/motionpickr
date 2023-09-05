package com.ateam.motionpickr.domain.auth;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("admin")
public class Admin extends Account{



}
