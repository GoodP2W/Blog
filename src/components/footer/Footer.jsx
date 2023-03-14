import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="contacts">
            <a href="#">contacts</a>
          </div>
          <ul className="social">
            <li className="social_item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/serhii-piddubnyi-452350253/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="social_item">
              <a target="_blank" href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="social_item">
              <a target="_blank" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Footer };
