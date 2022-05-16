// import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messageElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
