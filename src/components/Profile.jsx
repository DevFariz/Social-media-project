import classes from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={classes.main}>
        <div>
          <img
            className={classes.content__img}
            src="https://lh3.googleusercontent.com/VDPp6VUWdRyP3NjQjIcKUJc8M58XLQBRqNcxAJ8ID0KRRCprBl4G-a1VLg6kdHKDJncxmxPnxZo9QGPuHUvCMBAni2VxQ0EjfSvlvQHE=w1000?s=300"
            alt=""
          />
        </div>
        <div className={classes.content}>
          <div>ava + desc</div>
          <div>My posts</div>
          <div>New post</div>
          <div className={classes.item}>Post1</div>
          <div className={classes.item}>Post2</div>
        </div>
      </div>
  );
};

export default Profile;
