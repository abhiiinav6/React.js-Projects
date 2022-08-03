import React, { useEffect } from "react";
import { fetchPost, fetchUser } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import UserHeader from "./UserHeader"

function PostList() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  useEffect(() => {
    // fetchPost()
    dispatch(fetchPost())
  }, [])
  

  return (
    <div className="ui relaxed divided list">
      {
        posts.map(post => (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user"></i>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
          </div>
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
