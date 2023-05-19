import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  ContactsWrapper,
  FormContainer,
  WrapperFormContacts,
  WrapperFormName,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactsWrapper>
        <FormContainer>
          <WrapperFormName>
            <ContactForm />
          </WrapperFormName>
          <WrapperFormContacts>
            <Filter />
            <ContactList />
          </WrapperFormContacts>
        </FormContainer>
      </ContactsWrapper>
    </>
  );
};

export default Contacts;
