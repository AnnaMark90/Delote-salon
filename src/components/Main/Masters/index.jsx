import React from "react";
import Mast1Img from "../../../images/masters/mast1.png";
import Mast2Img from "../../../images/masters/mast2.png";
import Mast3Img from "../../../images/masters/mast3.png";
import Mast4Img from "../../../images/masters/mast4.png";
import Mast5Img from "../../../images/masters/mast5.png";
import Frame from "../../../images/masters/mast_frame.svg"
import "./style.css";
import "./media.css";

const Masters = () => {

    return(
        <section className="masters">
            <div className="mast_container">
                <h1 className="mast_title">
                    Наши мастера
                </h1>
                <div className="mast_content">
                    <div className="mast_block">
                        <div className="mast_img">
                            <img src={Mast1Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="mast_desc">
                            <div className="mast_name">Елена Васильевна</div>
                            <div className="mast_work">Визажист</div>
                        </div>
                    </div>
                    <div className="mast_block">
                        <div className="mast_img">
                            <img src={Mast2Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="mast_desc">
                            <div className="mast_name">Елена Васильевна</div>
                            <div className="mast_work">Визажист</div>
                        </div>
                    </div>
                    <div className="mast_block">
                        <div className="mast_img">
                            <img src={Mast1Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="mast_desc">
                            <div className="mast_name">Елена Васильевна</div>
                            <div className="mast_work">Визажист</div>
                        </div>
                    </div>
                    <div className="mast_block">
                        <div className="mast_img">
                            <img src={Mast3Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="mast_desc">
                            <div className="mast_name">Елена Васильевна</div>
                            <div className="mast_work">Визажист</div>
                        </div>
                    </div>
                    <div className="mast_block">
                        <div className="mast_img">
                            <img src={Mast4Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="mast_desc">
                            <div className="mast_name">Елена Васильевна</div>
                            <div className="mast_work">Визажист</div>
                        </div>
                    </div>
                    <div className="mast_block">
                        <div className="mast_img">
                            <img src={Mast5Img} alt="#" />
                            <img className="frame_back" src={Frame} alt="#" />
                        </div>
                        <div className="mast_desc">
                            <div className="mast_name">Елена Васильевна</div>
                            <div className="mast_work">Визажист</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Masters;