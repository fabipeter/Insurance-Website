import React from "react";
import "./styles.css";
import { ReactComponent as ArrowDownSvg } from "../../assets/svgs/download.svg";
import { ReactComponent as AsteriskSvg } from "../../assets/svgs/noun-asterisk-379465.svg";

const Banner = (props) => {
  const { animate, innerRef } = props;
  return (
    <div id="Banner" className="main" ref={innerRef}>
      {animate && (
        <div className={`bannerText ${animate && "animated"} font-face-gr`}>
          <div className=" font-face-gr"> Darcy's</div>
          <div className=" font-face-gr">insurance</div>
          <div className=" font-face-gr">products</div>
        </div>
      )}
      {animate && (
        <div className="bannerInfo">
          <div className={`bannerInfoChild ${animate && "animated"}`}>
            <div className="bannerInfoGrandChild">
              <span className="dot">
                <AsteriskSvg />
              </span>
              <div className="bannerInfotext">
                <div>
                  Our <span className="bannerInfotextlink">plans</span> are
                  saving
                </div>
                <div>policyholders 30%-60%</div>
                <div>on premiums</div>
              </div>
            </div>
            <div className="bannerInfoGrandChild">
              <span className="dot">
                <AsteriskSvg />
              </span>
              <div className="bannerInfotext">
                <div>We offer a choice of low</div>
                <div>dedactibles and include</div>
                <div>no cost value-added</div>
                <div>services.</div>
              </div>
            </div>
            <div className={`downarrow ${animate && "animated"}`}>
              {/* <HiArrowLongDown /> */}
              <ArrowDownSvg />
            </div>
          </div>
          <div className="bannerInfoimage">
            <div
              className={`bannerInfoImageChild ${animate && "animated"}`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
