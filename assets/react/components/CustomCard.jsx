import React from "react";

const CustomCard = ({ content, title }) => {
  return (
    <div className="max-width c_card" title={title || ''}>
      <p
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></p>
    </div>
  );
};

export default CustomCard;
