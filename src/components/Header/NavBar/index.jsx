import React, {useState, useEffect} from "react"
import "./style.css";
import Close from "../../../images/main/close.svg"
import Header from "..";

const NavBar = () => {
    const [burger_class, setBurgerLine] =  useState("burger-bar visible");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setMenuClass("menu visible");
        }else{
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    
    return (
        <>
            <div>
            <div className="burger-nav">
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </div>
                <div className={menu_class}>
                    <img src={Close} alt="#" className='close_img' onClick={updateMenu} />
 
                    <div className="route_links">
                        {/* <ul>
                            <li><NavLink to={'/'} className="normal">Главная</NavLink></li>
                            <li><NavLink to={'/masters'} className="normal">Мастера</NavLink></li>
                            <li><NavLink to={'/cosmetics'} className="normal">Косметика</NavLink></li>
                            <li><NavLink to={'/price'} className="normal">Цены</NavLink></li>
                            <li><NavLink to={'/reviews'} className="normal">Отзывы</NavLink></li>
                            <li><NavLink to={'/contacts'} className="normal">Контакты</NavLink></li>
                        </ul> */}
                    </div>

                    <div className="menu-block">
                        <p className="menu_text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl est felis id volutpat. Sed dolor fermentum amet lectus nibh quis. Tortor donec pellentesque leo ac placerat. Morbi.</p>
                    </div>
                    <div className="menu-block">
                            <div className="menu_title">Контакты</div>
                            <div className="menu_text" >+7 (812) 123-45-67</div>
                            <div className="menu_text" >+7 (911) 123-45-67</div>
                            <div className="menu_text" >Новоостровский проспект, дом 36 лит. С</div>
                    </div>
                    <div className="menu-block">
                            <div className="menu_title">Режим работы</div>
                            <div className="menu_text" >C 10:00 до 21:00 (Пн-Пт)</div>
                            <div className="menu_text" >С 11:00 до 20:00 (Сб-Вс)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;