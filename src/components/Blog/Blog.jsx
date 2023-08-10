import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as AsteriskSvg } from "../../assets/svgs/noun-asterisk2.svg";

const Blog = (props) => {
  const { animate, innerRef,heightAnimate } = props;
  const [animated, setAnimated] = useState(0);
  return (
    <div
      id="Blog"
      className={`blogMain ${animate && "animated"} ${heightAnimate && "heightAnimate"}`}
      ref={innerRef}
    >
      {/* <div> */}
      {animate && (
        <div className="blogWrapper">
          <div className="carouselSection">
            <Carousel
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              className={`replace ${animate && "animated"}`}
              onChange={(index) => setAnimated(index)}
            >
              <div
                className={`carouselBlock ${
                  animated === 0 && animate && "animated"
                }`}
              >
                <div
                  className={`consultantImage1 ${
                    animated === 0 && animate && "animated"
                  }`}
                ></div>
                <div className="consultantInfo">
                  <div className="consultantInfocontents">
                    <div
                      className={`consultantInfoTitle ${
                        animated === 0 && animate && "animated"
                      }`}
                    >
                      Georgia Darcy
                    </div>
                    <div
                      className={`consultantInfoSubheading ${
                        animated === 0 && animate && "animated"
                      }`}
                    >
                      The agency founder
                    </div>
                    <div
                      className={`consultantInfoText ${
                        animated === 0 && animate && "animated"
                      }`}
                    >
                      <div>With over twenty years of industry </div>
                      <div>experience, 'Darcy's insurance products'</div>
                      <div>has learned a lot. The one thing we know</div>
                      <div>for sure is that we're all about you. If you</div>
                      <div>find searching for insurance frustrating,</div>
                      <div>we are here to help.</div>
                    </div>
                  </div>
                  <div
                    className={`consultantInfoButton ${
                      animated === 0 && animate && "animated"
                    }`}
                  >
                    <div className="consultant-button">Get a consultation</div>
                  </div>
                </div>
              </div>
              <div
                className={`carouselBlock ${
                  animated === 1 && animate && "animated"
                }`}
              >
                <div
                  className={`consultantImage2 ${
                    animated === 1 && animate && "animated"
                  }`}
                ></div>
                <div className="consultantInfo">
                  <div className="consultantInfocontents">
                    <div
                      className={`consultantInfoTitle ${
                        animated === 1 && animate && "animated"
                      }`}
                    >
                      Emiko Sato
                    </div>
                    <div
                      className={`consultantInfoSubheading ${
                        animated === 1 && animate && "animated"
                      }`}
                    >
                      Insurance appraiser
                    </div>
                    <div
                      className={`consultantInfoText ${
                        animated === 1 && animate && "animated"
                      }`}
                    >
                      <div>Hi! I estimate the value of the insured</div>
                      <div>items and evaluate the insured events.</div>
                      <div>Also, I conduct investigations, inspecting</div>
                      <div>damaged cars and buildings. Therefore, I</div>
                      <div>have a great responsiblity for providing</div>
                      <div>insurance to our clients. I hope you will be</div>
                      <div>comfortable with us.</div>
                    </div>
                  </div>
                  <div
                    className={`consultantInfoButton ${
                      animated === 1 && animate && "animated"
                    }`}
                  >
                    <div className="consultant-button">Get a consultation</div>
                  </div>
                </div>
              </div>
              <div
                className={`carouselBlock ${
                  animated === 2 && animate && "animated"
                }`}
              >
                <div
                  className={`consultantImage1 ${
                    animated === 2 && animate && "animated"
                  }`}
                ></div>
                <div className="consultantInfo">
                  <div className="consultantInfocontents">
                    <div
                      className={`consultantInfoTitle ${
                        animated === 2 && animate && "animated"
                      }`}
                    >
                      Georgia Darcy
                    </div>
                    <div
                      className={`consultantInfoSubheading ${
                        animated === 2 && animate && "animated"
                      }`}
                    >
                      The agency founder
                    </div>
                    <div
                      className={`consultantInfoText ${
                        animated === 2 && animate && "animated"
                      }`}
                    >
                      <div>With over twenty years of industry </div>
                      <div>experience, 'Darcy's insurance products'</div>
                      <div>has learned a lot. The one thing we know</div>
                      <div>for sure is that we're all about you. If you</div>
                      <div>find searching for insurance frustrating,</div>
                      <div>we are here to help.</div>
                    </div>
                  </div>
                  <div
                    className={`consultantInfoButton ${
                      animated === 2 && animate && "animated"
                    }`}
                  >
                    <div className="consultant-button">Get a consultation</div>
                  </div>
                </div>
              </div>
              <div
                className={`carouselBlock ${
                  animated === 3 && animate && "animated"
                }`}
              >
                <div
                  className={`consultantImage2 ${
                    animated === 3 && animate && "animated"
                  }`}
                ></div>
                <div className="consultantInfo">
                  <div className="consultantInfocontents">
                    <div
                      className={`consultantInfoTitle ${
                        animated === 3 && animate && "animated"
                      }`}
                    >
                      Emiko Sato
                    </div>
                    <div
                      className={`consultantInfoSubheading ${
                        animated === 3 && animate && "animated"
                      }`}
                    >
                      Insurance appraiser
                    </div>
                    <div
                      className={`consultantInfoText ${
                        animated === 3 && animate && "animated"
                      }`}
                    >
                      <div>Hi! I estimate the value of the insured</div>
                      <div>items and evaluate the insured events.</div>
                      <div>Also, I conduct investigations, inspecting</div>
                      <div>damaged cars and buildings. Therefore, I</div>
                      <div>have a great responsiblity for providing</div>
                      <div>insurance to our clients. I hope you will be</div>
                      <div>comfortable with us.</div>
                    </div>
                  </div>
                  <div
                    className={`consultantInfoButton ${
                      animated === 3 && animate && "animated"
                    }`}
                  >
                    <div className="consultant-button">Get a consultation</div>
                  </div>
                </div>
              </div>
              <div
                className={`carouselBlock ${
                  animated === 4 && animate && "animated"
                }`}
              >
                <div
                  className={`consultantImage1 ${
                    animated === 4 && animate && "animated"
                  }`}
                ></div>
                <div className="consultantInfo">
                  <div className="consultantInfocontents">
                    <div
                      className={`consultantInfoTitle ${
                        animated === 4 && animate && "animated"
                      }`}
                    >
                      Georgia Darcy
                    </div>
                    <div
                      className={`consultantInfoSubheading ${
                        animated === 4 && animate && "animated"
                      }`}
                    >
                      The agency founder
                    </div>
                    <div
                      className={`consultantInfoText ${
                        animated === 4 && animate && "animated"
                      }`}
                    >
                      <div>With over twenty years of industry </div>
                      <div>experience, 'Darcy's insurance products'</div>
                      <div>has learned a lot. The one thing we know</div>
                      <div>for sure is that we're all about you. If you</div>
                      <div>find searching for insurance frustrating,</div>
                      <div>we are here to help.</div>
                    </div>
                  </div>
                  <div
                    className={`consultantInfoButton ${
                      animated === 4 && animate && "animated"
                    }`}
                  >
                    <div className="consultant-button">Get a consultation</div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div className={`blogInfo ${animate && "animated"}`}>
            <div className="dot">
              <AsteriskSvg />
            </div>
            <div className="infoText">
              <div className="font-face-gr">Our</div>
              <div className="font-face-gr">experts</div>
              <div className="font-face-gr">say</div>
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Blog;
