import React from "react";

import './Checkbox.css'

const Checkbox = (props) => {
  let checkedValue = (props.status === "done" ? true : false)

  const stateHandler = () => {
    props.onChangeStatus(props.id, props.status)
  };

  return (
      <input
        className="box"
        onChange={stateHandler}
        type="checkbox"
        checked={checkedValue}
      />
  );
};

export default Checkbox;