import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import './AddWarehouse.scss'

class AddWarehouse extends Component {

    addSuccess = (e) => {
        e.preventDefault();
        console.log('edited')
        const formData = e.target;
        const name = formData.name.value
        const address = formData.address.value
        const city = formData.city.value
        const country = formData.country.value
        const contactName = formData.contactName.value
        console.log(contactName)
        const position = formData.position.value
        const phone = formData.phone.value
        const email = formData.email.value
        if( !name || !address || !city || !country || !contactName || !position || !phone || !email)
        alert("You must fill out all fields!")
        axios.put(`/Warehouses/${this.state.selectedWarehouse.id}`, {
                name: formData.name.value,
                address: formData.address.value,
                city: formData.city.value,
                country: formData.country.value,
                contactName: formData.contactName.value,
                position: formData.position.value,
                phone: formData.phone.value,
                email: formData.email.value
            })
            .then(response => {
                console.log(response.data)
            })
            .catch((error) => (error))
            }

    render() {
        if (!this.state.selectedWarehouse.id) return <div><p className="loading">Loading...</p></div>
        
        return (
            <div className="warehouse-add">
                <h1 className="warehouse-add__header">Add New Warehouse</h1>

                <div className="warehouse-add__container">
                    <form onSubmit={this.addSuccess} className="warehouse-add__housedetails">
                        <div className="warehouse-add__card">
                            <h2 className="warehouse-add__subheader">Warehouse Details</h2>

                            <label className="warehouse-add__label">Warehouse Name</label>
                            <input className="warehouse-add__input" type="name" name="name" id="name" placeholder="Warehouse Name"></input>

                            <label className="warehouse-add__label">Street Address</label>
                            <input className="warehouse-add__input" type="text" name="address" placeholder="Street Address"></input>

                            <label className="warehouse-add__label">City</label>
                            <input className="warehouse-add__input" type="text" name="city" placeholder="City"></input>

                            <label className="warehouse-add__label">Country</label>
                            <input className="warehouse-add__input" type="text" name="country" placeholder="Country"></input>
                        </div>

                        <div className="warehouse-add__card">
                            <h2 className="warehouse-add__subheader">Contact Details</h2>

                            <label className="warehouse-add__label">Contact Name</label>
                            <input className="warehouse-add__input" type="text" name="contactName" placeholder="Contact Name"></input>

                            <label className="warehouse-add__label">Position</label>
                            <input className="warehouse-add__input" type="text" name="position" placeholder="Position"></input>

                            <label className="warehouse-add__label">Phone Number</label>
                            <input className="warehouse-add__input" type="text" name="phone" placeholder="Phone Number"></input>

                            <label className="warehouse-add__label">Email</label>
                            <input className="warehouse-add__input" type="text" name="email" placeholder="Email"></input>
                        </div>

                        <div className="warehouse-add__buttons">
                            <div className="warehouse-add__submit">
                                <input className="warehouse-add__save" type="submit" value="+ Add Warehouse"></input>
                            </div>

                            <div className="warehouse-add__cancelbutton">
                                <input className="warehouse-add__cancel" type="submit" value="Cancel"></input>
                            </div>
                        </div>
                    </form>
                </div>
            
            </div>
        )
    }
}
export default AddWarehouse
