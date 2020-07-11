import { emailRegex, passRegex } from "./regex";

export function handlechange(name, value, formErrors, password) {
  const error = {
    name:
      value.length < 3 && value.length > 0
        ? "Minimum 3 characters required"
        : value.length > 20
        ? "Maximum 20 characters required"
        : "",
    email:
      emailRegex.test(value) && value.length > 0 ? "" : "Invalid email address",
    phone:
      value.length < 10
        ? "Phone Number should have 10 digits"
        : value.length > 10
        ? "Phone Number should not more than 10 digits"
        : "",
    password:
      passRegex.test(value) && value.length > 8
        ? ""
        : "Password must be alphanumeric with atleast one special character and should have atleast 8 characters",
    password2: value === password ? "" : "The passwords donot match",
  };
  formErrors[name] = error[name];
}
export const handledanger = (name, formErrors) => {
  return formErrors[name].length > 0 ? true : false;
};
export const handlesuccess = (name, formErrors) => {
  return formErrors[name].length === 0 ? true : false;
};
