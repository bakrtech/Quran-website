import React from "react";

export default function Surah(props) {
  return (
    <>
      <div
        className="c1 card mx-3 my-3 "
        style={{
          paddingLeft: "3%",
          paddingTop: "3%",
          hover: { color: "green" },
        }}
        onClick={props.onClick}
      >
        <div className="card-title">
          <h5>
            <span style={{ fontStyle: "bold", marginRight: "2%" }}>
              {props.number}
            </span>
            {props.surah} ({props.arabicname})
          </h5>

          <div className="card-title">
            <p>{props.surahmean}</p>
          </div>
        </div>
      </div>
    </>
  );
}
