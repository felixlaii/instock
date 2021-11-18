import { Component } from 'react';
import axios from "axios";
import sortIcon from '../../assets/icons/sort-24px.svg'
// import back from '../../assets/icons/arrow_back-24px.svg'
// import editWhite from '../../assets/icons/edit-24px-white.svg'
// import edit from '../../assets/icons/edit-24px.svg'
// import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
// import chevron from '../../assets/icons/chevron_right-24px.svg'

import './WarehouseDetailsPage.scss';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';

const warehouseEndpoint = "http://localhost:8080/warehouse-details/"

class WarehouseDetailsPage extends Component {

    state = {
        warehouse: [],
        showWarehouseColumn: false
    }

    componentDidMount() {
        let warehouseId = this.props.match.params.id || "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9"

        axios
          .get(warehouseEndpoint + warehouseId)
          .then(response => {
            this.setState({
              warehouse: response.data
            })
            console.log(this.state.warehouse)
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
        // const { category, id, itemName, quantity, status } = warehouse[1][2];
        return (
            <>
                <div className="details__card">

                    <WarehouseDetails warehouse={warehouse}/>
                    
                    <div className="inventory__table-row">
                        <p className="inventory__table-sub">Inventory Item
                            <img className="inventory__sort-icon" src={sortIcon} alt="sort icon" />
                        </p>
                        <p className="inventory__table-sub">Category
                            <img className="inventory__sort-icon" src={sortIcon} alt="sort icon" />
                        </p>
                        <p className="inventory__table-sub">Status
                            <img className="inventory__sort-icon" src={sortIcon} alt="sort icon" />
                        </p>
                        <p className="inventory__table-sub">Quantity
                            <img className="inventory__sort-icon" src={sortIcon} alt="sort icon" />
                        </p>
                        <p className="inventory__table-sub">Actions</p>
                    </div>

                    {warehouse[1].map(inventory => 
                        <InventoryItem key={inventory.id} category={inventory.category} 
                            id={inventory.id} 
                            itemName={inventory.itemName} 
                            quantity={inventory.quantity} 
                            status={inventory.status} />)}

                </div>
            </>
        )
        }
    }
}

export default WarehouseDetailsPage;
