import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hello John", likesCount: 15 },
    { id: 2, message: "Hi David", likesCount: 10 },
  ];

  let posts = postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={classes.postsContainer}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;