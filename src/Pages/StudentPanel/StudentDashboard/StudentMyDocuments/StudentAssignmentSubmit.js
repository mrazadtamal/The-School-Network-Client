import React from "react";
import "./STStyle.css";

import {AiFile}= "react-icons/ai"

const StudentAssignmentSubmit = () => {
  return (
    <>
      <div className="wapper">
        <header>Assignment Submit</header>
        <form id="form">
          <input id="image" type="file" hidden />
          <i className="fa fa-cloud-upload"></i>
          <p>Browser image upload</p>
        </form>
        <section id="progress_area" className="progress_area">
          <li className="row">
            <i className="fa fa-file"></i>
            <div className="content">
              <div className="details">
                <span className="name">dgdfsgfds</span>
                <span className="parsent">33532</span>
              </div>
              <div className="progress-bar">
                <div style={{ width: "20%" }} className="progress"></div>
              </div>
            </div>
          </li>
        </section>
        <section id="upload_area" className="upload_area">
          <li className="row">
            <div className="content">
              <i className="fa fa-file"></i>
              <div className="details">
                <span className="name">jgfef</span>
                <span className="size">223</span>
              </div>
            </div>
            <i className="fa fa-check"></i>
          </li>
        </section>
      </div>
    </>
  );
};

export default StudentAssignmentSubmit;
