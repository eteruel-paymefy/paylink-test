import React, { useRef, useState } from "react";

import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
export default function () {
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showInfo();
    }, 2000);
  };

  const showInfo = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "Data Submitted",
    });
  };

  return (
    <>
      <div>
        <Button
          label="Submit"
          icon="pi pi-check"
          loading={loading}
          onClick={load}
        />
      </div>
      <Toast ref={toast} />
    </>
  );
}
