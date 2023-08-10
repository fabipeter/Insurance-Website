import React from "react";
import "./styles.css";
import { ReactComponent as LogoAltSvg } from "../../assets/svgs/logoalt.svg";
import { ReactComponent as CalenderSvg } from "../../assets/svgs/calender.svg";

const About = (props) => {
  const { animate, innerRef,heightAnimate } = props;
  return (
    <div
      id="About"
      className={`aboutMain ${animate && "animated"} ${heightAnimate && "heightAnimate"}`}
      ref={innerRef}
    >
      {animate && (
        <div className="aboutFirstRow">
          <div className="aboutCell1">
            <div className={`question ${animate && "animated"} font-face-gr`}>
              Need numbers<span className="questionMark">?</span>
            </div>
            <div className={`aboutInsuranceOptions ${animate && "animated"}`}>
              <div className="insuranceOption">Travel</div>
              <div className="insuranceOption">Health</div>
              <div className="insuranceOption">CASCO</div>
              <div className="insuranceOption">Mortgage</div>
              <div className="insuranceOption">Fire</div>
            </div>
            <div className="aboutForm">
              <div className={`firstField ${animate && "animated"}`}>
                <div className="label">Enter the country</div>
                <div className="input">
                  <input placeholder="Australia" />
                </div>
              </div>
              <div className={`secondField ${animate && "animated"}`}>
                <div className="label">Choose travel dates</div>
                <div className="input">
                  <input placeholder="11 Apr - 20 Apr" />
                  <span>
                    <CalenderSvg />
                  </span>
                </div>
              </div>
            </div>
            <div className={`aboutCalculateButton ${animate && "animated"}`}>
              <div className="about-button">Calculate</div>
            </div>
          </div>
          <div className={`aboutCell2 ${animate && "animated"}`}>
            <div className="serviceOption">
              <div className="heading">Insurance services</div>
              <div className="d-flex1 d-flex">
                <div className="option">Medical expenses</div>
                <div className="option">Family health insurance</div>
              </div>
              <div className="d-flex2 d-flex">
                <div className="option">Vehicle damage</div>
                <div className="option">Property loss</div>
                <div className="option">Fire</div>
              </div>
            </div>
            <div className="serviceOption">
              <div className="heading">Company</div>
              <div className="d-flex3 d-flex">
                <div className="option">About us</div>
                <div className="option">Career</div>
                <div className="option">Help</div>
                <div className="option">FAQ</div>
                <div className="option">Blog</div>
              </div>
            </div>
            <div className="serviceOption">
              <div className="heading">Bonus</div>
              <div className="d-flex4 d-flex">
                <div className="option">Gift certificate</div>
                <div className="option">Affiliate Program</div>
                <div className="option">Trainings</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {animate && (
        <div className="aboutSecondRow">
          <div className={`aboutCell3 ${animate && "animated"}`}>
            <div className="">
              <LogoAltSvg />
            </div>
            <div className="label">Darcy's insurance products</div>
          </div>
          <div className={`aboutCell4 ${animate && "animated"}`}>
            Privacy Policy
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
