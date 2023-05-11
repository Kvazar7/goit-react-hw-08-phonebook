import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/services';
import { ListItem, Button } from '@mui/material';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const delContact = () => dispatch(deleteContact(id));

  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        ml: 1,
        mr: 1,
        fontWeight: 500
      }}>
      {name}: {number}
      
      <Button
        variant="contained"
        type="button"
        onClick={delContact}
        sx={{
                ml: 5,
                maxWidth: '300px',
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}