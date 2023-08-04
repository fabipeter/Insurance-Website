import { ReactComponent as LogoSvg } from "./logo.svg";
import { ReactComponent as DropDownSvg } from "./assets/svgs/dropdown.svg";
import "./App.css";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import { FiKey } from "react-icons/fi";
import Blog from "./components/Blog/Blog";
import Career from "./components/Career/Career";
import About from "./components/About/About";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [animate, setAnimate] = useState(true);
  const [animateBanner, setAnimateBanner] = useState(true);
  const [animateServices, setAnimateServices] = useState(true);
  const [animateBlog, setAnimateBlog] = useState(true);
  const [animateCareer, setAnimateCareer] = useState(true);
  const [animateAbout, setAnimateAbout] = useState(true);

  const myBaseRef = useRef(null);
  const myServicesRef = useRef(null);
  const myBlogRef = useRef(null);
  const myCareerRef = useRef(null);
  const myAboutRef = useRef(null);

  const executeBaseScroll = () => myBaseRef.current.scrollIntoView();
  const executeServicesScroll = () => myServicesRef.current.scrollIntoView();
  const executeBlogScroll = () => myBlogRef.current.scrollIntoView();
  const executeCareerScroll = () => myCareerRef.current.scrollIntoView();
  const executeAboutScroll = () => myAboutRef.current.scrollIntoView();

  const oldScrollY = useRef(0);

  const [direction, setDirection] = useState("");

  const setBase = useCallback((dir) => {
    setAnimate(true);
    setAnimateBanner(true);
    setAnimateServices(false);
    setAnimateBlog(false);
    setAnimateCareer(false);
    setAnimateAbout(false);
    executeBaseScroll();
  }, []);
  const setServices = useCallback((dir) => {
    setAnimateServices(true);
    setAnimate(false);
    setAnimateBanner(false);
    setAnimateBlog(false);
    setAnimateCareer(false);
    setAnimateAbout(false);
    executeServicesScroll();
  }, []);
  const setBlog = useCallback((dir) => {
    setAnimateBlog(true);
    setAnimate(false);
    setAnimateBanner(false);
    setAnimateServices(false);
    setAnimateCareer(false);
    setAnimateAbout(false);
    executeBlogScroll();
  }, []);
  const setCareer = useCallback((dir) => {
    setAnimateCareer(true);
    setAnimate(false);
    setAnimateBanner(false);
    setAnimateServices(false);
    setAnimateBlog(false);
    setAnimateAbout(false);
    executeCareerScroll();
  }, []);
  const setAbout = useCallback((dir) => {
    setAnimateAbout(true);
    setAnimate(false);
    setAnimateBanner(false);
    setAnimateServices(false);
    setAnimateBlog(false);
    setAnimateCareer(false);
    executeAboutScroll();
  }, []);
  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > oldScrollY.current) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      oldScrollY.current = window.scrollY;
      window.scrollY > 100 && window.scrollY < 846 && direction === "down"
        ? setServices("down")
        : window.scrollY > 916 && window.scrollY < 1686 && direction === "down"
        ? setBlog("down")
        : window.scrollY > 1766 && window.scrollY < 2446 && direction === "down"
        ? setCareer("down")
        : window.scrollY > 2645 && window.scrollY < 3222 && direction === "down"
        ? setAbout("down")
        : window.scrollY < 3380 && window.scrollY > 2546 && direction === "up"
        ? setCareer("up")
        : window.scrollY < 2420 && window.scrollY > 1686 && direction === "up"
        ? setBlog("up")
        : window.scrollY < 1530 && window.scrollY > 920 && direction === "up"
        ? setServices("up")
        : window.scrollY < 747 && window.scrollY > 100 && direction === "up"
        ? setBase("down")
        : window.scrollY === 0 && direction !== "up"
        ? setBase("down")
        : console.log();
    };
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [direction, setAbout, setBase, setBlog, setCareer, setServices]);

  return (
    <div className="wrapper">
      <div className="HomePage">
        <div className="bannerSection" ref={myBaseRef}>
          <nav>
            <div className={`logo ${animate && "animated"}`}>
              {/* <img src="logo.svg" alt="Logo" /> */}
              <LogoSvg />
            </div>
            <div className="hamburger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className={`nav-links ${animate && "animated"}`}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#Services" onClick={() => setServices("")}>
                  Services <DropDownSvg className="navDropDown" />
                </a>
              </li>
              <li>
                <a href="#About" onClick={() => setAbout("")}>
                  About us
                </a>
              </li>
              <li>
                <a href="#Blog" onClick={() => setBlog("")}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#Career" onClick={() => setCareer("")}>
                  Career
                </a>
              </li>
            </ul>
            <ul className={`nav-button-links ${animate && "animated"}`}>
              <li>
                <button className="join-button" href="#">
                  Contact us
                </button>
              </li>
              <li>
                <button className="login-button" href="#">
                  <FiKey />
                  Login
                </button>
              </li>
            </ul>
          </nav>
          <Banner animate={animateBanner} />
        </div>
        <Services innerRef={myServicesRef} animate={animateServices} />
        <Blog innerRef={myBlogRef} animate={animateBlog} />
        <Career innerRef={myCareerRef} animate={animateCareer} />
        <About innerRef={myAboutRef} animate={animateAbout} />
      </div>
    </div>
  );
}

export default App;
