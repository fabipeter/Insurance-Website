import React from "react";
import "./styles.css";
// import { HiArrowLongDown } from "react-icons/hi2";
import { FaStarOfLife } from "react-icons/fa";
import { ReactComponent as ArrowDownSvg } from "../../assets/svgs/down-arrow-svgrepo-com (1).svg";
const Banner = () => {
  return (
    <div id="Banner" className="main">
      <div className="bannerText">Darcy's Insurance products</div>
      <div className="bannerInfo">
        <div className="info">
          <div className="infoChild">
            <span className="dot">
              <FaStarOfLife />
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
              <FaStarOfLife />
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
