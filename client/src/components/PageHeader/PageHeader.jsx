import React from 'react';
import './PageHeader.scss';
import InStock from '../../assets/logo/InStock-Logo_1x.png';

function PageHeader() {
    return (
        <nav className="primary-nav">
            <div className="primary-nav__instock">
                <img className="primary-nav__instock--logo" src={InStock} alt="InStock Logo"></img>
            </div>
            <div className="primary-nav__nav">
                <ul className="primary-nav__list">
                    <li className="primary-nav__items">Warehouses</li>
                    <li className="primary-nav__items">Inventory</li>
                </ul>
            </div>
            
        </nav>
    )
}

export default PageHeader
