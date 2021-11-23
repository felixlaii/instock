import './WarehouseDetails.scss';
import back from '../../assets/icons/arrow_back-24px.svg'
import editWhite from '../../assets/icons/edit-24px-white.svg'
import { Link, useHistory } from 'react-router-dom';


function WarehouseDetails({ warehouse }) {
    const history = useHistory();
    return (
        <div className="details__wrapper">
            <div className="details__title-wrapper">
                <div className="details__title-back">
                    <img onClick={history.goBack} src={back} className="details__back-icon" alt="back icon" />
                    <h2 className="details__title">{warehouse[0].name}</h2>
                </div>
                <Link to={"/edit-warehouse/" + warehouse[0].id}>
                    <div className="details__edit-icon-bg">
                        <img src={editWhite} className="details__edit-icon" alt="edit icon" />
                        <p className="details__edit-text">Edit</p>
                    </div>
                </Link>
            </div>
            <div className="details__container">
                <div className="details__address-wrapper">
                    <p className="details__address-sub">Warehouse Address:</p>
                    <p className="details__address">{warehouse[0].address}</p>
                    <p className="details__address">{`${warehouse[0].city}, ${warehouse[0].country}`}</p>
                </div>
                <div className="details__contact-container">
                    <div className="details__contact-name-wrapper">
                        <p className="details__contact-sub">Contact Name</p>
                        <p className="details__contact-body">{warehouse[0].contact.name}</p>
                        <p className="details__contact-body">{warehouse[0].contact.position}</p>
                    </div>
                    <div className="details__contact-info-wrapper">
                        <p className="details__contact-sub">Contact Information</p>
                        <p className="details__contact-body">{warehouse[0].contact.phone}</p>
                        <p className="details__contact-body">{warehouse[0].contact.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WarehouseDetails;