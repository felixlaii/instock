import React from 'react'
import { Component } from 'react'
import axios from 'axios'

class EditWarehouse extends Component {

    editSuccess = (e) => {
        e.preventDefault();
         axios.put(`/warehouses`, {
             
         })
    }

    render() {
        return (
            <div className="warehouse-edit">
                <h1 className="warehouse-edit__header">Edit Warehouse</h1>

                <div className="warehouse-edit__container">
                    <form className="warehouse-edit__housedetails">
                        <div className="warehouse-edit__card">
                        <label className="warehouse-edit__label">Warehouse Name</label>
                        <input className="warehouse-edit__input" type="text" name="name" placeholder="King West"></input>

                        <label className="warehouse-edit__label">Street Address</label>
                        <input className="warehouse-edit__input" type="text" name="address" placeholder="469 King Street West"></input>

                        <label className="warehouse-edit__label">City</label>
                        <input className="warehouse-edit__input" type="text" name="city" placeholder="Toronto"></input>

                        <label className="warehouse-edit__label">Country</label>
                        <input className="warehouse-edit__input" type="text" name="country" placeholder="CAN"></input>
                        </div>
                    </form>

                    <form className="warehouse-edit__contactdetails">
                        <div className="warehouse-edit__card">
                        <label className="warehouse-edit__label">Contact Name</label>
                        <input className="warehouse-edit__input" type="text" name="name" placeholder="Graeme Lyon"></input>

                        <label className="warehouse-edit__label">Position</label>
                        <input className="warehouse-edit__input" type="text" name="address" placeholder="Warehouse Manager"></input>

                        <label className="warehouse-edit__label">Phone Number</label>
                        <input className="warehouse-edit__input" type="text" name="city" placeholder="647 507 0911"></input>

                        <label className="warehouse-edit__label">Email</label>
                        <input className="warehouse-edit__input" type="text" name="country" placeholder="glyon@instock.com"></input>
                        </div>

                        <div className="warehouse-edit__submit">
                            
                        </div>
                    </form>
                </div>
            
            </div>
        )
    }
}
export default EditWarehouse
