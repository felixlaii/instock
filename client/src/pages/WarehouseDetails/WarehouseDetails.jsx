import './WarehouseDetails.scss';
import back from '../../assets/icons/arrow_back-24px.svg'
import edit from '../../assets/icons/edit-24px-white.svg'
import { Component } from 'react';
import axios from "axios";
const warehouseEndpoint = "http://localhost:8080/warehouse-details/"

class WarehouseDetails extends Component {

    state = {
        warehouse: []
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
        return (
            <div className="details__card">
                <div className="details__title-wrapper">
                    <div className="details__title-back">
                        <img src={back} className="details__back-icon" alt="back icon" />
                        <h2 className="details__title">{warehouse[0].name || "loading"}</h2>
                    </div>
                    <div className="details__edit-icon-bg">
                        <img src={edit} className="details__edit-icon" alt="edit icon" />
                        <p className="details__edit-text">Edit</p>
                    </div>
                </div>
                <div className="details__container">
                    <div className="details__address-wrapper">
                        <p className="details__address-sub">Warehouse Address:</p>
                        <p className="details__address">{warehouse[0].address || "loading"}</p>
                        <p className="details__address">{`${warehouse[0].city}, ${warehouse[0].country}` || "loading"}</p>
                    </div>
                    <div className="details__contact-container">
                        <div className="details__contact-name-wrapper">
                            <p className="details__contact-sub">Contact Name</p>
                            <p className="details__contact-body">{warehouse[0].contact.name || "loading"}</p>
                            <p className="details__contact-body">{warehouse[0].contact.position || "loading"}</p>
                        </div>
                        <div className="details__contact-info-wrapper">
                            <p className="details__contact-sub">Contact Information</p>
                            <p className="details__contact-body">{warehouse[0].contact.phone || "loading"}</p>
                            <p className="details__contact-body">{warehouse[0].contact.email || "loading"}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
        }
    }
}

export default WarehouseDetails
