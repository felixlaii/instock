import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './EditWarehouse.scss'
import errorImage from '../../assets/icons/error-24px.svg'
import backArrow from '../../assets/icons//arrow_back-24px.svg'

class EditWarehouse extends Component {
    state = {
        selectedWarehouse: null,
        errorName: "",
        errorAddress: "",
        errorCity: "",
        errorCountry: "",
        errorContactName: "",
        errorPosition: "",
        errorPhone: "",
        errorEmail: "",
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
        let warehouseId = "2922c286-16cd-4d43-ab98-c79f698aeab0"
        axios.get(`http://localhost:8080/warehouses/${warehouseId}`)
        .then((response) => {
            this.setState({
                selectedWarehouse: response.data
            })
        })
    }

    onSubmit = (e) => {
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

            if(!name.trim()) {
               this.setState({errorName: "warehouse-edit__border-error"})
               return;
            }

            if(!address.trim()) {
                this.setState({errorAddress: "warehouse-edit__border-error"})
                return;
            }

             if(!city.trim()) {
                this.setState({errorCity: "warehouse-edit__border-error"})
                return;
            }

             if(!country.trim()) {
                this.setState({errorCountry: "warehouse-edit__border-error"})
                return;
            }

             if(!contactName.trim()) {
                this.setState({errorContactName: "warehouse-edit__border-error"})
                return;
            }

             if(!position.trim()) {
                this.setState({errorPosition: "warehouse-edit__border-error"})
                return;
            }

             if(!phone.trim()) {
                this.setState({errorPhone: "warehouse-edit__border-error"})
                return;
            }

             if(!email.trim()) {
                this.setState({errorEmail: "warehouse-edit__border-error"})
                return;
            }

            let emailValid = (email) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }

            if(!emailValid(email)) {
                this.setState({errorEmail: "warehouse-edit__border-error"})
                return;
            }

            axios.put(`/warehouses/${this.state.selectedWarehouse.id}`, {

                name: formData.name.value,
                address: formData.address.value,
                city: formData.city.value,
                country: formData.country.value,
                contactName: formData.contactName.value,
                position: formData.position.value,
                phone: formData.phone.value,
                email: formData.email.value
            })
            .then((response) => {
                alert("Warehouse Updated Successfully!")
                this.props.history.goBack()
            })
            .catch((response) => {
                alert("Request cannot be processed. Try again!")
            })
         }

    render() {
        if (!this.state.selectedWarehouse) 
            return <div><p className="loading">Loading...</p></div>
        
        return (
            <div className="warehouse-edit">
                <div className="warehouse-edit__nav">
                    <Link to="/">
                        <img className="warehouse-edit__arrow" src={backArrow} alt="back arrow" />
                    </Link>
                        <h1 className="warehouse-edit__header">Edit Warehouse</h1>
                </div>
                <div className="warehouse-edit__container">
                    <form onSubmit={this.onSubmit} className="warehouse-edit__housedetails">
                        <div className="warehouse-edit__wrapper"> 
                            <div className="warehouse-edit__card">
                                <div className="warehouse-edit__warehouse">
                                    <h2 className="warehouse-edit__subheader">Warehouse Details</h2>

                                    <label className="warehouse-edit__label">Warehouse Name</label>
                                    <input className="warehouse-edit__input" type="name" name="name" id="name" placeholder={this.state.selectedWarehouse.name}></input>
                                        {this.state.errorName && 
                                        <p className="warehouse-edit__validation-error">
                                            <img className="warehouse-edit__error-image" src={errorImage} alt="error" />
                                            this field is required!</p>}
                                
                                    <label className="warehouse-edit__label">Street Address</label>
                                    <input className="warehouse-edit__input"type="text" name="address" placeholder={this.state.selectedWarehouse.address}></input>
                                        {this.state.errorAddress && 
                                        <p className="warehouse-edit__validation-error">
                                        <img className="warehouse-edit__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}

                                    <label className="warehouse-edit__label">City</label>
                                    <input className="warehouse-edit__input" type="text" name="city" placeholder={this.state.selectedWarehouse.city}></input>
                                        {this.state.errorCity && 
                                        <p className="warehouse-edit__validation-error">
                                        <img className="warehouse-edit__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}

                                    <label className="warehouse-edit__label">Country</label>
                                    <input className="warehouse-edit__input" type="text" name="country" placeholder={this.state.selectedWarehouse.country}></input>
                                        {this.state.errorCountry && 
                                        <p className="warehouse-edit__validation-error">
                                        <img className="warehouse-edit__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}
                                </div>        
                            </div>

                            <div className="warehouse-edit__card">
                                <div className="warehouse-edit__contact">

                                    <h2 className="warehouse-edit__subheader">Contact Details</h2>

                                    <label className="warehouse-edit__label">Contact Name</label>
                                    <input className="warehouse-edit__input" type="text" name="contactName" placeholder={this.state.selectedWarehouse.contact.name}></input>
                                        {this.state.errorContactName && 
                                        <p className="warehouse-edit__validation-error">
                                        <img className="warehouse-edit__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}

                                    <label className="warehouse-edit__label">Position</label>
                                    <input className="warehouse-edit__input" type="text" name="position" placeholder={this.state.selectedWarehouse.contact.position}></input>
                                        {this.state.errorPosition && 
                                        <p className="warehouse-edit__validation-error">
                                        <img className="warehouse-edit__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}
                                
                                    <label className="warehouse-edit__label">Phone Number</label>
                                    <input className="warehouse-edit__input" type="text" name="phone" placeholder={this.state.selectedWarehouse.contact.phone}></input>
                                        {this.state.errorPhone && 
                                        <p className="warehouse-edit__validation-error">
                                        <img className="warehouse-edit__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}


                                    <label className="warehouse-edit__label">Email</label>
                                    <input className="warehouse-edit__input" type="text" name="email" placeholder={this.state.selectedWarehouse.contact.email}></input>
                                        {this.state.errorEmail && 
                                        <p className="warehouse-edit__validation-error">
                                        <img className="warehouse-edit__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}
                                </div>
                            </div>
                        </div>                            
                        <div className="warehouse-edit__buttons">
                            <div className="warehouse-edit__submit">
                                <input className="warehouse-edit__save" type="submit" value="Save"></input>
                            </div>
                            <Link to="/">                    
                                <div className="warehouse-edit__cancelbutton">
                                    <input className="warehouse-edit__cancel" type="submit" value="Cancel"></input>
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        
        )
    }
}
export default EditWarehouse
