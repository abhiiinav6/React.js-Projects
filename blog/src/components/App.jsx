import React from "react";
import PostList from "./PostList";

import { useDispatch, useSelector } from "react-redux";

function App() {


  return (
    <div className="ui container">
      <PostList />

     
    </div>
  );
}

export default App;
