import "./styles.css";

import React, { useState } from "react";

export default function LikeDislike() {
  const [likes, setLikes] = useState(100);
  const [dislikes, setDislikes] = useState(25);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);

  const likeHandler = () => {
    if (isLikeClicked) {
      setLikes((likes) => likes - 1);
      setIsLikeClicked(false);
    } else {
      setLikes((likes) => likes + 1);
      setIsLikeClicked(true);
    }
    if (isDislikeClicked) {
      setDislikes((dislikes) => dislikes - 1);
      setIsDislikeClicked(false);
    }
  };

  const dislikeHandler = () => {
    if (isDislikeClicked) {
      setDislikes((dislikes) => dislikes - 1);
      setIsDislikeClicked(false);
    } else {
      setDislikes((dislikes) => dislikes + 1);
      setIsDislikeClicked(true);
    }
    if (isLikeClicked) {
      setLikes((likes) => likes - 1);
      setIsLikeClicked(false);
    }
  };

  return (
    <div className="like-dislike-wrapper">
      <h2 className="component-title">Do you like this post?</h2>
      <div className="buttons-container">
        <button
          className={`like-button ${isLikeClicked ? "liked" : ""}`}
          onClick={likeHandler}
        >
          Like | <span className="likes-counter">{likes}</span>
        </button>

        <button
          className={`dislike-button ${isDislikeClicked ? "disliked" : ""}`}
          onClick={dislikeHandler}
        >
          Dislike | <span className="dislikes-counter">{dislikes}</span>
        </button>
      </div>
    </div>
  );
}
