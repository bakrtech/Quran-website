import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "green" }}>
            Alquran(Beta)
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                {props.isSurahview ? (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      props.setIsSurahview("false");
                    }}
                  >
                    Secondary
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
