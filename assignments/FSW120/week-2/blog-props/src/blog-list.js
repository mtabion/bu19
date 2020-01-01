import React, { Component } from "react";
import "./blog-list.css";
import BlogPost from "./blog-post.js";

class BlogList extends Component {
  state = {};
  render() {
    return (
      <div className="blog-list">
        {this.props.posts.map(post => {
          return (
            <BlogPost
              title={post.title}
              subtitle={post.subTitle}
              author={post.author}
              date={post.date}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogList;
