import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1/";
const axiosClient = axios.create();

export function getRequest(URL) {
  return axiosClient
    .get(BASE_URL + URL)
    .then((response) => response)
    .catch((error) => alert(error.message));
}

export function deleteRequest(URL) {
  return axiosClient
    .delete(BASE_URL + URL)
    .then((response) => response)
    .catch((err) => alert(err.message));
}

export function postRequest(URL, params) {
  return axiosClient
    .post(BASE_URL + URL, params)
    .then((response) => response)
    .catch((error) => alert(error.message));
}
