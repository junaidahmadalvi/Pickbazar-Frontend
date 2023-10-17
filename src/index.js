import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultQueryFn } from "./Api";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 1, // 48 hours
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false,
      refetchInterval: 60000, // 10 minutes
      refetchIntervalInBackground: true,
      // retry: false,
      // retryDelay: 10000,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
  </QueryClientProvider>
);

reportWebVitals();
