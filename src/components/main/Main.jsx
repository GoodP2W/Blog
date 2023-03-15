import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";

import "./main.scss";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="main__Wrapper">
          <div className="main__logo">
            <FontAwesomeIcon icon={faEarlybirds} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Main };