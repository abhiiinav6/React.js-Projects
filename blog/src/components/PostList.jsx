import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function PostList({}) {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
  useEffect(() => {
    // fetchPost()
    dispatch(fetchPost())
  }, [])
  console.log(posts);

  return (
    <div>
      <h1>PostList</h1>
      {
        posts.map(post=>(
          <li>{post.title}</li>
        ))
      }
    </div>
  );
}
// const mapStateToProps = state => ({ posts: state.posts })
// export default connect(mapStateToProps, {
//   fetchPost,
// })(PostList);

export default PostList
