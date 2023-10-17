import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/selectors';
import {
  ContactsList,
  ContactListItem,
  ContactButton,
  ContactTitle,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  console.log(visibleContacts);

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactTitle>
            {name}: {number}
          </ContactTitle>
          <ContactButton
            type="button"
            id={id}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ContactButton>
        </ContactListItem>
      ))}
    </ContactsList>
  );
};
