import { ReactComponent as LogoSvg } from "./logo.svg";
import "./App.css";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import { FiKey } from "react-icons/fi";

function App() {
  return (
    <div className="HomePage">
      <div className="bannerSection">
        <nav>
          <div className="logo">
            {/* <img src="logo.svg" alt="Logo" /> */}
            <LogoSvg />
          </div>
          <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#Services">Services</a>
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
          <ul className="nav-button-links">
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
        <Banner />
      </div>
      <Services />
      <div id="About"></div>
      <div id="Blog"></div>
      <div id="Career"></div>
    </div>
  );
}

export default App;
