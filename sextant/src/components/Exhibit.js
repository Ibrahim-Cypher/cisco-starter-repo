import React from 'react';
import "./exhibit.css";

const Exhibit = ({ title, children }) => {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Exhibit;
