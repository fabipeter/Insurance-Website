import React from "react";
import "./styles.css";
const Services = () => {
  return (
    <div id="Services" className="servicesMain">
      <div className="firstRow">
        <div className="column1">
          <div className="service-button">Home insurance</div>
        </div>
        <div className="column2"></div>
        <div className="column3">
          <div className="column3contents">
            <div className="column3Title font-face-gr">Best choice</div>
            <div className="column3Text">
              Not all insurance are the same. That's{" "}
              <div>why agency knows that your insurance</div>
              <div>should be customized to fit your</div>
              <div>situation.</div>
            </div>
          </div>
          <div className="column3Button">
            <div className="viewall-button">View all services</div>
          </div>
        </div>
      </div>
      <div className="secondRow">
        <div className="column4">
          <div className="service-button">Vehicle damage</div>
        </div>
        <div className="column5">
          <div className="service-button">Mortgage insurance</div>
        </div>
        <div className="column6">
          <div className="service-button">Medical expenses</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
