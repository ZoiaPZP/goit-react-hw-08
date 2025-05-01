import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import Container from '../../components/Container/Container';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
    return (
        <Container>
            <div className={css.wrapper}>
                <ContactForm />
                <div className={css.contactsWrapper}>
                    <h2 className={css.h2}>Contacts</h2>
                    <Filter />
                    <ContactList />
                </div>
            </div>
        </Container>
    );
};

export default ContactsPage;

