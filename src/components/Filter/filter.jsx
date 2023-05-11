import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(addFilter(e.currentTarget.value.trim()))
  }
  
  return (
    <TextField
      autoComplete='off'
      label="Find contacts by name"
      variant="outlined"
      type="text"
      value={filter}
      onChange={onChange}
      sx={{
        mt: 2,
        ml: 1,
        width: 300,
      }}
    />
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};