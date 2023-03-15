import "./profile.scss";

import React, { useState } from "react";

function PostForm({ onSubmit }) {
  const [newPost, setNewPost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPost.trim() !== "") {
      onSubmit(newPost);
      setNewPost("");
    }
  };

  const handleInputChange = (event) => {
    setNewPost(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="post">Write something...</label>
        <textarea
          id="post"
          className="form__control"
          value={newPost}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__group__submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export { PostForm };
