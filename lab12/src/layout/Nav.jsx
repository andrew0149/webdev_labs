import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import style from './Nav.module.css';
import measurement from "../images/measurement.svg";
import calculation from "../images/calculation.svg";

function Nav() {
    return (
        <nav className={style.nav}>
            <a href="/"> <img src={logo} alt="Logo" className={style.logo} /> </a>

            <div className={style.links}>
                <Link to="/services" className={style.link}>Services</Link>
                <Link to="/products" className={style.link}>Products</Link>
                <Link to="/about" className={style.link}>About us</Link>
                <Link to="/portfolio" className={style.link}>Portfolio</Link>
                <Link to="/faq" className={style.link}>FAQ</Link>
                <Link to="/contacts" className={style.link}>Contacts</Link>
            </div>

            <div className={style.buttons}>

                <div className={style.button} id={style.measurement}>
                    <img src={measurement} alt="Measurement" />
                    <p>Make request</p>
                </div>

                <div className={style.button} id={style.calculation}>
                    <img src={calculation} alt="Calculation" />
                    <p>Calculation</p>
                </div>

            </div>
        </nav>
    )
}

export default Nav;