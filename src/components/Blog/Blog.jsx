import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as AsteriskSvg } from "../../assets/svgs/noun-asterisk2.svg";
const Blog = () => {
  return (
    <div id="Blog" className="blogMain">
      <div className="blogWrapper">
        <div className="carouselSection">
          <Carousel showThumbs={false} showArrows={false} showStatus={false}>
            <div className="carouselBlock">
              <div className="consultantImage1"></div>
              <div className="consultantInfo">
                <div className="consultantInfocontents">
                  <div className="consultantInfoTitle ">Georgia Darcy</div>
                  <div className="consultantInfoSubheading">
                    The agency founder
                  </div>
                  <div className="consultantInfoText">
                    <div>With over twenty years of industry </div>
                    <div>experience, 'Darcy's insurance products'</div>
                    <div>has learned a lot. The one thing we know</div>
                    <div>for sure is that we're all about you. If you</div>
                    <div>find searching for insurance frustrating,</div>
                    <div>we are here to help.</div>
                  </div>
                </div>
                <div className="consultantInfoButton">
                  <div className="consultant-button">Get a consultation</div>
                </div>
              </div>
            </div>
            <div className="carouselBlock">
              <div className="consultantImage2"></div>
              <div className="consultantInfo">
                <div className="consultantInfocontents">
                  <div className="consultantInfoTitle ">Emiko Sato</div>
                  <div className="consultantInfoSubheading">
                    Insurance appraiser
                  </div>
                  <div className="consultantInfoText">
                    <div>Hi! I estimate the value of the insured</div>
                    <div>items and evaluate the insured events.</div>
                    <div>Also, I conduct investigations, inspecting</div>
                    <div>damaged cars and buildings. Therefore, I</div>
                    <div>have a great responsiblity for providing</div>
                    <div>insurance to our clients. I hope you will be</div>
                    <div>comfortable with us.</div>
                  </div>
                </div>
                <div className="consultantInfoButton">
                  <div className="consultant-button">Get a consultation</div>
                </div>
              </div>
            </div>
            <div className="carouselBlock">
              <div className="consultantImage1"></div>
              <div className="consultantInfo">
                <div className="consultantInfocontents">
                  <div className="consultantInfoTitle ">Georgia Darcy</div>
                  <div className="consultantInfoSubheading">
                    The agency founder
                  </div>
                  <div className="consultantInfoText">
                    <div>With over twenty years of industry </div>
                    <div>experience, 'Darcy's insurance products'</div>
                    <div>has learned a lot. The one thing we know</div>
                    <div>for sure is that we're all about you. If you</div>
                    <div>find searching for insurance frustrating,</div>
                    <div>we are here to help.</div>
                  </div>
                </div>
                <div className="consultantInfoButton">
                  <div className="consultant-button">Get a consultation</div>
                </div>
              </div>
            </div>
            <div className="carouselBlock">
              <div className="consultantImage2"></div>
              <div className="consultantInfo">
                <div className="consultantInfocontents">
                  <div className="consultantInfoTitle ">Emiko Sato</div>
                  <div className="consultantInfoSubheading">
                    Insurance appraiser
                  </div>
                  <div className="consultantInfoText">
                    <div>Hi! I estimate the value of the insured</div>
                    <div>items and evaluate the insured events.</div>
                    <div>Also, I conduct investigations, inspecting</div>
                    <div>damaged cars and buildings. Therefore, I</div>
                    <div>have a great responsiblity for providing</div>
                    <div>insurance to our clients. I hope you will be</div>
                    <div>comfortable with us.</div>
                  </div>
                </div>
                <div className="consultantInfoButton">
                  <div className="consultant-button">Get a consultation</div>
                </div>
              </div>
            </div>
            <div className="carouselBlock">
              <div className="consultantImage1"></div>
              <div className="consultantInfo">
                <div className="consultantInfocontents">
                  <div className="consultantInfoTitle ">Georgia Darcy</div>
                  <div className="consultantInfoSubheading">
                    The agency founder
                  </div>
                  <div className="consultantInfoText">
                    <div>With over twenty years of industry </div>
                    <div>experience, 'Darcy's insurance products'</div>
                    <div>has learned a lot. The one thing we know</div>
                    <div>for sure is that we're all about you. If you</div>
                    <div>find searching for insurance frustrating,</div>
                    <div>we are here to help.</div>
                  </div>
                </div>
                <div className="consultantInfoButton">
                  <div className="consultant-button">Get a consultation</div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="blogInfo">
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
    </div>
  );
};

export default Blog;
