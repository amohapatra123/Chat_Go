import React from 'react';
import Switch from 'react-bootstrap-switch';
import PropTypes from 'prop-types';

export const PaperSwitch = ({
  onColor,
  offColor,
  onIcon,
  offIcon,
  defaultValue,
  icon
}) => {
  return icon ? (
    <Switch
      onColor={onColor}
      offColor={offColor}
      onText={<i className={`nc-icon ${onIcon}`} />}
      offText={<i className={`nc-icon ${offIcon}`} />}
      defaultValue={defaultValue}
    />
  ) : (
    <Switch onColor={onColor} offColor={offColor} defaultValue={defaultValue} />
  );
};
PaperSwitch.propTypes = {
  onColor: PropTypes.oneOf([
    'primary',
    'default',
    'info',
    'danger',
    'warning',
    'neutral',
    'success'
  ]),
  offColor: PropTypes.oneOf([
    'primary',
    'default',
    'info',
    'danger',
    'warning',
    'neutral',
    'success'
  ]),
  onIcon: PropTypes.string,
  offIcon: PropTypes.string,
  defaultValue: PropTypes.bool,
  icon: PropTypes.bool
};
PaperSwitch.defaultProps = {
  defaultValue: false,
  icon: false
};
export default PaperSwitch;
