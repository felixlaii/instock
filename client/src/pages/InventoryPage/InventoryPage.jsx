import React, { Component } from 'react';
import axios from "axios";

import sortIcon from '../../assets/icons/sort-24px.svg'

import './InventoryPage.scss';
import FullInventoryItem from '../../components/FullInventoryItem/FullInventoryItem';
import { Link } from 'react-router-dom';

const inventoryEndpoint = "http://localhost:8080/inventory/all"

class InventoryPage extends Component {

    state = {
        inventoryArray: [],
    }

    componentDidMount() {
        // let warehouseId = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9"

        axios
          .get(inventoryEndpoint)
          .then(response => {
            this.setState({
              inventoryArray: response.data
            })
            console.log(this.state.inventoryArray)
          })
      }

    render() {
        const { inventoryArray } = this.state
        console.log(inventoryArray)
        
        if (!inventoryArray.length) {
            return (
                <p>loading</p>
                )
            }
            
        if (inventoryArray.length) {
            return (
                <div className="all-inventory__card">

                    <div className="all-inventory__header">
                        <div className="all-inventory__title">Inventory</div>
                        <div className="all-inventory__wrapper">
                            <input className="all-inventory__input" type="text" placeholder="Search..."/>
                            <Link to="/add-new-inventory-item-">
                                <button className="all-inventory__button" type="button">+ Add New Item</button>
                            </Link>
                        </div>
                    </div>

                    <div className="all-inventory__table-row">
                        <div className="all-inventory__inv-cat-subs">
                            <p className="all-inventory__table-inv-sub">Inventory Item
                                <img className="all-inventory__sort-icon" src={sortIcon} alt="sort icon" />
                            </p>
                            <p className="all-inventory__table-cat-sub">Category
                                <img className="all-inventory__sort-icon" src={sortIcon} alt="sort icon" />
                            </p>
                        </div>
                        <div className="all-inventory__stat-qty-subs">
                            <p className="all-inventory__table-stat-sub">Status
                                <img className="all-inventory__sort-icon" src={sortIcon} alt="sort icon" />
                            </p>
                            <p className="all-inventory__table-sub">Qty
                                <img className="all-inventory__sort-icon" src={sortIcon} alt="sort icon" />
                            </p>
                        </div>
                        <p className="all-inventory__table-warehouse-sub">Warehouse
                            <img className="all-inventory__sort-icon" src={sortIcon} alt="sort icon" />
                        </p>
                        <p className="all-inventory__table-action-sub">Actions</p>
                    </div>

                    {inventoryArray.map(inventory => 
                        <FullInventoryItem key={inventory.id} category={inventory.category} 
                            id={inventory.id} 
                            itemName={inventory.itemName} 
                            quantity={inventory.quantity} 
                            status={inventory.status}
                            warehouseName={inventory.warehouseName}/>)}

                </div>
            )
    }
}
}

export default InventoryPage;