import React from "react";
import "./BlogsBoxes.css";
import ChatIcon from "@material-ui/icons/Chat";

const BlogsBoxes = ({ imageURL, title, timestamp, comments, description }) => {
  return (
    <div className="blogsBoxes">
      <img src={imageURL} alt="" />
      <h2>{title}</h2>
      <div className="blogBoxes__timestamp">
        {timestamp} <span>Admin</span>
        <span className="blogBoxes__timestampIconField">
          <ChatIcon fontSize="small" style={{ marginRight: "3px" }} />
          {comments}
        </span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default BlogsBoxes;
