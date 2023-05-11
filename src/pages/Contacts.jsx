import ContactForm from '../components/ContactForm/contactform';
import Filter from '../components/Filter/filter';
import ContactList from '../components/ContactList/contactlist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/services';
import { getError, getIsLoading } from '../redux/selector';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  
  return (
    <div>
      <ContactForm />
      <h2
        style={{
          textAlign: 'center',
          color: '#2948ad'
        }}>Contact List</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;