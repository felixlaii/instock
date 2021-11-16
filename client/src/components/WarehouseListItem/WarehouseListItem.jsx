import React from 'react'
import "./WarehouseListItem.scss"

export default function WarehouseListItem(props) {
    return (
        <div className="warehouses-card">
            <div className="warehouses-card__container">
                <div className="warehouses-card__subcontainer">
                    <div className="warehouses-card__title">WAREHOUSE</div>
                    <div className="warehouses-card__location">{props.warehouse.name}</div>
                    <div className="warehouses-card__title">ADDRESS</div>
                    <div className="warehouses-card__address">{`${props.warehouse.address}, ${props.warehouse.city}, ${props.warehouse.country}`}</div>
                </div>
                <div className="warehouses-card__subcontainer">
                    <div className="warehouses-card__title">CONTACT NAME</div>
                    <div className="warehouses-card__location">{props.warehouse.contact.name}</div>
                    <div className="warehouses-card__title">CONTACT INFORMATION</div>
                    <div className="warehouses-card__address">{props.warehouse.contact.phone}<span>{props.warehouse.contact.email}</span></div>
                </div>
            </div>
            <div className="warehouses-car__buttons">
                <button className="warehouses-car__delete" type="button"></button>
                <button className="warehouses-car__edit" type="button"></button>
            </div>
        </div>
    )
}
