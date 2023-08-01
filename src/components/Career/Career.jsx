import React from "react";
import "./styles.css";
import { ReactComponent as AsteriskSvg } from "../../assets/svgs/noun-asterisk-379465.svg";

const Career = () => {
  return (
    <div id="Career" className="careerMain">
      <div className="careerText">
        <div className=" font-face-gr">Support</div>
        <div className=" font-face-gr">at every</div>
        <div className=" font-face-gr">Step</div>
      </div>
      <div className="careerInfo">
        <div className="info">
          <div className="infoChild">
            <span className="dot">
              <AsteriskSvg />
            </span>
            <div className="infotext">
              <div>
                Participate in the{" "}
                <span className="infotextlink">loyalty program</span>. Pay for
                the
              </div>
              <div>service online to get bonuses for our other</div>
              <div>services. We have a lot of bonuses!</div>
            </div>
          </div>
          <div className="infoChild">
            <span className="dot">
              <AsteriskSvg />
            </span>
            <div className="infotext">
              <div>You can help other people: choose a donation</div>
              <div>fund and share the link with your friends!</div>
            </div>
          </div>
          <div className="careerInfoButton">
            <div className="career-button">Choose a fund</div>
          </div>
        </div>
        <div className="infoimage">
          <div className="infoImageChild"></div>
        </div>
      </div>
    </div>
  );
};

export default Career;
