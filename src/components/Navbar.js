import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaLightbulb, FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IconContext } from "react-icons";


export default function Navbar(props) {
    var writemode = "";

    if (props.mode === 'dark') {
        writemode = 'Light';
    } else if (props.mode === 'light') {
        writemode = 'Dark';
    }
    const changetext = () => {
        if (props.mode === 'dark') {
            writemode = 'Light';
        } else if (props.mode === 'Light') {
            writemode = 'Dark';
        }
    }



    setTimeout(changetext, 1000);
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
                <div className="container-fluid">
                    {/*eslint-disable-next-line*/}
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/*eslint-disable-next-line*/}
                                <Link className="nav-link active" aria-current="page" to="/"><IconContext.Provider value={{ size: "1.5em" }}> <FaHome /> </IconContext.Provider>Home</Link>
                            </li>
                            <li className="nav-item">
                                {/*eslint-disable-next-line*/}
                                <Link className="nav-link" to="/about"><IconContext.Provider value={{ size: "1.5em" }}> <FcAbout /> </IconContext.Provider>About us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle dotransition" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.mode === "dark" ? <IconContext.Provider value={{ size: "1.5em" }}> <FaLightbulb /> </IconContext.Provider> : <IconContext.Provider value={{ size: "1.5em" }}> <FaLightbulb /> </IconContext.Provider>}{writemode + " Mode"}
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item dotransition" onClick={props.changedark}>Dark mode</li>
                                    <li><hr className="dropdown-divider dotransition" /></li>
                                    <li className="dropdown-item dotransition" onClick={props.changelight}>Light mode</li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = { title: propTypes.string, }