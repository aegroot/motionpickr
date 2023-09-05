package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.auth.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    //many to one
    @ManyToOne
            @JoinColumn(name = "movie_id")
    Movie movie;
    //many to one

    @ManyToOne
    @JoinColumn(name = "reviewer_id")
    User reviewer;
    String comment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
