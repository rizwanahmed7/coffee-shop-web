import { Formik, Field, Form, FieldArray } from "formik";
import { useEffect, useState } from "react";
import { getItems } from "../api/Items";
import { createOrder } from "../api/Order";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import OrderDetail from "./OrderDetail";

const INITIAL_VALUES = {
  customer: { name: "", email: "" },

  order_items: [
    {
      item_id: "",
      quantity: "",
    },
  ],
};

const schema = Yup.object().shape({
  order_items: Yup.array()
    .of(
      Yup.object().shape({
        item_id: Yup.string().required("Required"),
        quantity: Yup.number()
          .min(1, "Item Must be 1 or greater than 1")
          .required("Required"),
      })
    )
    .required("Must have Item")
    .min(1, "Minimum 1 item"),
  customer: Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
  }),
});

const Order = () => {
  const [items, setItems] = useState([]);
  const [loadModal, setModal] = useState(false);
  const [orderDetail, setOrderDetail] = useState({});

  useEffect(() => {
    getItems().then((response) => setItems(response));
  }, []);

  const options =
    items &&
    items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));

  return (
    <div class="container w-50">
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={schema}
        onSubmit={async (values) => {
          createOrder(values).then((response) => {
            setOrderDetail(response);
            setModal(!loadModal);
          });
        }}
      >
        {({ values }) => (
          <Form>
            <div class="border rounded my-2 p-2">
              <h3>Customer Detail</h3>
              <div class="row">
                <div class="col">
                  <Field
                    name="customer.name"
                    type="text"
                    class="form-control"
                    placeholder="Name"
                  />
                  <ErrorMessage name={`customer.name`} />
                </div>

                <div class="col">
                  <Field
                    name="customer.email"
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                  <ErrorMessage name={`customer.email`} />
                </div>
              </div>
            </div>
            <h3>Select Items</h3>
            <FieldArray name="order_items">
              {({ insert, remove, push }) => (
                <div class="border rounded">
                  {values.order_items.length > 0 &&
                    values.order_items.map((friend, index) => (
                      <div
                        className="d-flex justify-content-between my-2 p-2"
                        key={index}
                      >
                        <div>
                          <Field
                            as="select"
                            name={`order_items.${index}.item_id`}
                            type="text"
                            class="form-control"
                          >
                            {options}
                          </Field>
                          <ErrorMessage name={`order_items.${index}.item_id`} />
                        </div>
                        <div>
                          <Field
                            name={`order_items.${index}.quantity`}
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                          />
                          <ErrorMessage
                            name={`order_items.${index}.quantity`}
                          />
                        </div>

                        <div>
                          <Button
                            type="button"
                            className="secondary"
                            variant="danger"
                            onClick={() => remove(index)}
                          >
                            Remove Item
                          </Button>
                        </div>
                      </div>
                    ))}
                  <Button
                    type="button"
                    className="m-2"
                    variant="secondary"
                    onClick={() => push({ item_id: "", quantity: "" })}
                  >
                    Add Item
                  </Button>
                </div>
              )}
            </FieldArray>
            <div class="d-flex justify-content-end">
              <Button type="submit" className="my-2" variant="primary">
                Order
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      {loadModal && (
        <OrderDetail
          isVisible={loadModal}
          setModal={setModal}
          orderDetail={orderDetail}
        />
      )}
    </div>
  );
};

export default Order;
