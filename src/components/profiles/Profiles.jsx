import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.scss";

/*supabase */
import supabase from "../../sevices/supabase";

function Profile() {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/registration");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPost.trim() !== "") {
      const post = {
        id: new Date().getTime(),
        content: newPost,
        user_id: 1, // replace with actual user ID
      };
      setPosts([...posts, post]);
      setNewPost("");
    }
  };

  const handleInputChange = (event) => {
    setNewPost(event.target.value);
  };

  return (
    <div className="profile__container">
      <div className="profile__header">
        <h2>My Profile</h2>
        <button className="logout__button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="post__form">
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
      </div>
      <div className="post__list">
        <h3>My Posts</h3>
        {posts.map((post) => (
          <div key={post.id} className="post__item">
            <h3>{post.content}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Profile };
