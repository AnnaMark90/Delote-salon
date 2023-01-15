import React from "react";
import LogoFoot from "../../images/main/foot_logo.svg";
import LogoInst from "../../images/main/foot_inst.svg";
import "./style.css";
import "./media.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="foot_container">
                    <div className="foot_block">
                        <img className="foot_logo" src={LogoFoot} alt="#" />
                    </div>
                    <div className="foot_block">
                        <div className="foot_title">Контакты</div>
                        <div className="foot_text">+7 (812) 123-45-67</div>
                        <div className="foot_text">+7 (911) 123-45-67</div>
                        <div className="foot_text">Новоостровский проспект, дом 36 лит. С</div>
                    </div>
                    <div className="foot_block">
                        <div className="foot_title">Режим работы</div>
                        <div className="foot_text">C 10:00 до 21:00 (Пн-Пт)</div>
                        <div className="foot_text">С 11:00 до 20:00 (Сб-Вс)</div>
                    </div>
                    <div className="foot_block">
                        <div className="foot_title">Мы в Instagram</div>
                        <img src={LogoInst} alt="#" className="block_logo" />
                    </div>
                </div>
                <div className="copy">
                    Copyright © 2017 - 2022
                </div>
            </footer>
        </>
    )
}

export default Footer;