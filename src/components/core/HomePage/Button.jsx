import React from "react";
import { Link } from "react-router-dom";

function Button({ children, linkTo, active }) {
  return (
    <Link to={linkTo}>
      <div className={`text-center shadow-md px-6 py-2 text-sm  rounded-md ${active ? "bg-yellow-50 text-black":"bg-richblack-800"} hover:scale-95`}>{children}</div>
    </Link>
  );
}

export default Button;
