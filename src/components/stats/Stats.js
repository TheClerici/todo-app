import React from "react";

import "./Stats.css";

const Stats = (props) => {
  return (
    <div className="stats">
      <div className="stats__avg">
        <label>Average time to finish All tasks:</label>
      </div>
      <div>
        <label>
          {props.items[0]} Minutes and {props.items[1]} Seconds.
        </label>
      </div>
      <label className="stats-box-1">Avg Low priority:</label>
      <div>
        <label className="stats-box-1">
          {props.items[2]} Min and {props.items[3]} Sec.
        </label>
      </div>
      <label className="stats-box-2">Avg Medium priority:</label>
      <div>
        <label className="stats-box-2">
          {props.items[4]} Min and {props.items[5]} Sec.
        </label>
      </div>
      <label className="stats-box-3">Avg High priority:</label>
      <div>
        <label className="stats-box-3">
          {props.items[6]} Min and {props.items[7]} Sec.
        </label>
      </div>
    </div>
  );
};

export default Stats;
