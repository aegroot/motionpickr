package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.genre.Genre;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Movie {
    @Id
    @GeneratedValue
    Long id;

    private String title;

    @ManyToMany
    @JsonManagedReference
    @JoinTable(
            name = "movie_genres",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<Genre> genres = new HashSet<>();


    @Column(length = 2000)
    private String overview;
    @Column(length = 2000)
    private String tagline;
    private String posterLink;

    //    @Column()
    private double popularity;

    @JsonIgnore
    private int dataId;


    public Movie(String title, Set<Genre> genres, String overview, String tagline, String posterLink, double popularity, int dataId) {
        this.title = title;
        this.genres = genres;
        this.overview = overview;
        this.tagline = tagline;
        this.posterLink = posterLink;
        this.popularity = popularity;
        this.dataId = dataId;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", genres=" + genres +
                '}';
    }
}
