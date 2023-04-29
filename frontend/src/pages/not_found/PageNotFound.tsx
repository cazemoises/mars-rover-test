import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {

  let location = useLocation();

  return (
    <div>
      <h2>
        404 Error! No match for <code>{location.pathname}</code>
      </h2>
    </div>
  );

};

export default NotFound;