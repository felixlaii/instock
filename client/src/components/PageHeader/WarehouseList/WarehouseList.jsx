import React, { Component } from 'react'
import WarehouseListItem from '../../WarehouseListItem/WarehouseListItem'
import "./WarehouseList.scss"
import axios from "axios"

export default class WarehouseList extends Component {
    state = {warehouses:null};

    componentDidMount(){
        const newState = { warehouses: []};
        axios
        .get("http://localhost:8080/")
        .then((response) => {
            newState.warehouses = response.data;
            this.setState(newState);
        }).catch(error => console.error(error));
    }

    render() {
        if (!this.state.warehouses) {
            return <></>;
        }
        return (
            <section className="warehouses">
                <div className="warehouses__container">
                    <div className="warehouses__header">
                        <div className="warehouses__title">Warehouses</div>
                        <input type="text" placeholder="Search..."/>
                        <button type="button">+ Add New Warehouse</button>
                    </div>
                    {this.state.warehouses.map(warehouse => <WarehouseListItem key={warehouse.id} warehouse={warehouse}/>)}
                </div>
            </section>
        )
    }
}
