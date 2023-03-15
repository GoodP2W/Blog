import "./profile.scss";

import React from "react";

function PostList({ posts }) {
  return (
    <div className="post__list">
      <h3>My Posts</h3>
      {posts.map((post) => (
        <div key={post.id} className="post__item">
          <h3>{post.content}</h3>
        </div>
      ))}
    </div>
  );
}

export { PostList };
