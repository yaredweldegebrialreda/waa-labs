
package com.example.demo.repository;

import com.example.demo.domain.Post;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class PostRepositoryImpl implements PostRepository {
    private List<Post> posts = new ArrayList<>();

    @Override
    public List<Post> findAll() {
        return posts;
    }

    @Override
    public Optional<Post> findById(long id) {
        return posts.stream().filter(post -> post.getId() == id).findFirst();
    }

    @Override
    public void save(Post post) {
        posts.add(post);
    }

    @Override
    public void deleteById(long id) {
        posts.removeIf(post -> post.getId() == id);
    }
}
