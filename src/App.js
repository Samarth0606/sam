import "./App.css";
import logo from "./assets/digihunt-logo.jpeg";
import question from "./assets/8.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faTwitter,
  // faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  const onClickHandler = () => {
    window.open("http://www.bvest.tech/", "_blank");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div id="logo">
          <img src={logo} alt="logo" style={{ width: "60%", paddingBottom: "20px" }} />
        </div>
        <div id="question">
          <img className="question-img" src={question} alt="question" />
          <h2>
            For proceeding further please add "bit.ly/dh_" before the answer.
          </h2>
        </div>
      </header>
      <section id="footer" className="footer">
        <div className="social-icons">
          <a
            href="https://instagram.com/bvest.bvcoe?utm_medium=copy_link"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
          </a>
        </div>

        <h1 className="heading">COPYRIGHT © 2021</h1>
        <p className="sub-heading">
          Powered by{" "}
          <a href="https://bvest.tech/">BVEST</a>. All
          rights reserved.
        </p>
        <span className="sub-heading credit" onClick={onClickHandler}>
          Designed & developed by{" "}
          <span className="credit-link underline">BVEST TEAM</span>
        </span>
      </section>
    </div>
  );
}

export default App;
