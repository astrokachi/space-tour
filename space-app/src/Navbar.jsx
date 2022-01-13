import React from "react";
import logo from "./assets/shared/logo.svg";
import hamburger from "./assets/shared/icon-hamburger.svg";
import close from "./assets/shared/icon-close.svg";

const Navbar = ({ state, handleClick, tags, setActiveId }) => {
  return (
    <nav>
      {/* {state ? <div className="division"></div> : null} */}

      <div className="container">
        <img src={logo} alt="Logo" />
        <nav className="big-screen nav-container">
          {tags.map((tag, index) => {
            return (
              <h2 className={`big-screen nav-items ${tag.state}`} key={index}>
                <span className="big-number">0{tag.number}</span> {tag.name}
              </h2>
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
                      <h2
                        className={`tag ${tag.state}`}
                        key={tag.number}
                        onClick={() => setActiveId(tag.number)}
                      >
                        <span>0{tag.number} </span>
                        {tag.name}
                      </h2>
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
