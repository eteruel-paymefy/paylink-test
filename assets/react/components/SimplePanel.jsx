import React from "react";
import { Panel } from "primereact/panel";
import { Ripple } from 'primereact/ripple';
export default function () {
  const template = (options) => {
    const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} ml-2 text-primary`;
    const style = { fontSize: '1.25rem' };

    return (
        <div className={className}>
            <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                <span className={toggleIcon}></span>
                <Ripple />
            </button>
            <span className={titleClassName} style={style}>Header</span>
        </div>
    );
};
  return (
    <Panel headerTemplate={template} className="w-full" toggleable>
      <p className="m-0 text-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. 
      </p>
    </Panel>
  );
}
