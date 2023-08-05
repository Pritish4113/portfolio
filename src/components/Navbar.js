import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ changeState }) {
  const [nav, setnav] = useState(false);

  function handleClick() {
    setnav(!nav);
    changeState(nav);
  }
  return (
    <>
      <div className="fixed w-screen h-[80px] flex justify-between items-center px-4 z-10">
        <p className="namenav navstyle p-4 rounded-2xl mt-4">PRITISH SINGHAL</p>
        {/* menu */}
        <div className="hidden md:flex ">
          <ul className="flex navstyle p-5 rounded-2xl mt-4">
            <li className="px-4 navlink">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 navlink">
              <Link to="/About">About</Link>
            </li>
            <li className="px-4 navlink">
              <Link to="/Resume">Resume</Link>
            </li>
            <li className="px-4 navlink">
              <Link to="/Project">Project</Link>
            </li>
            <li className="px-4 navlink">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden z-10">
          {nav ? (
            <FaTimes
              className="text-white text-2xl hovereffect"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            />
          ) : (
            <FaBars
              className="text-white text-2xl hovereffect"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            />
          )}
        </div>
        {/* mobile_menu */}
        <ul
          className={
            nav
              ? "absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-black text-white"
              : "hidden"
          }
        >
          <li className="px-4 py-6 text-2xl hovereffect">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="px-4 py-6 text-2xl hovereffect">
            <Link onClick={handleClick} to="/About">
              About
            </Link>
          </li>
          <li className="px-4 py-6 text-2xl hovereffect">
            <Link onClick={handleClick} to="/Resume">
              Resume
            </Link>
          </li>
          <li className="px-4 py-6 text-2xl hovereffect">
            <Link onClick={handleClick} to="/Project">
              Project
            </Link>
          </li>
          <li className="px-4 py-6 text-2xl hovereffect">
            <Link onClick={handleClick} to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
