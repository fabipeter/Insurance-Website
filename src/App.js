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
import { useInView } from "react-intersection-observer";

function App() {
  const [animate, setAnimate] = useState(true);
  const [animateBanner, setAnimateBanner] = useState(false);
  const [animateServices, setAnimateServices] = useState(false);
  const [animateBlog, setAnimateBlog] = useState(false);
  const [animateCareer, setAnimateCareer] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false);

  const [heightAnimateServices, setHeightAnimateServices] = useState(false);
  const [heightAnimateBlog, setHeightAnimateBlog] = useState(false);
  const [heightAnimateCareer, setHeightAnimateCareer] = useState(false);
  const [heightAnimateAbout, setHeightAnimateAbout] = useState(false);

  const { ref: myBaseRef, inView: myBaseInView } = useInView();
  const { ref: myServicesRef, inView: myServicesInView } = useInView();
  const { ref: myBlogRef, inView: myBlogInView } = useInView();
  const { ref: myCareerRef, inView: myCareerInView } = useInView();
  const { ref: myAboutRef, inView: myAboutInView } = useInView();

  const oldScrollY = useRef(0);


  const setBase = useCallback((dir) => {
    setAnimate(true);
    setAnimateBanner(true);
    setAnimateServices(false);
    setAnimateBlog(false);
    setAnimateCareer(false);
    setAnimateAbout(false);
  }, []);
  const setServices = useCallback((dir) => {
    setAnimateServices(true);
    setAnimate(false);
    setAnimateBanner(false);
    setAnimateBlog(false);
    setAnimateCareer(false);
    setAnimateAbout(false);
  }, []);
  const setBlog = useCallback((dir) => {
    setAnimateBlog(true);
    setAnimate(false);
    setAnimateBanner(false);
    setAnimateServices(false);
    setAnimateCareer(false);
    setAnimateAbout(false);
  }, []);
  const setCareer = useCallback((dir) => {
    setAnimateCareer(true);
    setAnimate(false);
    setAnimateBanner(false);
    setAnimateServices(false);
    setAnimateBlog(false);
    setAnimateAbout(false);
  }, []);
  const setAbout = useCallback((dir) => {
    setAnimateAbout(true);
    setAnimate(false);
    setAnimateBanner(false);
    setAnimateServices(false);
    setAnimateBlog(false);
    setAnimateCareer(false);
  }, []);

  useEffect(() => {
    if (myBaseInView) {
      setBase();
    } else if (myServicesInView) {
      setServices();
    } else if (myBlogInView) {
      setBlog();
    } else if (myCareerInView) {
      setCareer();
    } else if (myAboutInView) {
      setAbout();
    } else setBase();
  }, [
    myBaseInView,
    myServicesInView,
    myBlogInView,
    myCareerInView,
    myAboutInView,
    setBase,
    setServices,
    setBlog,
    setCareer,
    setAbout,
  ]);

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > oldScrollY.current) {
        setHeightAnimateAbout(false);
        setHeightAnimateCareer(false);
        setHeightAnimateBlog(false);
        setHeightAnimateServices(false);
      } else {
        if (myCareerInView) {
          setHeightAnimateAbout(true);
        }
        if (myBlogInView) {
          setHeightAnimateCareer(true);
        }
        if (myServicesInView) {
          setHeightAnimateBlog(true);
        }
        if (myBaseInView) {
          setHeightAnimateServices(true);
        }
      }
      oldScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [
    myAboutInView,
    myBaseInView,
    myBlogInView,
    myCareerInView,
    myServicesInView,
  ]);


  return (
    <div className="wrapper">
      <div className="HomePage">
        <div className="bannerSection" ref={myBaseRef}>
          <nav>
            {animate && (
              <div className={`logo ${animate && "animated"}`}>
                <LogoSvg />
              </div>
            )}
            {animate && (
              <ul className={`nav-links ${animate && "animated"}`}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#Services">
                    Services <DropDownSvg className="navDropDown" />
                  </a>
                </li>
                <li>
                  <a href="#About">About us</a>
                </li>
                <li>
                  <a href="#Blog">Blog</a>
                </li>
                <li>
                  <a href="#Career">Career</a>
                </li>
              </ul>
            )}
            {animate && (
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
            )}
          </nav>
          <Banner animate={animateBanner} innerRef={myBaseRef} />
        </div>
        <Services
          innerRef={myServicesRef}
          animate={animateServices}
          heightAnimate={heightAnimateServices}
        />
        <Blog
          innerRef={myBlogRef}
          animate={animateBlog}
          heightAnimate={heightAnimateBlog}
        />
        <Career
          innerRef={myCareerRef}
          animate={animateCareer}
          heightAnimate={heightAnimateCareer}
        />
        <About
          innerRef={myAboutRef}
          animate={animateAbout}
          heightAnimate={heightAnimateAbout}
        />
      </div>
    </div>
  );
}

export default App;
