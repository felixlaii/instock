import { Component } from 'react';
import axios from "axios";

import './WarehouseDetailsPage.scss';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import sortIcon from '../../assets/icons/sort-24px.svg'

const warehouseEndpoint = "http://localhost:8080/warehouse-details/";

class WarehouseDetailsPage extends Component {

    state = {
        warehouse: [],
        showWarehouse: false
    }

    resetState= () => {
        let warehouseId = this.props.match.params.id

        axios
          .get(warehouseEndpoint + warehouseId)
          .then(response => {
            this.setState({
              warehouse: response.data
            })
            console.log(this.state.warehouse)
          })
    };

    onConfirmHandler = (id) => {
        axios.delete("http://localhost:8080/inventory/delete-inventory/"+id)
        .then(response => {
            this.resetState();
        });
    }

    componentDidMount() {
        let warehouseId = this.props.match.params.id 

        axios
            .get(warehouseEndpoint + warehouseId)
            .then(response => {
                this.setState({
                warehouse: response.data
                })
            })
    }

    render() {
        const { warehouse } = this.state
        console.log(warehouse)
        
        if (!warehouse.length) {
            return (
                <p>loading</p>
                )
            }
            
        if (warehouse.length) {
            return (
                <section className="details">
                    <div className="details__card">
                        <WarehouseDetails warehouse={warehouse}/>

                        <div className="inventory__table-row">
                            <div className="inventory__inv-cat-subs">
                                <p className="inventory__table-inv-sub">Inventory Item
                                    <img className="inventory__sort-icon" src={sortIcon} alt="sort icon" />
                                </p>
                                <p className="inventory__table-cat-sub">Category
                                    <img className="inventory__sort-icon" src={sortIcon} alt="sort icon" />
                                </p>
                            </div>
                            <div className="inventory__stat-qty-subs">
                                <p className="inventory__table-stat-sub">Status
                                    <img className="inventory__sort-icon" src={sortIcon} alt="sort icon" />
                                </p>
                                <p className="inventory__table-sub">Quantity
                                    <img className="inventory__sort-icon" src={sortIcon} alt="sort icon" />
                                </p>
                            </div>
                            <p className="inventory__table-action-sub">Actions</p>
                        </div>

                        {warehouse[1].map(inventory => 
                        <InventoryItem key={inventory.id} category={inventory.category} 
                            id={inventory.id} 
                            itemName={inventory.itemName} 
                            quantity={inventory.quantity} 
                            status={inventory.status}
                            warehouseName={inventory.warehouseName}
                            showWarehouse={this.state.showWarehouse}
                            handler={this.onConfirmHandler} />)}

                    </div>
                </section>
            )
            }
    }
}

export default WarehouseDetailsPage;
