import axios from "axios";
import { useQuery } from "react-query";

const NextApi = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default NextApi;

export const defaultQueryFn = async (key) => {
  try {
    const { data } = await NextApi.get(key);
    return data;
  } catch (error) {
    return error;
  }
};

export const NextFetchRequest = async (url, params) => {
  const { data } = await NextApi.get(url, { params: params });
  return data;
};

export const NextPostRequest = async (url, params) => {
  const { data } = await NextApi.post(url, params);
  return data;
};
export const NextPutRequest = async (url, params) => {
  const { data } = await NextApi.put(url, params);
  return data;
};
export const NextDeleteRequest = async (url, params) => {
  const { data } = await NextApi.delete(url, { params: params });
  return data;
};

export function useGetCustomerApi() {
  const { data, isFetching, isLoading, refetch, error } = useQuery(
    ["CUSTOMER"],
    () => CUSTOMER.fetchAll()
  );
  let list = data;
  return { list, isLoading, isFetching, refetch, error };
}

export const CUSTOMER = {
  fetchAll: () => NextFetchRequest(`/customer`),
  postCustomer: (payload) => NextPostRequest(`/customer`, payload),
  putCustomer: (payload, customer_id) =>
    NextPutRequest(`/customer/${payload.id}`, payload),
  dellCustomer: (payload) => NextDeleteRequest(`/customer/${payload}`),
};

export const AUTH = {
  postUser: (payload) => NextPostRequest(`/auth/login`, payload),
};
