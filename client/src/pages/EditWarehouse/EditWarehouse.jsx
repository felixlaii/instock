import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import './EditWarehouse.scss'

class EditWarehouse extends Component {

    state = {
        selectedWarehouse: {},
        warehouseList: []
    }

    getSelectedWarehouse = (warehouseId) => {
        axios.get(`/warehouses/${warehouseId}`)
        .then((response) => {
            this.setState({
                selectedWarehouse: response.data
            })
        })
        .catch((error) => (error))
    }

    componentDidMount() {
        axios.get(`/warehouses`)
        .then((response) => {
            console.log(response.data)
            this.setState({
                warehouseList: response.data
            })
            const warehouseId = this.props.match.params.warehouseId || response.data[0].id

            this.getSelectedWarehouse(warehouseId)
        })
        .catch((error) => (error))
    }

  

    // componentDidUpdate(previousProps) {
    //     const previousWarehouseId = previousProps.match.params.warehouseId
    //     const currentWarehouseId = this.props.match.params.warehouseId

    //     if(previousWarehouseId !== currentWarehouseId) {
    //         this.getSelectedWarehouse(currentWarehouseId)
    //     }
    // }

    editSuccess = (e) => {
        e.preventDefault();
        // const data = new formData(event.target);
        // const value = data.get('name')
        // axios.get(`http://localhost:8080/Warehouses`, {
        //     "name": e.target.name.value,
        //     "address": e.target.address.value,
        //     "city": e.target.city.value,
        //     "country": e.target.country.value,
        // })
        // console.log()
    }

    render() {
        if (!this.state.selectedWarehouse.id) return <div><p className="loading">Loading...</p></div>

        // let warehouseContacts = selectedWarehouse.contact.map (contact => {
        //     name: contact.name,
        //     position: contact.position,
        //     phone: contact.phone,
        //     email: contact.email
        // })
    
        // const filteredWarehouse = this.state.warehouseList.filter(warehouse => warehouse.id !== this.state.selectedWarehouse.id)

        return (
            <div className="warehouse-edit">
                <h1 className="warehouse-edit__header">Edit Warehouse</h1>

                <div className="warehouse-edit__container">
                    <form onSubmit={this.editSuccess} className="warehouse-edit__housedetails">
                        <div className="warehouse-edit__card">
                        <label className="warehouse-edit__label" for="name">Warehouse Name</label>
                        <input className="warehouse-edit__input" type="name" name="name" id="name" placeholder={this.state.selectedWarehouse.name}></input>

                        <label className="warehouse-edit__label">Street Address</label>
                        <input className="warehouse-edit__input" type="text" name="address" placeholder={this.state.selectedWarehouse.address}></input>

                        <label className="warehouse-edit__label">City</label>
                        <input className="warehouse-edit__input" type="text" name="city" placeholder={this.state.selectedWarehouse.city}></input>

                        <label className="warehouse-edit__label">Country</label>
                        <input className="warehouse-edit__input" type="text" name="country" placeholder={this.state.selectedWarehouse.country}></input>
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
