import React from "react";
import logo from "./assets/shared/logo.svg";
import hamburger from "./assets/shared/icon-hamburger.svg";
import close from "./assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const Navbar = ({ state, handleClick, tags, setItem, activeId }) => {
  return (
    <nav>
      {/* {state ? <div className="division"></div> : null} */}

      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="line"></div>
        <nav className="big-screen nav-container">
          {tags.map((tag, index) => {
            return (
              <div className="click" onClick={() => setItem(tag)} key={index}>
                <Link
                  to={`/${tag.name}`}
                  className={
                    index === +activeId
                      ? "big-screen nav-item active"
                      : "big-screen nav-item"
                  }
                >
                  <span className="big-number">0{tag.number}</span> {tag.name}
                </Link>
              </div>
            );
          })}
        </nav>
        {!state ? (
          <div className="hamburger container" onClick={() => handleClick()}>
            <img src={hamburger} alt="hamburger" />
          </div>
        ) : (
          <div className="division">
            <span>
              <div className="close container" onClick={() => handleClick()}>
                <img src={close} alt="close" />
              </div>
              <aside className="sidenav">
                <div className="sidenav container">
                  {tags.map((tag, index) => {
                    return (
                      <div
                        className="click"
                        onClick={() => setItem(tag)}
                        key={index}
                      >
                        <Link to={`/${tag.name}`} className="link">
                          <h2
                            className={
                              index === +activeId ? "tag active" : "tag"
                            }
                          >
                            <span className="small-number">0{tag.number} </span>
                            {tag.name}
                          </h2>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </aside>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
