package com.example.demo.service;
import com.example.demo.domain.Comment;
import java.util.List;
import java.util.Optional;

public interface CommentService {
    List<Comment> getAllComments ();
    Optional<Comment> getCommentById(long id);
    void createComment(Comment comment);
    void deleteComment(long id);
}
