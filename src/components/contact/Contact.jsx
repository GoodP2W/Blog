import "./contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <FontAwesomeIcon className="contacts__icon" icon={faEarlybirds} />
          <h3>Hi, i'm Serhii</h3>
          <p>It's my first react site</p>
          <a
            className="mail_icon"
            href="mailto:goodp2w@gmail.com"
            target="_blank"
          >
            my gmail
          </a>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  );
}

export { Contact };
