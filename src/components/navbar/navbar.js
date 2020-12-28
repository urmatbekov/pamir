import React, {useEffect, useState} from 'react';
import "./navbar.css";
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    const [top, setTop] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    const onScroll = (e) => {
        let scrollTop = e.currentTarget.pageYOffset;
        setTop(scrollTop)
    }

    return (
        <nav className={top < 10 ? "navbar" : "navbar navbar-reverse"}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={""}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={""}>Travell</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={""}>About Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={""}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;