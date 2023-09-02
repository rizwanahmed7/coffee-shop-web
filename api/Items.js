import { getRequest, postRequest, deleteRequest } from "./Axios";

const getItems = () => {
  return getRequest(`items`).then((response) => response.data.items);
};

const createItem = (item) => {
  return postRequest(`items`, item).then((response) => response.data);
};

const deleteItem = (id) => {
  return deleteRequest(`items/${id}`).then((response) => response);
};

export { getItems, createItem, deleteItem };
