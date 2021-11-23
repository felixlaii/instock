import ArrowBack from '../../assets/icons/arrow_back-24px.svg'
import Edit from '../../assets/icons/edit-24px.svg'
import { Component } from 'react'
import './InventoryItemDetails.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

const inventoryItemEndpoint = "http://localhost:8080/inventory/item/"

class InventoryItemDetails extends Component {

    state = {
        item: []
    }

    componentDidMount() {
        let itemId = this.props.match.params.id 

        axios
            .get(inventoryItemEndpoint + itemId)
            .then(response => {
                this.setState({
                item: response.data
                })
                console.log(this.state.item)
            })
    }

    render() {
        let { item } = this.state
        return (

            <div className='inventory-item'>
                <div className='inventory-item__header'>
                    <img className='inventory-item__arrow' src={ArrowBack} alt="arrowback icon" />
                    <h1 className='inventory-item__title'>{item.itemName}</h1>
                    <Link to={"/edit-inventory-item/" + item.id} className='inventory-item__edit-link' >
                        <img className='inventory-item__Edit' src={Edit} alt="edit icon"/>
                    </Link>
                </div>
                <div className='inventory-item__row'>
                    <div className='inventory-item__left'>
                        <div className='inventory-item__description'>
                            <h6 className='inventory-item__para-description'>ITEM DESCRIPTION:</h6>
                            <p className='inventory-item__para'>{item.description}</p>
                        </div>
                        <div className='inventory-item__category'>
                            <h6 className='inventory-item__category-header'>CATEGORY:</h6>
                            <p className='inventory-item__electronics'>{item.category}</p>
                        </div>
                    </div>

                    <div className='inventory-item__right'>
                        <div className='inventory-item__category-container'>
                            <div className='inventory-item__status'>
                                <h6 className='inventory-item__status'>STATUS:</h6>
                                {item.status === "In Stock" ? <p className='inventory-item__in-stock'><strong>IN STOCK</strong></p> :
                                <p className='inventory-item__out-of-stock'><strong>OUT OF STOCK</strong></p>}
                            </div>
                            <div className='inventory-item__quantity-container'>
                                <h6 className='inventory-item__quantity'>QUANTITY:</h6>
                                <p className='inventory-item__number'>{item.quantity}</p>
                            </div>
                        </div>
                        <div className='inventory-item__category'>
                            <h6 className='inventory-item__warehouse'>WAREHOUSE:</h6>
                            <p className='inventory-item__warehouse-location'>{item.warehouseName}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default InventoryItemDetails