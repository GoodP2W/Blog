import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__navBar">
            <span>
              <a href="/">P2W</a>
            </span>
            <div>
              <ul>
                <li>
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="#">proect</a>
                </li>
                <li>
                  <a href="/auth">login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };
