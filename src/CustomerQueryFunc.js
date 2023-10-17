import React from "react";
import { toast } from "react-toastify";
import { useGetCustomerApi } from "../Api";
import { useMutation } from "react-query";
import { CUSTOMER } from "../Api";

function CustomerQueryFunc() {
  const { list, refetch, isFetching, isLoading, error } = useGetCustomerApi();
  console.log("-----error-----", error);
  console.log("-----list of customer-----", list);

  const mutation = useMutation(CUSTOMER.postCustomer, {
    onSuccess: (error, success) => {
      console.log("success", success);
      const successMessage = error?.response?.data?.message;
      toast.error(successMessage);
      toast.success(successMessage || "Customer Added Successfully"); // Display the error message using React-Toastify
    },
    onError: (error) => {
      console.log("--mutation error---", error);
      if (error?.response?.status === 400) {
        const errorMessage = error?.response?.data?.error;
        toast.error(errorMessage); // Display the error message using React-Toastify
      }
    },
  });

  const handleAddCustomer = () => {
    const sampleData = {
      name: "arslan",
      email: "arslan@gmail.com",
      password: "arslan123",
      confirmPassword: "arslan123",
    };
    mutation.mutate(sampleData);
  };
  return (
    <>
      <h1>Customers</h1>

      <button type="button" onClick={handleAddCustomer}>
        Add Customer
      </button>
      {/* <p>{list}</p> */}
    </>
  );
}

export default CustomerQueryFunc;
