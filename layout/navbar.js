import "./navbar.css";
import { ReactComponent as Logo } from "../../../components/micro/rocket.svg";
import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="brand inline-ele">
                <div className="div-logo inline-ele">
                    <Logo className="logo" />
                </div>
            </div>
            <ol className="menu inline-ele">
                <li className="nav-hover">
                    <a href="#aboutme">About</a>
                </li>
                <li className="nav-hover">
                    <a href="#pastexperience">Experience</a>
                </li>
                <li className="nav-hover">
                    <a href="#highlights">Work</a>
                </li>
                <li className="nav-hover">
                    <a href="#contactme">Contact</a>
                </li>
                <li id="resume">Resume</li>
            </ol>
        </div>
    );
}
export default Navbar;
