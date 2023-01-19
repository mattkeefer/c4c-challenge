package com.c4c.challenge.controller;

import com.c4c.challenge.model.Post;
import com.c4c.challenge.model.PostRepository;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostRepository postRepository;

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return postRepository.findAll(Sort.by(Direction.DESC, "timestamp"));
    }

    @PostMapping("/posts")
    @CrossOrigin
    public ResponseEntity<Post> createPost(@Valid @RequestBody Post post) {
        Post newPost = postRepository.save(post);
        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }
}
