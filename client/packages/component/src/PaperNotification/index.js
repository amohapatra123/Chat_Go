import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export function PaperNotification(props) {
  const { color, text } = props;
}
PaperInput.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger'
  ]),
  text: PropTypes.string
};
PaperInput.defaultProps = {};
export default PaperNotification;
