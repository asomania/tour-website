import { BiPhoneCall } from "react-icons/bi";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./style/Header.css";

const Header = () => {
  return (
    <>
      <div class="card text-white bg-info bordercard">
        <div class="card-body  d-flex justify-content-between">
          <div>
            <a class="nav-link" href="#">
              <BiPhoneCall /> +90 (542) 000 00 00
            </a>
          </div>
          <div class="d-flex social">
            <a class="nav-link" href="#">
              <FiFacebook />
            </a>
            <a class="nav-link" href="#">
              <FiTwitter />
            </a>
            <a class="nav-link" href="#">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
