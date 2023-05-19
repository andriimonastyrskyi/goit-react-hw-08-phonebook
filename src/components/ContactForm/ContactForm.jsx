import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { ButtonForm, Form, InputForm, LabelForm } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const addNewContact = () => {
    let newContact = {
      number,
      name,
    };

    const newContactName = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
    );

    if (newContactName) {
      return toast.error(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
      toast('Success! This contact will be added to your Phonebook.');
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    addNewContact();
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <LabelForm>
        Name
        <InputForm
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          type="tel"
          name="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </LabelForm>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </Form>
  );
};
