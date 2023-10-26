import React, { useState } from "react";
import Send from "./Send";
import Stepper from "./Stepper";
import Invoices from "./Invoices";
import CustomCard from "./CustomCard";

export default function ({ id, data }) {
  console.log(data);
  console.log(id);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleStepChange = (index) => {
    console.log("El paso activo ahora es:", index);
    setActiveIndex(index);
  };

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

          <Stepper onStepChange={handleStepChange} />

          {activeIndex === 0 && (
            <div className="flex flex-column gap-5">
              <CustomCard
                content={
                  `<div class='flex flex-column gap-3'>
                  <p>Esto es una caja de texto que cada tenant podrá configurar.</p> 
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et.</p>
                  </div>`
                }
              />
              <Invoices />
              <Send />
            </div>
          )}

          {activeIndex === 1 && <div>2</div>}

          {activeIndex === 2 && <div>3</div>}
        </div>
      </div>
    </div>
  );
}
