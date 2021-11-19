import { Component } from "react"

export default class AddInventoryItem extends Component {

    <section className='inventory'>
    <div className='inventory__header'>
        <img />
        <h1>Add New Inventory Item</h1>
    </div>
    <div className='inventory__item-details'>
        <h4>Item Details</h4>
        <div className='inventory__input-column'>
            <h6>Item Name</h6>
            <input className='inventory__input-item' type='text' placeholder='Item Name'></input>
        </div>
        <div className='inventor__input-column'>
            <h6>Description</h6>
            <input className='inventory__input-description' type='text' placeholder='Please enter a brief item description'></input>
        </div>
        <div className='inventor__input-column'>
            <h6>Category</h6>
            <input className='inventory__input-category' type='text' placeholder='Please select'></input>
        </div>
    </div>
    <div className='inventory__item-availability'>
        <h4>Item Availability</h4>
        <div className='inventory__status-container'>
            <h6>Status</h6>
            <div className='inventory__instock'>
                <input type=''></input>
                <p>In stock</p>
            </div>
            <div className='inventory__instock'>
                <input type=''></input>
                <p>Out of stock</p>
            </div>
        </div>
        <div className='inventory__input-column'>
            <h6>Quality</h6>
            <input className='inventory__input-quantity' type='text' placeholder='0'></input>
        </div>
        <div className='inventory__input-column'>
            <h6>Warehouses</h6>
            <input className='inventory__input-warehouses' type='text' placeholder='Please selct'></input>
        </div>
        <div className='inventory__button-container'>
            <button>Cancel</button>
            <button>Add Item</button>
        </div>
    </div>
</section>

}