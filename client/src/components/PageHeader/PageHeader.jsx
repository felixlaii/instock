import React from 'react';
import './PageHeader.scss';
import InStock from '../../assets/logo/InStock-Logo_1x.png';
import { Link } from 'react-router-dom';

function PageHeader() {
    return (
        <nav className="primary-nav">
            <div className="primary-nav__instock">
                <Link to="/">
                    <img className="primary-nav__instock--logo" src={InStock} alt="InStock Logo"></img>
                </Link>
            </div>
            <div className="primary-nav__nav">
                <ul className="primary-nav__list">
                    <Link to="/">
                        <li className="primary-nav__items">Warehouses</li>
                    </Link>
                    <Link to="/inventory">
                        <li className="primary-nav__items">Inventory</li>
                    </Link>
                </ul>
            </div>
            
        </nav>
    )
}

export default PageHeader
