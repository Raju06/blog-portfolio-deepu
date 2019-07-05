import React, { Component } from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

class BlogPostShort extends Component {
  render() {
    return (
      <div className="blog-container blog-container-short">
        <h1 style={{ borderTop: '3px solid black', borderBottom: '1px solid black', width: '100%', padding: '20px 0px', marginBottom: '20px', textAlign: 'center' }}>BLOG</h1>
        <div>
          <h1>CRISPR in agriculture: A boon or a bane?</h1>
          {/* <div className="meta-post">
            <div className="post-date">
              <b>Posted on:</b> <p>29-11-2018</p>
            </div>
            <div className="tags">
              <b>Tags:&emsp;</b>
              <Link to=''>CRISPR</Link>
            </div>
          </div> */}
          <p>
            The world today, largely driven by technology and innovation, is experiencing major changes as
  disruptive technologies like Clustered Regularly Interspaced Short Palindromic Repeats (CRISPR)-based
  gene editing have enabled scientists in academia and industries to address a wide range of problems in
  agriculture with relative ease.
          </p>
          <Link to={`/blog/crispr-in-agriculture`}>Read More</Link>
        </div>
      </div>
    );
  }
}

export default BlogPostShort;
