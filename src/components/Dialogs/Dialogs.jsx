import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={`${classes.dialog} ${classes.active}`}>Eli</div>
        <div className={classes.dialog}>Tofiq</div>
        <div className={classes.dialog}>Vaqif</div>
        <div className={classes.dialog}>Mamed</div>
        <div className={classes.dialog}>Lale</div>
        <div className={classes.dialog}>Nigar</div>
      </div>
      <div className={classes.messages}>
          <div className={classes.message}>Hello</div>
          <div className={classes.message}>Hi</div>
          <div className={classes.message}>Bye</div>
      </div>
    </div>
  );
};

export default Dialogs;
