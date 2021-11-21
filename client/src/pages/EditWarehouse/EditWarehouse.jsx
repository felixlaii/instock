import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import './EditWarehouse.scss'

class EditWarehouse extends Component {

    state = {
        selectedWarehouse: {},
        warehouseList: [],
        // formData: {
        //     name: '',
        //     address: '',
        //     city: '',
        //     country: ''
        // }

    }

    getSelectedWarehouse = (warehouseId) => {
        axios.get(`/warehouses/${warehouseId}`)
        .then((response) => {
            console.log(response.data.contact)
            this.setState({
                selectedWarehouse: response.data
            })
        })
        .catch((error) => (error))
    }

    componentDidMount() {
        axios.get(`/warehouses`)
        .then((response) => {
            this.setState({
                warehouseList: response.data
            })
            const warehouseId = this.props.match.params.warehouseId || response.data[0].id

            this.getSelectedWarehouse(warehouseId)
        })
        .catch((error) => (error))
    }

    componentDidUpdate(previousProps) {
        const previousWarehouseId = previousProps.match.params.warehouseId
        const currentWarehouseId = this.props.match.params.warehouseId

        if(previousWarehouseId !== currentWarehouseId) {
            this.getSelectedWarehouse(currentWarehouseId)
        }
    }

    editSuccess = (e) => {
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
        
    
        // const filteredWarehouse = this.state.warehouseList.filter(warehouse => warehouse.id !== this.state.selectedWarehouse.id)

        return (
            <div className="warehouse-edit">
                <h1 className="warehouse-edit__header">Edit Warehouse</h1>

                <div className="warehouse-edit__container">
                    <form onSubmit={this.editSuccess} className="warehouse-edit__housedetails">
                        <div className="warehouse-edit__card">
                            <h2 className="warehouse-edit__subheader">Warehouse Details</h2>

                            <label className="warehouse-edit__label">Warehouse Name</label>
                            <input className="warehouse-edit__input" type="name" name="name" id="name" placeholder={this.state.selectedWarehouse.name}></input>

                            <label className="warehouse-edit__label">Street Address</label>
                            <input className="warehouse-edit__input" type="text" name="address" placeholder={this.state.selectedWarehouse.address}></input>

                            <label className="warehouse-edit__label">City</label>
                            <input className="warehouse-edit__input" type="text" name="city" placeholder={this.state.selectedWarehouse.city}></input>

                            <label className="warehouse-edit__label">Country</label>
                            <input className="warehouse-edit__input" type="text" name="country" placeholder={this.state.selectedWarehouse.country}></input>
                        </div>
                        {/* </form>
                        <form onSubmit={this.editSuccess} className="warehouse-edit__housedetails"> */}

                        <div className="warehouse-edit__card">
                            <h2 className="warehouse-edit__subheader">Contact Details</h2>

                            <label className="warehouse-edit__label">Contact Name</label>
                            <input className="warehouse-edit__input" type="text" name="contactName" placeholder={this.state.selectedWarehouse.contact.name}></input>

                            <label className="warehouse-edit__label">Position</label>
                            <input className="warehouse-edit__input" type="text" name="position" placeholder={this.state.selectedWarehouse.contact.position}></input>

                            <label className="warehouse-edit__label">Phone Number</label>
                            <input className="warehouse-edit__input" type="text" name="phone" placeholder={this.state.selectedWarehouse.contact.phone}></input>

                            <label className="warehouse-edit__label">Email</label>
                            <input className="warehouse-edit__input" type="text" name="email" placeholder={this.state.selectedWarehouse.contact.email}></input>
                        </div>

                        <div className="warehouse-edit__buttons">
                            <div className="warehouse-edit__submit">
                                <input className="warehouse-edit__save" type="submit" value="Save"></input>
                            </div>

                            <div className="warehouse-edit__cancelbutton">
                                <input className="warehouse-edit__cancel" type="submit" value="Cancel"></input>
                            </div>
                        </div>
                    </form>
                </div>
            
            </div>
        )
    }
}
export default EditWarehouse
