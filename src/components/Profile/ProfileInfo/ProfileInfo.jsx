import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={classes.content__img}
        src="https://lh3.googleusercontent.com/VDPp6VUWdRyP3NjQjIcKUJc8M58XLQBRqNcxAJ8ID0KRRCprBl4G-a1VLg6kdHKDJncxmxPnxZo9QGPuHUvCMBAni2VxQ0EjfSvlvQHE=w1000?s=300"
        alt="intro"
      />
      <div className={classes.description}>
        Ava + desc
        </div>
    </div>
  );
};

export default ProfileInfo;
