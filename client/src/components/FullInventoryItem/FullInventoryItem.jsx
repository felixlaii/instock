import './FullInventoryItem.scss';
import edit from '../../assets/icons/edit-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'

function FullInventoryItem({ category, id, itemName, quantity, status, warehouseName }) {
    return (
        <div className="full-inventory__item">
            <div className="full-inventory__item-details-wrapper">
                <div className="full-inventory__columns-wrapper">
                    <div className="full-inventory__item-cat-wrapper">
                        <div className="full-inventory__item-wrapper">
                            <p className="full-inventory__sub">Inventory Item</p>
                            <p className="full-inventory__item-name">{itemName}
                                <img className="full-inventory__chevron" src={chevron} alt="chevron"/>
                            </p>
                        </div>
                        <div className="full-inventory__category-wrapper">
                            <p className="full-inventory__sub">Category</p>
                            <p className="full-inventory__category">{category}</p>
                        </div>
                    </div>
                    <div className="full-inventory__status-qty-wrapper">
                        <div className="full-inventory__status-wrapper">
                            <p className="full-inventory__sub">Status</p>
                            <p className={`${status === "In Stock" ? "full-inventory__status-in" : "full-inventory__status-out"}`}>{status}</p>
                        </div>
                        <div className="full-inventory__qty-wrapper">
                            <p className="full-inventory__sub">Qty</p>
                            <p className="full-inventory__qty">{quantity}</p>
                        </div>
                    </div>
                </div>
                <div className="full-inventory__warehouse-row-wrapper">
                    <div className="full-inventory__warehouse-wrapper">
                        <p className="full-inventory__sub">Warehouse</p>
                        <p className="full-inventory__warehouse">{warehouseName}</p>
                    </div>
                </div>
                <div className="full-inventory__icons-wrapper-a">
                    <img className="full-inventory__icon" src={deleteIcon} alt="delete icon" />
                    <img className="full-inventory__icon-edit" src={edit} alt="edit icon" />
                </div>
            </div>
            <div className="full-inventory__icons-wrapper-b">
                <img className="full-inventory__icon" src={deleteIcon} alt="delete icon" />
                <img className="full-inventory__icon" src={edit} alt="edit icon" />
            </div>
        </div>
    )
}

export default FullInventoryItem;