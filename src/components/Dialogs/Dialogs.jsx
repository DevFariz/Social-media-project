import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Ali" id="1" />
        <DialogItem name="Tofiq" id="2" />
        <DialogItem name="Natiq" id="3" />
        <DialogItem name="Fikret" id="4" />
        <DialogItem name="Namiq" id="5" />
        <DialogItem name="Elxan" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hello" />
        <Message message="Hi!" />
        <Message message="What are you doing" />
      </div>
    </div>
  );
};

export default Dialogs;
