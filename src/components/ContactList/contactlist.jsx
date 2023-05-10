import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'redux/selector'
import ContactListItem from '../ContactList/contactlistitem';
import css from '../ContactList/contactlist.module.css'

const ContactList = () => {
  const contacts = useSelector(filteredContacts);

  return (
    <>
      {contacts.length === 0 ? (
        <h3 className={css.contactlist_ul}>There is no contact</h3>
      ) :
        <ul className={css.contactlist_ul}>
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
    </>
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

// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/services';


// // import { getVisibleContacts } from 'redux/selectors';
// import { filteredContacts } from 'redux/selector'

// // import authSelectors from 'redux/auth/auth-selectors';
// import authSelectors from 'redux/auth/authSelectors'

// import { List, ListItem, Button } from '@mui/material';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
//   const visibleContacts = useSelector(filteredContacts);
//   const handleDelete = id => dispatch(deleteContact(id));

//   return (
//     <List>
//       {isLoggedIn &&
//         visibleContacts.map(contact => (
//           <ListItem key={contact.id} sx={{display: 'flex', justifyContent: 'space-between', maxWidth: 400, fontWeight: 500}}>
//             {contact.name}: {contact.number}
//             <Button
//               variant="contained"
//               type="button"
//               onClick={() => {
//                 handleDelete(contact.id);
//               }}
//               sx={{
//                 ml: 5,
//                 maxWidth: '300px',
//               }}
//             >
//               Delete
//             </Button>
//           </ListItem>
//         ))}
//     </List>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   value: PropTypes.array,
//   onDeleteContact: PropTypes.func,
// };
