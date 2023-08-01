import React from "react";
import "./styles.css";
import { ReactComponent as ArrowDownSvg } from "../../assets/svgs/downarrow.svg";
import { ReactComponent as AsteriskSvg } from "../../assets/svgs/noun-asterisk-379465.svg";

const Banner = () => {
  return (
    <div id="Banner" className="main">
      <div className="bannerText font-face-gr">Darcy's insurance products</div>
      <div className="bannerInfo">
        <div className="info">
          <div className="infoChild">
            <span className="dot">
              <AsteriskSvg />
            </span>
            <div className="infotext">
              <div>
                Our <span className="infotextlink">plans</span> are saving
              </div>
              <div>policyholders 30%-60%</div>
              <div>on premiums</div>
            </div>
          </div>
          <div className="infoChild">
            <span className="dot">
              <AsteriskSvg />
            </span>
            <div className="infotext">
              <div>We offer a choice of low</div>
              <div>dedactibles and include</div>
              <div>no cost value-added</div>
              <div>services.</div>
            </div>
          </div>
          <div className="downarrow">
            {/* <HiArrowLongDown /> */}
            <ArrowDownSvg />
          </div>
        </div>
        <div className="infoimage">
          <div className="infoImageChild"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
