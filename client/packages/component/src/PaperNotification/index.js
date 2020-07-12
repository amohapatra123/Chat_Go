import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UncontrolledAlert, Alert } from 'reactstrap';

const controled = ({ color, text }) => {
  return <Alert color={color}>{text}</Alert>;
};
const uncontroled = ({ color, text }) => {
  return <UncontrolledAlert color={color}>{text}</UncontrolledAlert>;
};
function renderComponent(props) {
  const { color, text, simple, dismiss } = props;
  if (simple) return controled(props);
  else if (dismiss) return uncontroled(props);
}
export function PaperNotification(props) {
  const { color, text, simple, dismiss } = props;
  return <React.Fragment>{renderComponent(props)}</React.Fragment>;
}
PaperNotification.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger'
  ]),
  text: PropTypes.string,
  simple: PropTypes.bool,
  dismiss: PropTypes.bool
};
PaperNotification.defaultProps = {
  color: 'warning'
};
export default PaperNotification;
