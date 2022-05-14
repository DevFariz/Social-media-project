import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg"
          alt="avatar"
        />
        <span>{props.message}</span>
      </div>
      <div>
        <span>Likes {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
