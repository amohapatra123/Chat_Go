import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export function PaperNotification(props) {
  const { color, text, isOpen, toogle, fade } = props;
  return (
    <React.Fragment>
      <Alert color={color} isOpen={isOpen} toogle={toogle} fade={fade}>
        {text}
      </Alert>
    </React.Fragment>
  );
}
PaperInput.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger'
  ]),
  text: PropTypes.string,
  isOpen: PropTypes.bool,
  toogle: PropTypes.func,
  fade: PropTypes.bool
};
PaperInput.defaultProps = {
  color: 'warning',
  isOpen: true,
  fade: true
};
export default PaperNotification;
