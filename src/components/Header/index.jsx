import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { ReactComponent as NavInst } from "../../images/main/nav_inst.svg";
import { ReactComponent as NavLogo } from "../../images/main/nav_logo.svg";
import BackImg from "../../images/main/bgc.png";
import NavBar from "./NavBar";
import { useRef, useEffect } from "react";

const Header = () => {
    const ref = useRef();
    const mainRef = React.createRef();


    const handleReturn = () => {
        mainRef.current.classList.add('media_head');
        if(mainRef || mainRef.current.nextSibling.className === "head" ){
            mainRef.current.style.cssText = `
                background: url('${BackImg}');
                background-repeat: no-repeat;
                background-size: contain;
                min-height: 60em;
            `;
            mainRef.current.nextSibling.style.background = `inherit`;
        }
    }

    const handleChange = () => {
        mainRef.current.classList.remove('media_head');
        if(!ref.current.parentElement.nextSibling.className !== "head"){
            ref.current.parentElement.style.cssText = `
                background-color: #111111;
                min-height: auto;
            `;
        }
    }

    useEffect(() => {
        if(mainRef.current.nextSibling.className === "head" ){
            handleReturn();
        };
    })


    return (
        <>
            <header className="header" ref={mainRef}>
                <div className="nav-container" ref={ref}>
                    <nav className="nav">
                        <ul>
                            <li> 
                                <NavInst className="nav_inst"/>
                            </li>
                            <li><NavLink onClick={handleReturn} to={'/'} className="normal">Главная</NavLink></li>
                            <li><NavLink onClick={handleChange} to={'/masters'} className="normal">Мастера</NavLink></li>
                            <li><NavLink onClick={handleChange} to={'/cosmetics'} className="normal">Косметика</NavLink></li>
                            <li className="nav_logo"> 
                                <NavLogo className="nav_logo"/>
                            </li>
                            <li><NavLink onClick={handleChange} to={'/price'} className="normal">Цены</NavLink></li>
                            <li><NavLink onClick={handleChange} to={'/reviews'} className="normal">Отзывы</NavLink></li>
                            <li><NavLink onClick={handleChange} to={'/contacts'} className="normal">Контакты</NavLink></li>
                            <li><NavBar /></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
