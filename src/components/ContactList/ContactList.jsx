import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import { getContacts, getFilterContacts } from 'redux/contacts/selectors';
import {
  AboutConacts,
  ListContactItem,
  ListContacts,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilterContacts);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ListContacts>
        {visibleContacts.map(contact => (
          <ListContactItem key={contact.id}>
            <ContactListItem contact={contact} />
          </ListContactItem>
        ))}
      </ListContacts>
      <AboutConacts>All contacts: {contacts.length}</AboutConacts>
      {filter && (
        <AboutConacts>Filtered contacts: {visibleContacts.length}</AboutConacts>
      )}
    </>
  );
};
