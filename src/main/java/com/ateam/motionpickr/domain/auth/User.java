package com.ateam.motionpickr.domain.auth;

import com.ateam.motionpickr.domain.movie.Movie;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@DiscriminatorValue("user")
public class User extends Account{

    private String name,email;
    private char[] phoneNumber;

    //many to many with self
    @ManyToMany
    List<User> friends;

    //many to many
    @ManyToMany
    List<Movie>watchList;

    //many to many
    @ManyToMany
    List<Movie>likedMovies;

}
