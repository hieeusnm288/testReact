import React from "react";
import { useNavigate } from "react-router-dom";
import DetailPost from "../page/DetialPost";
function CardPost({ post }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card mt-3" onClick={() => navigate(`/${post.id}`)}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <DetailPost detail={post} />
      </div>
    </>
  );
}

export default CardPost;
