import React from "react";
import PropTypes from "prop-types";

const PostHeader = props => (
  <div className="post-head">
    <div className="div-img">
      <img src={props.avatar} />
    </div>
    <h3>{props.name}</h3>
    <span>{props.time}</span>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default PostHeader;
