import React, { Component } from 'react'
import WarehouseListItem from '../../components/WarehouseListItem/WarehouseListItem'
import "./WarehouseList.scss"
import axios from "axios"
import { Link } from 'react-router-dom';

export default class WarehouseList extends Component {
    state = {warehouses:null};
    onConfirmHandler = (id) => {
        axios.delete("http://localhost:8080/delete-warehouse/"+id)
        .then(response => {
            this.setState({warehouses:response.data});
        });
    }

    componentDidMount() {
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
                        <div className="warehouses__wrapper">
                            <input className="warehouses__input" type="text" placeholder="Search..."/>
                            <Link to="/add-new-warehouse">
                                <button className="warehouses__button" type="button">+ Add New Warehouse</button>
                            </Link>
                        </div>
                    </div>
                    <div className="warehouses-card__hearder">
                        <div className="warehouses-card__hearder-wrapper">
                            <div className="warehouses-card__hearder-item">WAREHOUSE<img src="\icons\sort-24px.svg" alt="sort icon"/></div>
                            <div className="warehouses-card__hearder-item">ADDRESS<img src="\icons\sort-24px.svg" alt="sort icon"/></div>
                            <div className="warehouses-card__hearder-item">CONTACT NAME<img src="\icons\sort-24px.svg" alt="sort icon"/></div>
                            <div className="warehouses-card__hearder-item">CONTACT INFORMATION<img src="\icons\sort-24px.svg" alt="sort icon"/></div>
                            <div className="warehouses-card__hearder-item warehouses-card__hearder-item--float">ACTIONS</div>
                        </div>
                    </div>
                    {this.state.warehouses.map(warehouse => <WarehouseListItem key={warehouse.id} warehouse={warehouse} handler={this.onConfirmHandler}/>)}
                </div>
            </section>
        )
    }
}
