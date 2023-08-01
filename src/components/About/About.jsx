import React from "react";
import "./styles.css";
import { ReactComponent as LogoAltSvg } from "../../assets/svgs/logoalt.svg";
import { ReactComponent as CalenderSvg } from "../../assets/svgs/calender.svg";

const About = () => {
  return (
    <div id="About" className="aboutMain">
      <div className="aboutFirstRow">
        <div className="aboutCell1">
          <div className="question font-face-gr">
            Need numbers<span className="questionMark">?</span>
          </div>
          <div className="aboutInsuranceOptions">
            <div className="insuranceOption">Travel</div>
            <div className="insuranceOption">Health</div>
            <div className="insuranceOption">CASCO</div>
            <div className="insuranceOption">Mortgage</div>
            <div className="insuranceOption">Fire</div>
          </div>
          <div className="aboutForm">
            <div className="firstField">
              <div className="label">Enter the country</div>
              <div className="input">
                <input placeholder="Australia" />
              </div>
            </div>
            <div className="secondField">
              <div className="label">Choose travel dates</div>
              <div className="input">
                <input placeholder="11 Apr - 20 Apr" />
                <span>
                  <CalenderSvg />
                </span>
              </div>
            </div>
          </div>
          <div className="aboutCalculateButton">
            <div className="about-button">Calculate</div>
          </div>
        </div>
        <div className="aboutCell2">
          <div className="serviceOption">
            <div className="heading">Insurance services</div>
            <div className="d-flex">
              <div className="option">Medical expenses</div>
              <div className="option">Family health insurance</div>
            </div>
            <div className="d-flex">
              <div className="option">Vehicle damage</div>
              <div className="option">Property loss</div>
              <div className="option">Fire</div>
            </div>
          </div>
          <div className="serviceOption">
            <div className="heading">Company</div>
            <div className="d-flex">
              <div className="option">About us</div>
              <div className="option">Career</div>
              <div className="option">Help</div>
              <div className="option">FAQ</div>
              <div className="option">Blog</div>
            </div>
          </div>
          <div className="serviceOption">
            <div className="heading">Bonus</div>
            <div className="d-flex">
              <div className="option">Gift certificate</div>
              <div className="option">Affiliate Program</div>
              <div className="option">Trainings</div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutSecondRow">
        <div className="aboutCell3">
          <div className="">
            <LogoAltSvg />
          </div>
          <div className="">Darcy's insurance products</div>
        </div>
        <div className="aboutCell4">Privacy Policy</div>
      </div>
    </div>
  );
};

export default About;
