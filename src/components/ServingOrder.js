import React from "react";

function ServingOrder(props) {
  return (
    <div className="serving">
      {/* <p className="highlight line-number"> {props.lineNumber + 1} </p> */}
      <div>
        <div
          id="glass"
          // style={{
          //   animation: "glass 5s infinite",
          // }}
        >
          <div id="beer">
            <span
              id="span"
              style={{
                animation: "beer 5s infinite",
              }}
            ></span>
          </div>
        </div>
        <div
          id="handle"
          // style={{
          //   animation: "handle 5s infinite",
          // }}
        ></div>
        <div id="bubble_1">
          <span id="bb"></span>
        </div>
        <div id="bubble_2">
          <span id="bb"></span>
        </div>
        <div id="bubble_3">
          <span id="bb"></span>
        </div>
        <div id="bubble_4">
          <span id="bb"></span>
        </div>
        <div id="bubble_5">
          <span id="bb"></span>
        </div>
        <div id="bubble_6">
          <span id="bb"></span>
        </div>
        <div id="bubble_7">
          <span id="bb"></span>
        </div>
        <div id="bubble_8">
          <span id="bb"></span>
        </div>
        <p className="order-number"> # {props.sevingOrder.id}</p>
      </div>
    </div>
  );
}

export default ServingOrder;
