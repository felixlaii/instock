import { Component } from "react";
import './EditInventoryItem.scss'
import ArrowBack from '../../assets/icons/arrow_back-24px.svg'
import axios from 'axios'
import error from '../../assets/icons/error-24px.svg'


class EditInventoryItem extends Component {
    state = {
        warehousesSet: [],
        inStock: false,
        itemDetails: {
            id: "",
            warehouseID: "",
            warehouseName: "",
            itemName: "",
            description: "",
            category: "",
            status: "",
            quantity: ""
        },
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
                form.itemName.classList.add("inventory-edit__border-error")
                previousState.validationError.itemName = true

                isValid = false
            } else {
                form.itemName.classList.remove("inventory-edit__border-error")
                previousState.validationError.itemName = false
            }

            console.log(this.state.validationError)

            if (form.description.value.length < 3) {
                form.description.classList.add("inventory-edit__border-error")
                previousState.validationError.description = true
                isValid = false
            } else {
                previousState.validationError.description = false
                form.description.classList.remove("inventory-edit__border-error")
            }

            if (form.category.value.length < 3) {
                form.category.classList.add("inventory-edit__border-error")
                previousState.validationError.category = true
                isValid = false
            } else {
                previousState.validationError.category = false
                form.category.classList.remove("inventory-edit__border-error")
            }

