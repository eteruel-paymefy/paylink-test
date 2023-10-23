import React, { useState } from "react";
import { Button } from "primereact/button";
export default function () {
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Button
        label="Submit"
        icon="pi pi-check"
        loading={loading}
        onClick={load}
      />
    </div>
  );
}
