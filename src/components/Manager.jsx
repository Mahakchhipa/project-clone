import React from "react";

const Manager = () => {
  return (
    <div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white text-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        {" "}
      </div>
      <div className="text-5xl text-center font-bold text-green-800 p-6 ">
        {" "}
        Password Manager 
      </div>

      <div className=" flex flex-col p-5  ">
        <input
          type="text"
          className="rounded-full py-4 text-xl my-4  border-green-500 border-2 w-full"
        />
        <div>
          <input
            type="text"
            className="rounded-full py-2 text-xl border-green-500 border-2 w-1/2"
          />
          <input
            type="text"
            className="rounded-full py-2 text-xl  border-green-500 border-2 w-1/2"
          />
        </div>
        <div>
          <input
            type="text"
            className="rounded-full py-2 text-xl border-green-500 border-2 w-1/2"
          />
          <input
            type="text"
            className="rounded-full py-2 text-xl  border-green-500 border-2 w-1/2"
          />
        </div>
        <div>
          <input
            type="text"
            className="rounded-full py-2 text-xl border-green-500 border-2 w-1/2"
          />
          <input
            type="text"
            className="rounded-full py-2 text-xl  border-green-500 border-2 w-1/2"
          />
        </div>
      </div>
      <button className="text-xl   ">                                             
        {" "}
        <lord-icon
          src="https://cdn.lordicon.com/jgnvfzqg.json"
          trigger="hover"
          className="h-20 w-20"
        ></lord-icon>
        Add Password{" "}
      </button>
    </div>
    
  );
};

export default Manager;
