import React from "react";
import { action } from "@storybook/addon-actions";

import "../styles/index.css";
import "component/dist/main.css";
import { PaperButton } from "component";
export default {
  title: "Paper Kit Button",
  component: PaperButton,
};

export const FlatButton = () => (
  <div className="row">
    <PaperButton
      onClick={action("Hey Welcome to component")}
      variant="link"
      text="Link Button"
    />

    <PaperButton
      color="warning"
      onClick={action("Delhi Duh!")}
      text="Capital Of India?"
    />
    <PaperButton
      color="success"
      variant="flat"
      outline
      onClick={action("Yeah I Do")}
      text="Like outline?"
    />
  </div>
);
export const RoundButton = () => (
  <div className="row">
    <PaperButton
      color="danger"
      variant="round-border"
      outline
      onClick={action("Hey Welcome to component")}
      text="Link Button"
    />

    <PaperButton
      color="warning"
      variant="round"
      animated
      onClick={action("Delhi Duh!")}
      text="Capital Of India?"
    />
    <PaperButton
      color="success"
      variant="round-border"
      outline
      onClick={action("Yeah I Do")}
      text="Like outline?"
    />
  </div>
);
export const IconOnlyButton = () => (
  <div className="row">
    <PaperButton variant="icon" onClick={action("Hey Welcome to component")} />

    <PaperButton
      color="warning"
      variant="icon"
      iconName="nc-setting-gear-65"
      text="Setting"
      onClick={action("Delhi Duh!")}
    />
    <PaperButton
      color="success"
      variant="icon"
      outline
      onClick={action("Yeah I Do")}
    />
  </div>
);
