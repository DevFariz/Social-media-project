import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let posts = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsContainer}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
