import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'redux/selector'
import ContactListItem from '../ContactList/contactlistitem';
import { List } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(filteredContacts);

  return (
    <List>
      {contacts.length === 0 ? (
        <h3 style={{ textAlign: 'center', color: '#2948ad' }}
          >There is no contact</h3>
      ) :
        <ul style={{
          marginLeft: '0',
          padding: '0',
          color: '#2948ad',
        }}>
          {contacts.map(contact => {
            return (
              <ContactListItem
                key={contact.id}
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            );
          })}
        </ul>
      } 
    </List>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};