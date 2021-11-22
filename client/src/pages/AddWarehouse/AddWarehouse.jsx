import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import './AddWarehouse.scss'

class AddWarehouse extends Component {

    state = {
        warehouseList: [],
        validationError: {
            name: false,
            address: false,
            city: false,
            country: false
        }
    }

    submitHandler = (e) => {
        const isFormValid = (form) => {
            let isValid = true;

            const previousState = { ...this.state }

            if (form.name.value.length < 3) {
                form.name.classList.add()
                previousState.validationError.name = true

                isValid = false
            } else {
                form.name.classList.remove()
                previousState.validationError.name = false
            }

            console.log(this.state.validationError)

            if (form.address.value.length < 3) {
                form.address.classList.add()
                previousState.validationError.address = true
                isValid = false
            } else {
                previousState.validationError.address = false
                form.address.classList.remove()
            }

            console.log(this.state.validationError)

            if (form.city.value.length < 3) {
                form.city.classList.add()
                previousState.validationError.city = true
                isValid = false
            } else {
                previousState.validationError.city = false
                form.city.classList.remove()
            }

            if (form.country.value.length < 3) {
                form.country.classList.add()
                previousState.validationError.country = true
                isValid = false
            } else {
                previousState.validationError.country = false
                form.country.classList.remove()
            }

            if (isNaN(parseInt(form.quantity.value)) || parseInt(form.quantity.value) <= 0) {
                form.quantity.classList.add("inventory__border-error")
                previousState.validationError.quantity = true
                isValid = false
            } else {
                previousState.validationError.quantity = false
                form.quantity.classList.remove("inventory__border-error")
        }

        this.setState(previousState)
        console.log(this.state.validationError)


        if (isValid) {
            return true;
        } else {
            return false
        }

    }

    e.preventDefault()
    const form = e.target.elements

    if (isFormValid(form)) {

        const postUrl = "http://localhost:8080/warehouses/post";
        const warehouse = this.state.warehouseList.find(warehouse => warehouse.id === form.warehouse.value)
        const newWarehouse = {
            warehouseID: form.warehouse.value,
            name: warehouse.name,
            address: form.address.value,
            city: form.city.value,
            country: form.country.value,
        }
        axios
        .post(postUrl, newWarehouse)
        .then(response => {
            console.log(response.data)
        })
    }
}
    onChangeHandler = (event) => {
        const element = event.target
        const value = element.value

        if (isNaN(parseInt(value)) || parseInt(value) <= 0) {
            element.classList.add()
            this.setState({
                inStock: false
            })

        } else {
            element.classList.add("inventory__border-error")
            this.setState({
                inStock: true
            })
        }
    }

    componentDidMount() {
        axios.get
    }

    addSuccess = (e) => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value
        const address = formData.address.value
        const city = formData.city.value
        const country = formData.country.value
        const contactName = formData.contactName.value
        const position = formData.position.value
        const phone = formData.phone.value
        const email = formData.email.value
        if( !name || !address || !city || !country || !contactName || !position || !phone || !email)
        alert("You must fill out all fields!")
        axios.post(`/Warehouses`, {
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
