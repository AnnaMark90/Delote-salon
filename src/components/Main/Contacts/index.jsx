import React from "react";
import LocationImg from "../../../images/contacts/location.png";
import "./style.css";
import "./media.css";

const Contacts = () => {

    return(
        <section className="contacts">
            <div className="contact_container">
                <div className="contact_title">
                    <h1>Контакты</h1>
                </div>
                <div className="contact_img">
                    <img src={LocationImg} alt="#" />
                </div>
                <div className="contact_blocks">
                    <div className="foot_block">
                            <div className="foot_title">Контакты</div>
                            <div className="foot_text" >+7 (812) 123-45-67</div>
                            <div className="foot_text" >+7 (911) 123-45-67</div>
                            <div className="foot_text" >Новоостровский проспект, дом 36 лит. С</div>
                    </div>
                    <div className="foot_block">
                            <div className="foot_title">Режим работы</div>
                            <div className="foot_text" >C 10:00 до 21:00 (Пн-Пт)</div>
                            <div className="foot_text" >С 11:00 до 20:00 (Сб-Вс)</div>
                    </div>
                    <div className="foot_block">
                            <div className="foot_title">Контакты</div>
                            <div className="foot_text" >+7 (812) 123-45-67</div>
                            <div className="foot_text" >+7 (911) 123-45-67</div>
                            <div className="foot_text" >Новоостровский проспект, дом 36 лит. С</div>
                    </div>
                    <div className="foot_block">
                            <div className="foot_title">Режим работы</div>
                            <div className="foot_text" >C 10:00 до 21:00 (Пн-Пт)</div>
                            <div className="foot_text" >С 11:00 до 20:00 (Сб-Вс)</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contacts;