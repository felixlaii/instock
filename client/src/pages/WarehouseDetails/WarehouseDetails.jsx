import './WarehouseDetails.scss';
import back from '../../assets/icons/arrow_back-24px.svg'
import edit from '../../assets/icons/edit-24px-white.svg'

function WarehouseDetails() {
    return (
        <div className="details__card">
            <div className="details__title-wrapper">
                <div className="details__title-back">
                    <img src={back} className="details__back-icon" alt="back icon" />
                    <h2 className="details__title">King West</h2>
                </div>
                <div className="details__edit-icon-bg">
                    <img src={edit} className="details__edit-icon" alt="edit icon" />
                    <p className="details__edit-text">Edit</p>
                </div>
            </div>
            <div className="details__container">
                <div className="details__address-wrapper">
                    <p className="details__address-sub">Warehouse Address:</p>
                    <p className="details__address">Line 1</p>
                    <p className="details__address">Line 2</p>
                </div>
                <div className="details__contact-container">
                    <div className="details__contact-name-wrapper">
                        <p className="details__contact-sub">Contact Name</p>
                        <p className="details__contact-body">Graeme Lyon</p>
                        <p className="details__contact-body">Warehouse Manager</p>
                    </div>
                    <div className="details__contact-info-wrapper">
                        <p className="details__contact-sub">Contact Information</p>
                        <p className="details__contact-body">+1 647 504 0911</p>
                        <p className="details__contact-body">email@address.com</p>
                    </div>
                </div>
                
                
            </div>

        </div>
    )
}

export default WarehouseDetails
