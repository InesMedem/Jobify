import Wrapper from "../assets/wrappers/LandingPage";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
        <div className="container page">
          <div className="info">
            <h1>
              job <span> tracking </span> app
            </h1>
            <p>
              I'm baby disrupt heirloom you probably haven't heard of them
              cliche, thundercats twee truffaut fit JOMO subway tile sriracha
              keytar meggings craft beer. Umami microdosing before they sold
              out, glossier succulents vape gatekeep mustache vaporware pickled
              shaman quinoa yr disrupt.
            </p>
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/login" className="btn register-link">
              Login
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </nav>
    </Wrapper>
  );
};
export default Landing;
