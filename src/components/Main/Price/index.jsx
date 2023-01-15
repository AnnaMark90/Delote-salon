import React, {cloneElement} from "react";
import { createRef } from "react";
import PriceImg from "../../../images/price/price.png";
import "./style.css";
import "./media.css";

const Price = () => {

    return(
        <section className="price">
            <div className="price_container">
                <h1 className="price_title">Цены на услуги</h1>
                <div className="price_blocks">
                    <div className="price_block">
                        <div className="price_img">
                            <img src={PriceImg} alt="#" />
                        </div>
                        <div className="price_content">
                            <div className="price_list">
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list">
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list" >
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list">
                                    <div className="price_text">
                                        <div className="price_name">Женская укладка</div>
                                        <div className="price_plus">
                                            <a className="add_serv" href="#">+</a>
                                            <span> обработка кончинков волос</span>
                                        </div>
                                    </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                        </div>
                    </div>
                    <div className="price_block">
                        <div className="price_content">
                            <div className="price_list">
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list" >
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list" >
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list">
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                        </div>
                        <div className="price_img">
                            <img src={PriceImg} alt="#" />
                        </div>
                    </div>
                    <div className="price_block">
                        <div className="price_img">
                            <img src={PriceImg} alt="#" />
                        </div>
                        <div className="price_content">
                            <div className="price_list">
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list" >
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list">
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                            <div className="price_list">
                                <div className="price_text">
                                    <div className="price_name">Женская укладка</div>
                                    <div className="price_plus">
                                        <a className="add_serv" href="#">+</a>
                                        <span> обработка кончинков волос</span>
                                    </div>
                                </div>
                                <div className="price_num">1 000 &#8381;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Price;