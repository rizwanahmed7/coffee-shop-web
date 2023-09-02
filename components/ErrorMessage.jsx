import { Field, getIn } from "formik";

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    class="text-danger"
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? error : null;
    }}
  />
);

export default ErrorMessage;
