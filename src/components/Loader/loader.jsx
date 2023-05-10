import { Circles } from 'react-loader-spinner';
// import css from './Loader.module.css';

const Loader = () => {
  return (
    <div style={{ marginTop: 200, marginLeft: '50%' }}>
      <Circles
        height="80"
        width="80"
        color="#1976d2"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;