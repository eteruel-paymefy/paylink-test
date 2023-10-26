import React from "react";
import SimplePanel from "./SimplePanel";
const Invoices = (/*{invoices}*/) => {
  const invoices = [
   1,2,4
  ];
  return (
    <div>
      <div className=" flex flex-column gap-5">
        {invoices.map((index) => (
          <SimplePanel
            key={Math.random()}
            header1={"Factura " + ++index}
            header2={"5" + "€"}
            content={`
            <div> 
              <p>Factura en revisión</p>
              <p>Esta factura está siendo revisada por %tenant%.</p>
              <p>nombre contrato/info adicional (falta bajar)</p>     
            </div>
            `}
          />
        ))}
      </div>
      <div className="mt-5">
        <hr />
        <div className="flex gap-3 justify-content-between">
          <p> TOTAL</p>
          <p> 300€</p>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
