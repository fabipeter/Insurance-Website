import React from "react";
import "./styles.css";

const Services = (props) => {
  const { animate, innerRef } = props;
  return (
    <div id="Services" className="servicesMain" ref={innerRef}>
      {animate && (
        <div className="firstRow">
          <div className={`cell1 ${animate && "animated"}`}>
            <div className="service-button">Home insurance</div>
          </div>
          <div className={`cell2 ${animate && "animated"}`}></div>
          <div className={`cell3 ${animate && "animated"}`}>
            <div className="cell3contents">
              <div
                className={`cell3Title ${animate && "animated"} font-face-gr`}
              >
                Best choice
              </div>
              <div className={`cell3Text ${animate && "animated"}`}>
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
      )}
      {animate && (
        <div className="secondRow">
          <div className={`cell4 ${animate && "animated"}`}>
            <div className="service-button">Vehicle damage</div>
          </div>
          <div className={`cell5 ${animate && "animated"}`}>
            <div className="service-button">Mortgage insurance</div>
          </div>
          <div className={`cell6 ${animate && "animated"} `}>
            <div className="service-button">Medical expenses</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
