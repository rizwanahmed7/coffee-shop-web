import { postRequest } from "./Axios";

const createOrder = (order) => {
  return postRequest(`orders`, order).then((response) => response.data);
};

export { createOrder };
