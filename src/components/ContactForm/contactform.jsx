import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/services';
import css from '../ContactForm/contactform.module.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  let name = useSelector(state => state.contacts.name);
  let number = useSelector(state => state.contacts.number);
  
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name': {
        name = e.target.value;
        break;
      }
      case 'number': {
        number = e.target.value;
        break;
      }
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isMatch = contacts.find(
      contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase()
    );
    if (isMatch) {
      Notiflix.Notify.warning(`${name} is already in contacts list!`);
      return;
    }

    const form = e.target;
    dispatch(addContact({ name: form.elements.name.value, number: form.elements.number.value }));
    form.reset();
  };

  return (
    <
      form onSubmit={handleSubmit}
      autoComplete="off"
      className={css.phonebook_form}
    >
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        sx={{
          mt: 5,
          width: 300,
        }}
      />
      <TextField
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        sx={{
          mt: 5,
          width: 300,
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          mt: 5,
          mb: 5,
          maxWidth: '300px',
          height: 55
        }}
      >
        Add contact
      </Button>
      </form>
    );
}

export default ContactForm;