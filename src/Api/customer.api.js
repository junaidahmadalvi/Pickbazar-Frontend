import axios from "axios";
import { useQuery } from "react-query";
import { getItemFromLocalStorage } from "../helper";

const customerToken = getItemFromLocalStorage("token");
const NextApi = axios.create({
  baseURL: "http://localhost:5000/public",
  headers: {
    "Content-Type": "application/json",
  },
});
export default NextApi;

export const NextPtdApi = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
NextPtdApi.defaults.headers.common["Authorization"] = `Bearer ${customerToken}`;

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
  const { data } = await NextPtdApi.put(url, params);
  return data;
};
export const NextDeleteRequest = async (url, params) => {
  const { data } = await NextPtdApi.delete(url, { params: params });
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

export function useGetCustomerShopApi() {
  const { data, isFetching, isLoading, refetch, error } = useQuery(
    ["CUSTOMER"],
    () => CUSTOMER.fetchAllShop()
  );
  let list = data;
  return { list, isLoading, isFetching, refetch, error };
}

export const CUSTOMER = {
  fetchAll: () => NextFetchRequest(`/customer`),
  fetchAllShop: () => NextFetchRequest(`/customer/shops`),
  postCustomer: (payload) => NextPostRequest(`/customer`, payload),
  putCustomer: (payload) => NextPutRequest(`/customer`, payload),
  putCustomerPassword: (payload) =>
    NextPutRequest(`/customer/password`, payload),
  dellCustomer: (payload) => NextDeleteRequest(`/customer/${payload}`),
};

export const AUTH = {
  postUser: (payload) => NextPostRequest(`/auth/login`, payload),
};
