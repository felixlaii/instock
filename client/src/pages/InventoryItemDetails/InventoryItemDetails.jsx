import ArrowBack from '../../assets/icons/arrow_back-24px.svg'
import Edit from '../../assets/icons/edit-24px.svg'
import InStock from '../../assets/logo/InStock-Logo_2x.png'
import { Component } from 'react'
import './InventoryItemDetails.scss'


class InventoryItemDetails extends Component {
    render() {
        return (

            <div className='inventory-item'>
                <div className='inventory-item__header'>
                    <img className='inventory-item__arrow' src={ArrowBack} />
                    <h1 className='inventory-item__title'>Television</h1>
                    <img className='inventory-item__Edit' src={Edit} />
                </div>
                <div className='inventory-item__row'>
                    <div className='inventory-item__left'>
                        <div className='inventory-item__description'>
                            <h6 className='inventory-item__para-description'>ITEM DESCRIPTION:</h6>
                            <p className='inventory-item__para'>This 50", 4K LED TV provides a crystal-clear picture and vivid colors</p>
                        </div>
                        <div className='inventory-item__category'>
                            <h6 className='inventory-item__category-header'>CATEGORY:</h6>
                            <p className='inventory-item__electronics'>Electronics</p>
                        </div>
                    </div>

                    <div className='inventory-item__right'>
                        <div className='inventory-item__category-container'>
                            <div className='inventory-item__status'>
                                <h6 className='inventory-item__status'>STATUS:</h6>
                                <p className='inventory-item__in-stock'><strong>IN STOCK</strong></p>
                                <p className='inventory-item__out-of-stock'><strong>OUT OF STOCK</strong></p>
                            </div>
                            <div className='inventory-item__quantity-container'>
                                <h6 className='inventory-item__quantity'>QUANTITY:</h6>
                                <p className='inventory-item__number'>500</p>
                            </div>
                        </div>
                        <div className='inventory-item__category'>
                            <h6 className='inventory-item__warehouse'>WAREHOUSE:</h6>
                            <p className='inventory-item__warehouse-location'>Manhattan</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default InventoryItemDetails