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

  const dialogs = [
    {id: 1, name: "Ali"},
    {id: 2, name: "Tofiq"},
    {id: 3, name: "Natiq"},
    {id: 4, name: "Fikret"},
    {id: 5, name: "Namiq"},
    {id: 6, name: "Elxan"}
  ];

  const messages = [
    {id: 1, message: "Hello"},
    {id: 1, message: "Hi!"},
    {id: 1, message: "What are you doing"}
  ]

  const dialogElements = dialogs
  .map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

  const messageElements = messages
  .map(m => <Message message={m.message} /> )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogElements}
      </div>
      <div className={classes.messages}>
        {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
