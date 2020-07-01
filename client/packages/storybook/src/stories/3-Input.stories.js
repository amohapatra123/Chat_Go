import React from "react";

import "../styles/index.css";
import "component/dist/main.css";
import { PaperInput } from "component";
export default {
  title: "Paper Kit Input",
  component: PaperInput,
};
export const Input = () => (
  <>
    <div className="row">
      <div className="col-md-3">
        <PaperInput input type="text" placeholder="Simple" />
      </div>
      <div className="col-md-3">
        <PaperInput input type="text" noborder placeholder="No Border" />
      </div>
      <div className="col-md-3">
        <PaperInput input type="text" disabled placeholder="Disabled" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <PaperInput
          input
          type="text"
          addon
          iconName="nc-group"
          placeholder="Group Addon"
        />
      </div>
      <div className="col-md-3">
        <PaperInput
          input
          type="text"
          noborder
          addon
          text="%"
          placeholder="No Border"
        />
      </div>
      <div className="col-md-3">
        <PaperInput
          input
          type="text"
          disabled
          addon
          iconName="nc-group"
          placeholder="Group Disabled"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <PaperInput input type="text" success placeholder="Success" />
      </div>
      <div className="col-md-3">
        <PaperInput
          input
          type="text"
          noborder
          success
          placeholder="Success with No Border"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <PaperInput input type="text" danger placeholder="Error" />
      </div>
      <div className="col-md-3">
        <PaperInput
          input
          type="text"
          noborder
          danger
          placeholder="Error with No Border"
        />
      </div>
    </div>
  </>
);
export const Checkbox = () => (
  <>
    <div className="row">
      <div className="col-md-3">
        <PaperInput Check text="Unchecked" />
      </div>
      <div className="col-md-3">
        <PaperInput Check defaultChecked text="Checked" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <PaperInput Check disabled text="Disabled Unchecked" />
      </div>
      <div className="col-md-3">
        <PaperInput Check disabled defaultChecked text="Disabled Checked" />
      </div>
    </div>
  </>
);
export const Radio = () => (
  <>
    <div className="row">
      <div className="col-md-3">
        <PaperInput Radio id="example1" name="one" text="Radio is off" />
      </div>
      <div className="col-md-3">
        <PaperInput
          Radio
          id="example2"
          name="two"
          defaultChecked
          text="Radio is on"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <PaperInput
          Radio
          id="3"
          disabled
          name="three"
          text="Off and Disabled"
        />
      </div>
      <div className="col-md-3">
        <PaperInput
          Radio
          id="4"
          name="four"
          disabled
          defaultChecked
          text="On and Disabled"
        />
      </div>
    </div>
  </>
);
export const Textarea = () => (
  <>
    <div className="row">
      <div className="col-md-4">
        <PaperInput
          Textarea
          maxLength={150}
          placeholder="This textarea is limited to 150 chatacters with default row=3"
        />
      </div>
      <div className="col-md-4">
        <PaperInput
          Textarea
          maxLength={150}
          row={8}
          placeholder="This textarea is limited to 150 chatacters with row=8"
        />
      </div>
    </div>
  </>
);
