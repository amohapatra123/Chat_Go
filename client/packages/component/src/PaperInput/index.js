import React from 'react';
import {
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label
} from 'reactstrap';
import PropTypes from 'prop-types';
const FormGroupClassname = (success, danger) =>
  (success && 'has-success') || (danger && 'has-danger');
const InputField = ({
  success,
  danger,
  noborder,
  disabled,
  defaultValue,
  handlechange,
  type,
  name,
  placeholder,
  addon,
  text,
  iconName
}) => {
  return (
    <FormGroup className={`${FormGroupClassname(success, danger)}`}>
      <InputGroup className={noborder && 'no-border'}>
        <Input
          disabled={disabled}
          defaultValue={defaultValue}
          type={type}
          name={name}
          placeholder={placeholder}
          className={noborder && 'no-border'}
          onChange={handlechange}
        />
        {addon === true && (
          <InputGroupAddon addonType='append'>
            <InputGroupText>
              {text}{' '}
              {iconName !== null && <i className={`nc-icon ${iconName}`} />}
            </InputGroupText>
          </InputGroupAddon>
        )}
      </InputGroup>
    </FormGroup>
  );
};
const CheckBox = ({ disabled, defaultChecked, text, name }) => {
  return (
    <FormGroup check>
      <div className={disabled ? 'form-check disabled' : 'form-check'}>
        <Label check>
          <Input
            disabled={disabled}
            defaultChecked={defaultChecked}
            name={name}
            type='checkbox'
          />
          {text}
          <span className='form-check-sign' />
        </Label>
      </div>
    </FormGroup>
  );
};
const RadioButton = ({
  disabled,
  defaultValue,
  id,
  name,
  defaultChecked,
  text
}) => {
  return (
    <FormGroup check>
      <div
        className={disabled ? 'form-check-radio disabled' : 'form-check-radio'}
      >
        <Label check>
          <Input
            defaultValue={defaultValue}
            id={id}
            name={name}
            defaultChecked={defaultChecked}
            disabled={disabled}
            type='radio'
          />
          {text} <span className='form-check-sign' />
        </Label>
      </div>
    </FormGroup>
  );
};
const TextArea = ({ maxLength, placeholder, row }) => {
  return (
    <FormGroup>
      <Input
        className='textarea-limited'
        maxLength={maxLength}
        placeholder={placeholder}
        name={name}
        rows={row}
        type='textarea'
      />
    </FormGroup>
  );
};
function ReanderComponent(props) {
  const {
    type,
    defaultValue,
    placeholder,
    handlechange,
    input,
    Check,
    Radio,
    Textarea,
    success,
    danger,
    noborder,
    addon,
    disabled,
    defaultChecked,
    iconName,
    text,
    id,
    name,
    maxLength,
    row
  } = props;
  if (input) return InputField(props);
  else if (Check) return CheckBox(props);
  else if (Radio) return RadioButton(props);
  else if (Textarea) return TextArea(props);
}
export function PaperInput(props) {
  const {
    type,
    defaultValue,
    placeholder,
    handlechange,
    input,
    Check,
    Radio,
    Textarea,
    success,
    danger,
    noborder,
    addon,
    disabled,
    defaultChecked,
    iconName,
    text,
    id,
    name,
    maxLength,
    row
  } = props;
  return <React.Fragment>{ReanderComponent(props)}</React.Fragment>;
}
PaperInput.propTypes = {
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  handlechange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  input: PropTypes.bool,
  Check: PropTypes.bool,
  Radio: PropTypes.bool,
  Textarea: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  noborder: PropTypes.bool,
  addon: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  iconName: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  row: PropTypes.number
};
PaperInput.defaultProps = {
  Check: false,
  Radio: false,
  Textarea: false,
  success: false,
  danger: false,
  noborder: false,
  addon: false,
  disabled: false,
  defaultChecked: false,
  maxLength: 150,
  row: 3
};
export default PaperInput;
