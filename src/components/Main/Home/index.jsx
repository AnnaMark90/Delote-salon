import React from "react";
import { ReactComponent as Quotes } from "../../../images/main/quotes.svg";
import Ser1Img from "../../../images/main/serv1.png";
import Ser2Img from "../../../images/main/serv2.png";
import Ser3Img from "../../../images/main/serv3.png";
import Ser4Img from "../../../images/main/serv4.png";
import Ser5Img from "../../../images/main/serv5.png";
import Ser6Img from "../../../images/main/serv6.png";
import Logo1Img from "../../../images/main/logo1.png";
import Logo2Img from "../../../images/main/logo2.png";
import Logo3Img from "../../../images/main/logo3.png";
import Logo4Img from "../../../images/main/logo4.png";
import MakeUp from "../../../images/main/makeup.png";
import MakeUp2 from "../../../images/main/makeup2.png";
import Nails from "../../../images/main/nails.png";
import Nails2 from "../../../images/main/nails2.png";
import Other from "../../../images/main/other.png";
import Other2 from "../../../images/main/other2.png";
import Other3 from "../../../images/main/other3.png";
import Other4 from "../../../images/main/other4.png";
import Other5 from "../../../images/main/other5.png";
import Frame from "../../../images/main/frame.svg";
import "./style.css";
import "./media.css";
import { useState } from "react";

const Home = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (i) => {
        setToggleState(i);
    }

    return ( 
        <>
            <section className="head">
                <div className="head_title">
                Салон красоты <br /> «Delote-Beauty» <br />на Крестовском
                </div>
            </section>
            <section className="about">
                <Quotes className='about_quotes' />
                <div className="about_text">
                    <div className="text_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis. 
                    Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</div>
                </div>
            </section>
            <section className="services">
                <div className="blocks_serv">
                    <div className="block_serv">
                        <div className="block_frame">
                            <img src={Ser1Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="block_title">
                            Парикмахерские услуги
                        </div>
                    </div>
                    <div className="block_serv">
                        <div className="block_frame">
                            <img src={Ser2Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="block_title">
                            Маникюр
                        </div>
                    </div>
                    <div className="block_serv">
                        <div className="block_frame">
                            <img src={Ser3Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="block_title">
                            Педикюр
                        </div>
                    </div>
                    <div className="block_serv">
                        <div className="block_frame">
                            <img src={Ser4Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="block_title">
                            Косметология
                        </div>
                    </div>
                    <div className="block_serv">
                        <div className="block_frame">
                            <img src={Ser5Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="block_title">
                            Эстетист по телу
                        </div>
                    </div>
                    <div className="block_serv">
                        <div className="block_frame">
                            <img src={Ser6Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="block_title">
                            Визаж
                        </div>
                    </div>
                </div>
            </section>
            <section className="firms">
                <div className="firms_container">
                    <div className="firm">
                        <img src={Logo1Img} alt="#" />
                    </div>
                    <div className="firm">
                        <img src={Logo2Img} alt="#" />
                    </div>
                    <div className="firm">
                        <img src={Logo3Img} alt="#" />
                    </div>
                    <div className="firm">
                        <img src={Logo4Img} alt="#" />
                    </div>
                </div>
            </section>
            <section className="our_work">
                <h2>Наши работы</h2>
                <div className="work_links">
                    <ul>
                        <li className={toggleState === 1 ? "active_link" : "normal_link"} onClick={() => toggleTab(1)}>
                            Показать все
                        </li>
                        <li className={toggleState === 2 ? "active_link" : "normal_link"} onClick={() => toggleTab(2)} >
                            Парикмахерские услуги
                        </li>
                        <li className={toggleState === 3 ? "active_link" : "normal_link"} onClick={() => toggleTab(3)}>
                            Маникюр
                        </li>
                        <li className={toggleState === 4 ? "active_link" : "normal_link"} onClick={() => toggleTab(4)}>
                            Макияж
                        </li>
                    </ul>

                    <div className={toggleState === 1 ? "work_img" : "unshow"}>
                        <img src={Other} alt="#" />
                        <img src={MakeUp} alt="#" />
                        <img src={Nails} alt="#" />
                        <img src={MakeUp2} alt="#" />
                        <img src={Other2} alt="#" />
                        <img src={Other3} alt="#" />
                        <img src={Nails2} alt="#" />
                        <img src={Other4} alt="#" />
                        <img src={Other5} alt="#" />
                    </div>

                    <div className={toggleState === 2 ? "work_img" : "unshow"}>
                        <img src={Other2} alt="#" />
                        <img src={Other3} alt="#" />
                        <img src={Other4} alt="#" />
                        <img src={Other5} alt="#" />
                    </div>

                    <div className={toggleState === 4 ? "work_img two_show" : "unshow"}>
                        <img src={MakeUp} alt="#" />
                        <img src={MakeUp2} alt="#" />
                    </div>

                    <div className={toggleState === 3 ? "work_img two_show" : "unshow"}>
                        <img src={Nails} alt="#" />
                        <img src={Nails2} alt="#" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;