package com.ateam.motionpickr.domain.movie.review;


import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.ateam.motionpickr.security.user.User;
import com.ateam.motionpickr.security.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/review")
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("movie/{id}")
    public List<ReviewDto> getByMovie(@PathVariable long id){
        System.out.println(id);
        List<Review> reviewList=reviewRepository.findByMovie(movieRepository.findById(id).orElseThrow());
        return reviewList.stream().map(ReviewDto::toDto).toList();
    }
    @PostMapping("add")
    public void addMovie(@RequestBody ReviewDto reviewDto,@AuthenticationPrincipal UserDetails details){
        User user=userRepository.findByEmail(details.getUsername()).orElseThrow();
        Review dataReview=new Review();
        dataReview.setComment(reviewDto.getReview());
        dataReview.setMovie(movieRepository.findById(reviewDto.getMovieId()).orElseThrow());
        dataReview.setUser(userRepository.findByEmail(user.getEmail()).orElseThrow());
        dataReview.setScore(reviewDto.getScore());

        reviewRepository.save(dataReview);
    }
}
