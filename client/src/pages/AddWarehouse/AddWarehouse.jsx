import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import './AddWarehouse.scss'
import errorImage from '../../assets/icons/error-24px.svg'


class AddWarehouse extends Component {

    state = {
        warehouseList: null,
        errorName: "",
        errorAddress: "",
        errorCity: "",
        errorCountry: "",
        errorContactName: "",
        errorPosition: "",
        errorPhone: "",
        errorEmail: "",
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

        if(!name.trim()) {
            this.setState({errorName: "warehouse-add__border-error"})
            return;
         }

         if(!address.trim()) {
             this.setState({errorAddress: "warehouse-add__border-error"})
             return;
         }

          if(!city.trim()) {
             this.setState({errorCity: "warehouse-add__border-error"})
             return;
         }

          if(!country.trim()) {
             this.setState({errorCountry: "warehouse-add__border-error"})
             return;
         }

          if(!contactName.trim()) {
             this.setState({errorContactName: "warehouse-add__border-error"})
             return;
         }

          if(!position.trim()) {
             this.setState({errorPosition: "warehouse-add__border-error"})
             return;
         }

          if(!phone.trim()) {
             this.setState({errorPhone: "warehouse-add__border-error"})
             return;
         }

          if(!email.trim()) {
             this.setState({errorEmail: "warehouse-add__border-error"})
             return;
         }

         let emailValid = (email) => {
             const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(String(email).toLowerCase());
         }

         if(!emailValid(email)) {
             this.setState({errorEmail: "warehouse-add__border-error"})
             return;
         }
         const newWarehouse = {
            name: formData.name.value,
            address: formData.address.value,
            city: formData.city.value,
            country: formData.country.value,
            contact: {
                "name": formData.contactName.value,
                "position": formData.position.value,
                "phone": formData.phone.value,
                "email": formData.email.value
            }
         }

         axios.post(`http://localhost:8080/warehouses`, newWarehouse)
        .then((response) =>{
            alert("Warehouse Added!")
        })
        .catch((response) => {
            alert("Request cannot be processed. Try again!")
        })
    }

    componentDidMount() {
        axios.get(`/warehouses`)
        .then(response => {
            this.setState({
                warehouseList: response.data
            })
        })
    }

    render() {        
        return (
            <div className="warehouse-add">
                <h1 className="warehouse-add__header">Add New Warehouse</h1>

                <div className="warehouse-add__container">
                    <form onSubmit={this.addSuccess} className="warehouse-add__housedetails">
                        
                        <div className="warehouse-add__card">
                            <div className="warehouse-add__warehouse">
                                <h2 className="warehouse-add__subheader">Warehouse Details</h2>

                                    <input className="warehouse-add__input" type="name" name="name" id="name" placeholder="Warehouse Name"></input>
                                        {this.state.errorName && 
                                        <p className="warehouse-add__validation-error">
                                        <img className="warehouse-add__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}


                                    <label className="warehouse-add__label">Street Address</label>
                                    <input className="warehouse-add__input" type="text" name="address" placeholder="Street Address"></input>
                                        {this.state.errorAddress && 
                                        <p className="warehouse-add__validation-error">
                                        <img className="warehouse-add__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}


                                    <label className="warehouse-add__label">City</label>
                                    <input className="warehouse-add__input" type="text" name="city" placeholder="City"></input>
                                        {this.state.errorCity && 
                                        <p className="warehouse-add__validation-error">
                                        <img className="warehouse-add__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}



                                    <label className="warehouse-add__label">Country</label>
                                    <input className="warehouse-add__input" type="text" name="country" placeholder="Country"></input>
                                        {this.state.errorCountry && 
                                        <p className="warehouse-add__validation-error">
                                        <img className="warehouse-add__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}
                            </div>
                        </div>

                        <div className="warehouse-add__card">
                            <div className="warehouse-add__contact">
                                <h2 className="warehouse-add__subheader">Contact Details</h2>

                                    <label className="warehouse-add__label">Contact Name</label>
                                    <input className="warehouse-add__input" type="text" name="contactName" placeholder="Contact Name"></input>
                                        {this.state.errorContactName && 
                                        <p className="warehouse-add__validation-error">
                                        <img className="warehouse-add__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}

                                    <label className="warehouse-add__label">Position</label>
                                    <input className="warehouse-add__input" type="text" name="position" placeholder="Position"></input>
                                        {this.state.errorPosition && 
                                        <p className="warehouse-add__validation-error">
                                        <img className="warehouse-add__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}

                                    <label className="warehouse-add__label">Phone Number</label>
                                    <input className="warehouse-add__input" type="text" name="phone" placeholder="Phone Number"></input>
                                        {this.state.errorPhone && 
                                        <p className="warehouse-add__validation-error">
                                        <img className="warehouse-add__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}

                                    <label className="warehouse-add__label">Email</label>
                                    <input className="warehouse-add__input" type="text" name="email" placeholder="Email"></input>
                                        {this.state.errorEmail && 
                                        <p className="warehouse-add__validation-error">
                                        <img className="warehouse-add__error-image" src={errorImage} alt="error" />
                                        this field is required!</p>}
                            </div>
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
