import React, { useState, useRef } from "react";
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";

export default function InteractiveDemo({ onStepChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleStepChange = (e) => {
    setActiveIndex(e.index);
    onStepChange && onStepChange(e.index);
  };

  const toast = useRef(null);
  const items = [
    {
      label: "Cargos",

      command: (event) => {
        console.log(event);
      },
    },
    {
      label: "Pago",
      command: (event) => {
        console.log(event);
      },
    },
    {
      label: "Resumen",
      command: (event) => {
        console.log(event);
      },
    },
  ];

  return (
    <div className="card">
      <Toast ref={toast}></Toast>
      <Steps
        model={items}
        activeIndex={activeIndex}
        onSelect={handleStepChange}
        readOnly={false}
      />
    </div>
  );
}
