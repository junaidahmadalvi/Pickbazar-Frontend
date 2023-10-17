import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./StyleLoader.css";
const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress color="primary" size={80} thickness={4} />
    </div>
  );
};

export default Loader;
