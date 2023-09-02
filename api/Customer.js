import { getRequest } from "./Axios";

const getCustomers = () => {
  return getRequest(`customers`).then((response) => response.data.customers);
};

export { getCustomers };
