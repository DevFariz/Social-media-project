import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.postsContainer}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="Hello John" likesCount="15" />
        <Post message="Hi David" likesCount="10" />
      </div>
    </div>
  );
};

export default MyPosts;
