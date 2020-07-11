import React from "react";
import "../styles/index.css";
import "component/dist/main.css";
import "component/src/assets/css/paper-kit.css";
import { PaperSwitch } from "component";
export default {
  title: "Paper Kit Switch",
  component: PaperSwitch,
};
export const Switch = () => (
  <PaperSwitch onColor="warning" offColor="warning" defaultValue={false} />
);
export const SwitchWitchIcon = () => (
  <PaperSwitch
    onColor="success"
    onIcon="nc-simple-remove"
    offIcon="nc-check-2"
    offColor="success"
    defaultValue={false}
    icon
  />
);
