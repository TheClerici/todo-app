import React from "react";

import "./Stats.css";

const Stats = (props) => {
  return (
    <div className="stats">
      <div className="stats__avg">
        <label>Average time to finish All tasks:</label>
      </div>
      <div className="stats__stats">
        <label>
          {props.items[0]} Minutes and {props.items[1]} Seconds.
        </label>
      </div>
      <div className="stats-box-1">
        <label className="stats__avg">Avg Low priority:</label>
        <div>
          <label>
            {props.items[2]} Min and {props.items[3]} Sec.
          </label>
        </div>
      </div>
      <div className="stats-box-2">
        <label className="stats__avg">Avg Medium priority:</label>
        <div>
          <label>
            {props.items[4]} Min and {props.items[5]} Sec.
          </label>
        </div>
      </div>
      <div className="stats-box-3">
        <label className="stats__avg">Avg High priority:</label>
        <div>
          <label>
            {props.items[6]} Min and {props.items[7]} Sec.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Stats;
