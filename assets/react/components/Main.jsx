import React from "react";
import Send from "./Send";
import SimplePanel from "./SimplePanel";


export default function ({ id, data }) {
  console.log(data); // from react-components.html.twig 
  console.log(id); // from react-components.html.twig 
  
  return (
    <div className="flex align-items-start justify-content-center h-screen">
      <div>
        <div className="text-center m-3 flex flex-column justify-content-center align-items-center gap-4 lg:max-w-30rem ">
          <img
            src="/media/logo/paymefy-logo-dark.png"
            alt="hyper"
            height={50}
            className="mb-3"
          />
          <SimplePanel />
          <Send />
        </div>
      </div>
    </div>
  );
}
