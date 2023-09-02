import React from "react";
import { Formik, Form, Field } from "formik";
import { createItem } from "../api/Items";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  price: Yup.number().min(0, "Must be positive number").required("Required"),
  tax_rate: Yup.number().min(0, "Must be positive number").required("Required"),
});

const INITIAL_VALUES = {
  name: "",
  price: "",
  tax_rate: "",
};

const NewItem = () => {
  let navigate = useNavigate();
  const handleSubmit = async (values) => {
    await createItem(values);

    navigate("/items");
  };
  return (
    <div className="container border d-flex justify-content-center rounded w-25 my-5">
      <Formik
        border
        initialValues={INITIAL_VALUES}
        validationSchema={ValidationSchema}
        onSubmit={(values, _actions) => {
          handleSubmit(values);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <h3>Add Item</h3>
            <Field
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
            />
            <ErrorMessage name={`name`} />
            <br />
            <Field
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
            />
            <ErrorMessage name={`price`} />
            <br />
            <Field
              type="number"
              name="tax_rate"
              className="form-control"
              placeholder="Tax Rate"
            />
            <ErrorMessage name={`tax_rate`} />
            <br />
            <Button type="submit" className="my-2" variant="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewItem;
