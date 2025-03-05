// eslint-disable-next-line no-unused-vars
import styles from '../styles/visualInstagram.css';
import React from "react";
import { FaRegHeart , FaRegPaperPlane,FaRegBookmark} from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";


const InstagramPost = ({ username, imageSrc, caption }) => {
  return (
    <div className="post-container">
        <div className='notch'></div>
      <div className="post-header">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-info">
          <p className="username">{username}</p>
          <p className="post-type">Original content</p>
        </div>
        <span className="options">...</span>
      </div>
      <div className="post-image-container">
        {imageSrc ? (
          <img src={imageSrc} alt="Post" className="post-image" />
        ) : (
          <div className="no-image">
            <span className="icon">📷</span>
            <p>No Image</p>
          </div>
        )}
      </div>
      <div className="post-footer">
        <div className="post-icons">
            <div className='containerIcoInstagram'>
                <span><FaRegHeart /></span>
                <span><LuMessageCircle/></span>
                <span><FaRegPaperPlane /></span>
            </div>
        <span className="save-icon">
            <FaRegBookmark />
        </span>
        </div>
        <p className="post-caption">
          <span className="caption-username">{username} </span>
          {caption || "Your generated caption will appear here..."}
        </p>
      </div>
    </div>
  );
};

export default InstagramPost;
