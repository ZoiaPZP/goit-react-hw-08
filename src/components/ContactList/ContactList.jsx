import css from './ContactList.module.css';
import Loader from "../../components/Loader/Loader";
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from "../ContactCard/ContactCard"; 
import { fetchContacts } from "../../redux/contacts/operations"; 
import { useEffect } from "react";
import { selectIsLoading, selectFilterContacts } from '../../redux/contacts/selectors'; 


const ContactList = () => {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const filterContacts = useSelector(selectFilterContacts);

    return (
        <>
            {isLoading && <Loader />}
            <div className={css.wrapper}>
                <ul className={css.list}>
                    {filterContacts.map((contact) =>
                        <ContactItem
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />)}
                </ul>
            </div>
        </>
    )
}

export default ContactList;