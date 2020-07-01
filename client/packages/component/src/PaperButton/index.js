import React from 'react';
import { Button } from 'reactstrap';

import PropTypes from 'prop-types';

function RenderClassName(type, animationType) {
  const variant = {
    link: 'btn-link',
    round: 'btn-just-icon',
    'round-border': 'btn-round btn-border'
  };
  const animationName = {
    'btn-magnify': 'btn-magnify',
    'btn-move-left': 'btn-move-left',
    'btn-move-right': 'btn-move-left',
    'btn-rotate': 'btn-rotate'
  };
  return animationType !== null
    ? `${variant[type]} ${animationName[animationType]}`
    : `${variant[type]}`;
}
export function PaperButton(props) {
  const {
    text,
    variant,
    onClick,
    color,
    iconName,
    animationName,
    social,
    size,
    animated,
    disabled,
    outline,
    styles
  } = props;

  return (
    <React.Fragment>
      <Button
        outline={outline}
        onClick={onClick}
        disabled={disabled}
        color={color}
        type='button'
        size={size}
        className={`${RenderClassName(`${variant}`, `${animationName}`)}`}
      >
        {text}
        {variant === 'round' && iconName && (
          <i className={`nc-icon ${iconName}`} />
        )}
        {variant === 'icon' && iconName && (
          <i className={`nc-icon ${iconName}`} />
        )}
      </Button>
    </React.Fragment>
  );
}

PaperButton.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['round', 'flat', 'icon', 'link', 'round-border'])
    .isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'default',
    'info',
    'danger',
    'warning',
    'neutral',
    'success'
  ]),
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  active: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  social: PropTypes.bool,
  animated: PropTypes.bool,
  iconName: PropTypes.string,
  animationName: PropTypes.string
};

PaperButton.defaultProps = {
  variant: 'flat',
  size: 'md',
  animationName: 'btn-magnify',
  outline: false,
  disabled: false,
  color: 'primary'
};
export default PaperButton;
