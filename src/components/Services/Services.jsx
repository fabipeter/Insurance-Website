import React from "react";
import "./styles.css";
const Services = () => {
  return (
    <div id="Services" className="servicesMain">
      <div className="firstRow">
        <div className="cell1">
          <div className="service-button">Home insurance</div>
        </div>
        <div className="cell2"></div>
        <div className="cell3">
          <div className="cell3contents">
            <div className="cell3Title font-face-gr">Best choice</div>
            <div className="cell3Text">
              Not all insurance are the same. That's{" "}
              <div>why agency knows that your insurance</div>
              <div>should be customized to fit your</div>
              <div>situation.</div>
            </div>
          </div>
          <div className="cell3Button">
            <div className="viewall-button">View all services</div>
          </div>
        </div>
      </div>
      <div className="secondRow">
        <div className="cell4">
          <div className="service-button">Vehicle damage</div>
        </div>
        <div className="cell5">
          <div className="service-button">Mortgage insurance</div>
        </div>
        <div className="cell6">
          <div className="service-button">Medical expenses</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
