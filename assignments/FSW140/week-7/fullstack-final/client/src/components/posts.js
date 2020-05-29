import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(false);

  function deletePost(postId) {
    axios.delete(`/posts/${postId}`).then((res) => {
      console.log(res);
      setPosts([]);
      getPosts();
    });
  }

  function getPosts() {
    fetch("/posts")
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        setPosts(json);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (token !== undefined) {
      const decoded = jwt_decode(token);

      setUserId(decoded.id);
    }

    getPosts();
  }, []);

  return (
    <div className="posts-wrapper">
      {posts.map((post, i) => {
        return (
          <div key={i} className="single-post-wrapper">
            <div className="date-wrapper">{post.created}</div>
            <div className="content-wrapper">{post.content}</div>
            {post.owner === userId ? (
              <button onClick={() => deletePost(post.id)}>Delete</button>
            ) : (
              " "
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
