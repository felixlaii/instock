import { Component } from "react";
import './AddInventoryItem.scss'
import ArrowBack from '../../assets/icons/arrow_back-24px.svg'
import axios from 'axios'
import error from '../../assets/icons/error-24px.svg'
class AddInventoryItem extends Component {
    state = {
        warehousesSet: [],
        inStock: false,
        validationError: {
            itemName: false,
            description: false,
            category: false,
            quantity: false,
        }
    }



    submitHandler = (event) => {
        const isFormValid = (form) => {
            let isValid = true;

            const previousState = { ...this.state }

            if (form.itemName.value.length < 3) {
                form.itemName.classList.add("inventory__border-error")
                previousState.validationError.itemName = true

                isValid = false
            } else {
                form.itemName.classList.remove("inventory__border-error")
                previousState.validationError.itemName = false
            }

            console.log(this.state.validationError)

            if (form.description.value.length < 3) {
                form.description.classList.add("inventory__border-error")
                previousState.validationError.description = true
                isValid = false
            } else {
                previousState.validationError.description = false
                form.description.classList.remove("inventory__border-error")
            }



            if (form.category.value.length < 3) {
                form.category.classList.add("inventory__border-error")
                previousState.validationError.category = true
                isValid = false
            } else {
                previousState.validationError.category = false
                form.category.classList.remove("inventory__border-error")
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

        event.preventDefault();
        const form = event.target.elements

        if (isFormValid(form)) {

            const postUrl = "http://localhost:8080/inventory/post";

            const warehouse = this.state.warehousesSet.find(warehouse => warehouse.id === form.warehouse.value)

            const newItem = {
                warehouseID: form.warehouse.value,
                warehouseName: warehouse.name,
                itemName: form.itemName.value,
                description: form.description.value,
                category: form.category.value,
                status: form.in_stock.value,
                quantity: form.quantity.value
            }

            axios
                .post(postUrl, newItem)
                .then(response => {
                    console.log(response.data)
                })
        }
    }

    onChangeHandler = (event) => {
        const element = event.target
        const value = element.value


        if (isNaN(parseInt(value)) || parseInt(value) <= 0) {
            element.classList.add("inventory__border-error")
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
        axios.get('http://localhost:8080/').then(response => {
            this.setState({
                warehousesSet: response.data
            })
        }).catch(err => {
            console.log(err)
        })

        console.log(this.state.warehousesSet)
    }



    render() {

        return (
            <section className='inventory' >
                <form className='inventory__container' method="post" onSubmit={this.submitHandler}>
                    <div className='inventory__header'>
                        <img className='inventory__arrow' src={ArrowBack} />
                        <h1>Add New Inventory Item</h1>
                    </div>
                    <div className='inventory__item-details'>
                        <h4 className='inventory__details'>Item Details</h4>
                        <div className='inventory__input-column'>
                            <h6 className='inventory__item-name'>Item Name</h6>
                            <input name="itemName" className='inventory__input-item' type='text' placeholder='Item Name'></input>
                            {this.state.validationError.itemName &&
                                <p className="inventory__validation-error">
                                    <img className="inventory__error-image" src={error} alt="error" />
                                    This field is required!</p>}
                        </div>
                        <div className='inventory__input-column'>
                            <h6 className='inventory__item-name'>Description</h6>
                            <input name="description" className='inventory__input-description' type='text' placeholder='Please enter a brief item description...'></input>
                            {this.state.validationError.itemName &&
                                <p className="inventory__validation-error">
                                    <img className="inventory__error-image" src={error} alt="error" />
                                    This field is required!</p>}
                        </div>
                        <div className='inventory__input-column'>
                            <h6 className='inventory__item-name'>Category</h6>
                            <input name="category" className='inventory__input-category' type='text' placeholder='Please select'></input>
                            {this.state.validationError.category &&
                                <p className="inventory__validation-error">
                                    <img className="inventory__error-image" src={error} alt="error" />
                                    This field is required!</p>}
                        </div>
                    </div>
                    <div className='inventory__item-availability'>
                        <h4 className='inventory__availability'>Item Availability</h4>
                        <h6 className='inventory__item-name'>Status</h6>
                        <div className='inventory__status-container'>
                            <div className='inventory__instock'>
                                {this.state.inStock ? <input type='radio' id="inStock" name='in_stock' value="In Stock" defaultChecked /> : <input type='radio' id="inStock" name='in_stock' value="In Stock" disabled />}

                                <label className='inventory__instock-label' htmlFor="inStock">In stock</label>
                            </div>
                            <div className='inventory__instock'>
                                {this.state.inStock ? <input type='radio' id="outOfStock" name='in_stock' value="Out of Stock" disabled /> : <input type='radio' id="outOfStock" name='in_stock' value="Out of Stock" defaultChecked />}
                                <label className="inventory__instock-label" htmlFor='outOfStock'>Out of stock</label>
                            </div>
                        </div>
                        <div className='inventory__input-column'>
                            <h6 className='inventory__item-name'>Quantity</h6>
                            <input onChange={this.onChangeHandler} name='quantity' className='inventory__input-quantity ' type='text' placeholder='0'></input>
                            {this.state.validationError.quantity &&
                                <p className="inventory__validation-error">
                                    <img className="inventory__error-image" src={error} alt="error" />
                                    This field is required!
                                </p>}
                        </div>
                        <div className='inventory__input-column'>
                            <h6 className='inventory__item-name'>Warehouses</h6>
                            <select name="warehouse" className='inventory__input-warehouses' type='select' placeholder='Please select'>
                                {this.state.warehousesSet.length > 0 &&
                                    this.state.warehousesSet.map(warehouse => (
                                        <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='inventory__button-container'>
                        <button className='inventory__cancel-button'>Cancel</button>
                        <button type='submit' className='inventory__add-button'>+ Add Item</button>
                    </div>
                </form>
            </section>
        )
    }
}


export default AddInventoryItem;