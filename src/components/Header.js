import React, { useState } from 'react'

import '../styles/Header.css'
import Item from './NavigationItem.js'

const Header = () => {
    const [activeId, setActiveId] = useState("aboutus");

    const onNavClick = (e) => {
        setActiveId(e.currentTarget.id);
    }

    return (
        <header>
            <div className="information-block">
                <div className="information-block__geo-location">
                    <h4>Наше месторасположение</h4>
                    <span>Кизомыс, Херсонская область, 75005</span>
                </div>
                <div className="information-block__contacts">
                    <h4>Наши контакты</h4>
                    <div>
                        <i className="phone icon"></i>
                        <span>+38(088)-88-88-888 - Таня</span>
                        <br />
                        <i className="phone icon"></i>
                        <span>+38(099)-99-99-999 - Инна</span>
                    </div>
                </div>
            </div>
            <h1>База отдыха &#xab;У Тани-Инны&#xbb;</h1>
            <div className="navigation-bar">
                <Item id="aboutus" title="О нас" to="/" activeId={activeId} onClick={onNavClick}/>
                <Item id="services" title="Услуги" to="/services" activeId={activeId} onClick={onNavClick}/>
                <Item id="boats" title="Лодки" to="/boats" activeId={activeId} onClick={onNavClick}/>
                <Item id="rooms" title="Комнаты" to="/rooms" activeId={activeId} onClick={onNavClick}/>
            </div>
        </header>
    );
}

export default Header;