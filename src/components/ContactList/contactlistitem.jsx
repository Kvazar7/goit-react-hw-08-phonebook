import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/services';
import css from '../ContactList/contactlistitem.module.css'

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const delContact = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactlistitem}>
      {name}: {number} <button type="button" onClick={delContact} className={css.contactlistitem_button}>Delete</button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}