import React from 'react'
import "./WarehouseListItem.scss"
import {Link} from "react-router-dom"
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse'

export default function WarehouseListItem(props) {
    return (
        <>
        <div className="warehouses-card">
            <div className="warehouses-card__container">
                <div className="warehouses-card__subcontainer">
                    <div className="warehouses-card__title">WAREHOUSE</div>
                    <Link to={"warehouse-details/"+props.warehouse.id}>
                        <div className="warehouses-card__detail warehouses-card__detail--clickable">{props.warehouse.name}<img src="\icons\chevron_right-24px.svg" alt="arrow icon"/></div>
                    </Link>
                    <div className="warehouses-card__title">ADDRESS</div>
                    <div className="warehouses-card__detail">{`${props.warehouse.address}, ${props.warehouse.city}, ${props.warehouse.country}`}</div>
                </div>
                <div className="warehouses-card__subcontainer">
                    <div className="warehouses-card__title">CONTACT NAME</div>
                    <div className="warehouses-card__detail">{props.warehouse.contact.name}</div>
                    <div className="warehouses-card__title">CONTACT INFORMATION</div>
                    <div className="warehouses-card__detail">{props.warehouse.contact.phone}<div>{props.warehouse.contact.email}</div></div>
                </div>
            </div>
            <div className="warehouses-card__buttons">
                {/* <button className="warehouses-card__delete" type="button"></button> */}
                <DeleteWarehouse name={props.warehouse.name}/>
                <button className="warehouses-card__edit" type="button"></button>
            </div>
        </div>
    <div className="warehouses-card--large-screen">
        <div className="warehouses-card__wrapper">
            <Link to={"warehouse-details/"+props.warehouse.id}>
                <div className="warehouses-card__detail warehouses-card__detail--clickable">{props.warehouse.name}<img src="\icons\chevron_right-24px.svg" alt="arrow icon"/></div>
            </Link>
            <div className="warehouses-card__detail">{`${props.warehouse.address}, ${props.warehouse.city}, ${props.warehouse.country}`}</div>
            <div className="warehouses-card__detail">{props.warehouse.contact.name}</div>
            <div className="warehouses-card__detail">{props.warehouse.contact.phone}<div>{props.warehouse.contact.email}</div></div>
            <div className="warehouses-card__buttons">
                {/* <button className="warehouses-card__delete" type="button"></button> */}
                <DeleteWarehouse name={props.warehouse.name}/>
                <button className="warehouses-card__edit" type="button"></button>
            </div>
        </div>
    </div>
    </>
    )
}
