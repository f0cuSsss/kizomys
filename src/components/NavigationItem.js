import React from 'react'
import { Link } from 'react-router-dom'

const NavigationItem = (props) => {
    return (
        <div>
            <Link to={props.to}>
                <div 
                    id={props.id} 
                    className={props.activeId === props.id && 'nav-item-active'}
                    onClick={props.onClick}
                >
                    {props.title}
                </div>
            </Link>
        </div>
    );
}

export default NavigationItem;