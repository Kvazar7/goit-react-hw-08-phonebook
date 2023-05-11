// import ContactForm from '../components/ContactForm/contactform'
// import ContactList from '../components/ContactList/contactlist'
// import Filter from '../components/Filter/filter'
import { useEffect } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { getContacts } from 'services/services';
import { refreshUser } from 'redux/auth/authServices';
import SharedLayout from './sharedLayout/SharedLayout';
import PrivateRoute from './PrivatRoute';
import PublicRoute from './PublicRoutes';
import css from '../components/app.module.css'

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

// import Home from 'pages/Home';
// import Contacts from 'pages/Contacts';
// import Register from 'pages/Register';
// import Login from 'pages/Login';

// import ContactForm from '../components/ContactForm/contactform'
// import ContactList from '../components/ContactList/contactlist'
// import Filter from '../components/Filter/filter'

export const App = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    //   <div className={css.contact_book}>
    //     <h2 className={css.contact_book__head}>Phonebook</h2>
    //   <ContactForm />
    //     <h2 className={css.contact_book__head}>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>
    
    <div className={css.contact_book}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Contacts />} />
            }
          />
          {/* <Route path="*" element={<NotFound />}/> */}
        </Route>
      </Routes>
    </div>
  )
}