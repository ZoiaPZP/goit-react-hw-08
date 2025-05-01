import { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from './ContactCard.module.css';

const ContactCard = ({ name, number, id }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        dispatch(deleteContact(id));
        setIsModalOpen(false);
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <li className={css.item}>
                <p className={css.name}>
                    <i className="fas fa-phone-alt"></i> 
                    {name}:
                </p>
                <p className={css.number}>{number}</p>
                <button className={css.button} onClick={handleDeleteClick}>
                    Delete
                </button>
            </li>

            {isModalOpen && (
                <div className={css.modalOverlay}>
                    <div className={css.modal}>
                        <p>Are you sure you want to delete the contact <strong>{name}</strong>?</p>
                        <div className={css.modalButtons}>
                            <button className={css.confirm} onClick={confirmDelete}>
                                Yes
                            </button>
                            <button className={css.cancel} onClick={cancelDelete}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactCard;



