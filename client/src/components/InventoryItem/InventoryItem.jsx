import './InventoryItem.scss';
import edit from '../../assets/icons/edit-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'
import { Link } from 'react-router-dom';
import DeleteInventoryItem from '../DeleteInventoryItem/DeleteInventoryItem';

function InventoryItem({ category, id, itemName, quantity, status, handler }) {
    return (
            <div className="inventory__item">
                <div className="inventory__item-details-wrapper">
                    <div className="inventory__item-cat-wrapper">
                        <div className="inventory__item-wrapper">
                            <p className="inventory__sub">Inventory Item</p>
                            <Link to={"/inventory-item-details/" + id}>
                                <p className="inventory__item-name">{itemName}
                                    <img className="inventory__chevron" src={chevron} alt="chevron"/>
                                </p>
                            </Link>
                        </div>
                        <div className="inventory__category-wrapper">
                            <p className="inventory__sub">Category</p>
                            <p className="inventory__category">{category}</p>
                        </div>
                    </div>
                    <div className="inventory__status-qty-wrapper">
                        <div className="inventory__status-wrapper">
                            <p className="inventory__sub">Status</p>
                            <p className={`${status === "In Stock" ? "inventory__status-in" : "inventory__status-out"}`}>{status}</p>
                        </div>
                        <div className="inventory__qty-wrapper">
                            <p className="inventory__sub">Qty</p>
                            <p className="inventory__qty">{quantity}</p>
                        </div>
                    </div>
                    <div className="inventory__icons-wrapper-a">
                        <DeleteInventoryItem name={itemName} id={id} handler={handler}/>
                        <Link to={"/edit-inventory-item/:id"}>
                            <img className="inventory__icon-edit" src={edit} alt="edit icon" />
                        </Link>
                    </div>
                </div>
                <div className="inventory__icons-wrapper-b">
                    <DeleteInventoryItem name={itemName} id={id} handler={handler}/>
                    <Link to={"/edit-inventory-item/:id"}>
                        <img className="inventory__icon-edit" src={edit} alt="edit icon" />
                    </Link>
                </div>
            </div>
    )
}

export default InventoryItem;