import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.scss";

import { PostForm } from "./PostForm";
import { PostList } from "./PostList";

/*supabase */
import supabase from "../../sevices/supabase";

function Profile() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/registration");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const handleSubmit = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="profile__container">
      <div className="profile__header">
        <h2>My Profile</h2>
      </div>
      <PostForm onSubmit={handleSubmit} />
      <PostList posts={posts} />
      <div className="form__group__submit">
        <button className="logout__button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export { Profile };
