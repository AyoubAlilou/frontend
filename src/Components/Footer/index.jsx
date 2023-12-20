import React from "react";
import "./index.scss";
export default function Footer() {
  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Wind donation app </h5>
        <p className="card-text">
          This application is builded to help peoples who's need equipements or
          any other objects useful for poor peoples and associations .
        </p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
}
