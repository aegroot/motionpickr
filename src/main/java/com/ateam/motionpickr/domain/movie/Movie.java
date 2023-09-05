package com.ateam.motionpickr.domain.movie;

import jakarta.persistence.*;
import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private String director,title;
    private Date releaseDate;
    @ManyToMany
    private List<Actor> actorList;
    @ManyToMany
    private List<Genre>genreList;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
