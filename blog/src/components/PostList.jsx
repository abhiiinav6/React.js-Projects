import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

function PostList() {
  return (
    <div>
      <h1>PostList</h1>
    </div>
  );
}

export default connect(null, {
  fetchPost,
})(PostList);
