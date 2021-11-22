import './InventoryItem.scss';
import edit from '../../assets/icons/edit-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'

function InventoryItem({ category, id, itemName, quantity, status, warehouseName, showWarehouse }) {
    return (
        <div className="inventory__item">
            <div className="inventory__item-details-wrapper">
                <div className="inventory__item-cat-wrapper">
                    <div className="inventory__item-wrapper">
                        <p className="inventory__sub">Inventory Item</p>
                        <p className="inventory__item-name">{itemName}
                            <img className="inventory__chevron" src={chevron} alt="chevron"/>
                        </p>
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
                    <img className="inventory__icon" src={deleteIcon} alt="delete icon" />
                    <img className="inventory__icon-edit" src={edit} alt="edit icon" />
                </div>
            </div>
            {!showWarehouse ? <></> : 
            <div className="inventory__warehouse-row-wrapper">
                <div className="inventory__warehouse-wrapper">
                    <p className="inventory__sub">Warehouse</p>
                    <p className="inventory__qty">{warehouseName}</p>
                </div>
            </div>}
            <div className="inventory__icons-wrapper-b">
                <img className="inventory__icon" src={deleteIcon} alt="delete icon" />
                <img className="inventory__icon" src={edit} alt="edit icon" />
            </div>
        </div>
    )
}

export default InventoryItem;