import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="justify-center items-center content-center h-32 bg-slate-100 ">
        
        <ul className=" gap-5 flex justify-evenly hover:font-bold text-blue-600 hover:text-blue-950">
        <div className="font-extrabold text-5xl text-blue-950 ">
        <span> &lt;PassOp/&gt; </span>
        </div>
          {" "}
          <li className="hover:font-bold text-blue-600 hover:text-blue-950 font-medium">
            {" "}
            Home{" "} 
          </li>
          <li className="hover:font-bold text-blue-600 hover:text-blue-950 font-medium">
            {" "}
            About-Us{" "}
          </li>
          <li className="hover:font-bold text-blue-600 hover:text-blue-950 font-medium">
            {" "}
            Solution{" "}
          </li>
          <li className="hover:font-bold text-blue-600 hover:text-blue-950 font-medium">
            {" "}
            Blogs
          </li>
          <li className="hover:font-bold text-blue-600 hover:text-blue-950 font-medium">
            {" "}
            Contact-Us
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
