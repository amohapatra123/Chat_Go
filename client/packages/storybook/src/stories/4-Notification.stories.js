import React, { useState } from "react";
import "../styles/index.css";
import "component/dist/main.css";
import "component/src/assets/css/paper-kit.css";
import { PaperNotification } from "component";
export default {
  title: "Paper Kit Notification",
  component: PaperNotification,
};

export const Controlled = () => (
  <>
    <div className="row">
      <div className="col-md-6">
        <PaperNotification
          color="primary"
          text="simple Notification"
          simple
        ></PaperNotification>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <PaperNotification
          color="success"
          text="simple Notification"
          simple
        ></PaperNotification>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <PaperNotification
          color="warning"
          text="simple Notification"
          simple
        ></PaperNotification>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <PaperNotification
          color="danger"
          text="simple Notification"
          simple
        ></PaperNotification>
      </div>
    </div>
  </>
);
export const Uncontrolled = () => (
  <>
    <div className="row">
      <div className="col-md-6">
        <PaperNotification
          color="primary"
          text="Dismisable Notification"
          dismiss
        ></PaperNotification>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <PaperNotification
          color="success"
          text="Dismisable Notification"
          dismiss
        ></PaperNotification>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <PaperNotification
          color="warning"
          text="Dismisible Notification"
          dismiss
        ></PaperNotification>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <PaperNotification
          color="danger"
          text="Dismisable Notification"
          dismiss
        ></PaperNotification>
      </div>
    </div>
  </>
);
