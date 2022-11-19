import React from "react";

const Checkbox = (props) => {
  let checkedValue = (props.status === "done" ? true : false)

  const stateHandler = () => {
    props.onChangeStatus(props.id, props.status)
  };

  return (
    <div>
      <input
        onChange={stateHandler}
        type="checkbox"
        checked={checkedValue}
      />
    </div>
  );
};

export default Checkbox;
