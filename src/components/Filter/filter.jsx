import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import css from '../Filter/filter.module.css'

import TextField from '@mui/material/TextField';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(addFilter(e.currentTarget.value.trim()))
  }
  
  return (
    <label htmlFor="" className={css.filter_label}>
      Find contacts by Name:
      <input type="text" value={filter} onChange={onChange} className={css.filter_label__input} />
    </label>

    //  <TextField
    //   autoComplete='off'
    //   label="Find contacts by name"
    //   variant="outlined"
    //   type="text"
    //   value={filter}
    //   onChange={onChange}
    //   sx={{
    //     mt: 2,
    //     ml: 5,
    //     width: 300,
    //   }}
    // />
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};