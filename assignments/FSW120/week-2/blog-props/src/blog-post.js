import React, { Component } from "react";
import "./blog-post.css";

class BlogPost extends Component {
  state = {};
  render() {
    return (
      <div className="blog-post">
        <div className="title">{this.props.title}</div>
        <div className="subtitle">{this.props.subtitle}</div>
        <div className="author">{this.props.author}</div>
        <div className="date">{this.props.date}</div>
      </div>
    );
  }
}

export default BlogPost;
