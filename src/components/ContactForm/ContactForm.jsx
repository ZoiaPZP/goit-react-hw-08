import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contactData = {
      name,
      number,
    };

    const normalizedNewName = name.toLowerCase();
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === normalizedNewName
    );

    if (isDuplicate) {
      toast.error(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact(contactData));
    toast.success(`${name} added successfully!`);

    setName('');
    setNumber('');
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.h2}>Create new contact</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.field}>
          <label className={css.label} htmlFor="user-name">
            Name
          </label>
          <input
            className={css.input}
            onChange={handleInputChange}
            value={name}
            id="user-name"
            type="text"
            name="name"
            placeholder="Name Lastname"
            required
          />
        </div>
        <div className={css.field}>
          <label className={css.label} htmlFor="user-phone">
            Phone number
          </label>
          <input
            className={css.input}
            onChange={handleInputChange}
            value={number}
            id="user-phone"
            type="tel"
            name="number"
            placeholder="xxx-xx-xx"
            required
          />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
