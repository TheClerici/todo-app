import React from "react";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    const clickHandler = () => {
        props.onClose()
    }

  return (
    <div>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <header className={classes.header}>
            <h3>
              {props.error} {props.status}
            </h3>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <button type="button" onClick={clickHandler}className={classes.button}>Okay</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