            if (isNaN(parseInt(form.quantity.value)) || parseInt(form.quantity.value) < 0) {
                form.quantity.classList.add("inventory-edit__border-error")
                previousState.validationError.quantity = true
                isValid = false
            } else {
                previousState.validationError.quantity = false
                form.quantity.classList.remove("inventory-edit__border-error")
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

            const postUrl = "http://localhost:8080/inventory/edit";

            const warehouse = this.state.warehousesSet.find(warehouse => warehouse.id === form.warehouse.value)

            const newItem = {
                id: this.state.itemDetails.id,
                warehouseID: form.warehouse.value,
                warehouseName: warehouse.name,
                itemName: form.itemName.value,
                description: form.description.value,
                category: form.category.value,
                status: form.in_stock.value,
                quantity: form.quantity.value
            }


            console.log("Saved Object: ", newItem)

            axios
                .put(postUrl, newItem)
                .then(response => {
                    console.log("Response on PUT: ", response.data)
                })
        }
    }

    onChangeHandler = (event) => {
        const element = event.target
        const value = element.value


        if (isNaN(parseInt(value)) || parseInt(value) <= 0) {
            element.classList.add("inventory-edit__border-error")
            this.setState({
                inStock: false
            })
        } else {
            element.classList.add("inventory-edit__border-error")
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

        const item_id = this.props.match.params.id
        axios.get(`http://localhost:8080/inventory/item/${item_id}`).then(response => {
            const itemDetails = response.data
            let value = itemDetails.quantity
            if (isNaN(parseInt(value)) || parseInt(value) <= 0) {
                this.setState({
                    inStock: false
                })
            } else {
                this.setState({
                    inStock: true
                })
            }

            this.setState({
                itemDetails: response.data
            })

            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })

        console.log(this.state.warehousesSet)
    }

    render() {
        console.log("Item details: ", this.state.itemDetails)
        return (
            <section className='inventory-edit' >
                <form className='inventory-edit__container' method="post" onSubmit={this.submitHandler}>
                    <div className='inventory-edit__header'>
                        <img className='inventory-edit__arrow' alt='icon of arrow facing left' src={ArrowBack} />
                        <h1 className='inventory-edit__new'>Edit Inventory Item</h1>
                    </div>
                    <div className='inventory-edit__breakpoint'>
                        <div className='inventory-edit__details-breakpoint'>
                            <div className='inventory-edit__item-details'>
                                <h4 className='inventory-edit__details'>Item Details</h4>
                                <div className='inventory-edit__input-column'>
                                    <h6 className='inventory-edit__item-name'>Item Name</h6>
                                    <input name="itemName" className='inventory-edit__input-item' type='text' placeholder='Item Name' defaultValue={this.state.itemDetails.itemName}></input>
                                    {this.state.validationError.itemName &&
                                        <p className="inventory-edit__validation-error">
                                            <img className="inventory-edit__error-image" alt='icon of exlamation symbol' src={error} alt="error" />
                                            This field is required!</p>}
                                </div>
                                <div className='inventory-edit__input-column'>
                                    <h6 className='inventory-edit__item-name'>Description</h6>
                                    <input name="description" className='inventory-edit__input-description' type='text' placeholder='Please enter a brief item description...' defaultValue={this.state.itemDetails.description}></input>
                                    {this.state.validationError.itemName &&
                                        <p className="inventory-edit__validation-error">
                                            <img className="inventory-edit__error-image" alt='icon of exlamation symbol' src={error} alt="error" />
                                            This field is required!</p>}
                                </div>
                                <div className='inventory-edit__input-column'>
                                    <h6 className='inventory-edit__item-name'>Category</h6>
                                    <input name="category" className='inventory-edit__input-category' type='text' placeholder='Please select' defaultValue={this.state.itemDetails.category}></input>
                                    {this.state.validationError.category &&
                                        <p className="inventory-edit__validation-error">
                                            <img className="inventory-edit__error-image" alt='icon of exlamation symbol' src={error} alt="error" />
                                            This field is required!</p>}
                                </div>
                            </div>
                        </div>
                        <div className='inventory-edit__availability-breakpoint'>
                            <div className='inventory-edit__item-availability'>
                                <h4 className='inventory-edit__availability'>Item Availability</h4>
                                <h6 className='inventory-edit__item-name'>Status</h6>
                                <div className='inventory-edit__status-container'>
                                    <div className='inventory-edit__instock'>
                                        {this.state.inStock ? <input type='radio' id="inStock" name='in_stock' value="In Stock" defaultChecked /> : <input type='radio' id="inStock" name='in_stock' value="In Stock" disabled />}

                                        <label className='inventory-edit__instock-label' htmlFor="inStock">In stock</label>
                                    </div>
                                    <div className='inventory-edit__instock'>
                                        {this.state.inStock ? <input type='radio' id="outOfStock" name='in_stock' value="Out of Stock" disabled /> : <input type='radio' id="outOfStock" name='in_stock' value="Out of Stock" defaultChecked />}
                                        <label className="inventory-edit__instock-label" htmlFor='outOfStock'>Out of stock</label>
                                    </div>
                                </div>
                                <div className='inventory__input-column' hidden>
                                    <h6 className='inventory__item-name'>Quantity</h6>
                                    <input onChange={this.onChangeHandler} name='quantity' className='inventory__input-quantity ' type='text' placeholder='0' defaultValue={this.state.itemDetails.quantity}></input>
                                    {this.state.validationError.quantity &&
                                        <p className="inventory__validation-error">
                                            <img className="inventory__error-image" src={error} alt="error" />
                                            This field is required!
                                        </p>}
                                </div>
                                <div className='inventory-edit__input-column'>
                                    <h6 className='inventory-edit__item-name'>Warehouses</h6>
                                    <select name="warehouse" className='inventory-edit__input-warehouses' type='select' placeholder='Please select'>
                                        {this.state.warehousesSet.length > 0 &&
                                            this.state.warehousesSet.map(warehouse => {
                                                if (warehouse.id === this.state.itemDetails.warehouseID) {
                                                    return <option key={warehouse.id} value={warehouse.id} selected >{warehouse.name}</option>
                                                } else {
                                                    return <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                                                }
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inventory-edit__button-container'>
                        <button className='inventory-edit__cancel-button'>Cancel</button>
                        <button type='submit' className='inventory-edit__add-button'>Save</button>
                    </div>
                </form>
            </section >
        )
    }
}


export default EditInventoryItem;