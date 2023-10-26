import React from "react";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";

function CustomPanel({ header1, header2, content}) {

  const headerTemplate = (options) => {
    const {
      collapsed,
      className,
      togglerClassName,
      onTogglerClick,
      titleClassName,
    } = options;

    const toggleIcon = !collapsed ? "pi pi-chevron-down" : "pi pi-chevron-right";
    const combinedClassName = `${className} justify-content-between align-items-center flex-row-reverse`;
    const combinedTitleClassName = `${titleClassName} text-600 font-medium`;
    const style = { fontSize: "1rem" };
    return (
      <div className={combinedClassName}>
        <button className={togglerClassName} onClick={onTogglerClick}>
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
        <div  className="w-10rem">
          {header1 && (
            <span className={combinedTitleClassName} style={style}>
              {header1}
            </span>
          )}

          {header2 && (
            <span className={combinedTitleClassName + ' ml-7'} style={style}>
              {header2}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <Panel
      headerTemplate={headerTemplate}
      className="panel"
      toggleable
    >
      <div
        className="m-0 text-400 font-light"
        dangerouslySetInnerHTML={{
          __html: content
        }}
      ></div>
    </Panel>
  );
}

export default CustomPanel;
