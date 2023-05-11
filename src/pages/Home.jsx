import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'block',
        justifyContent: 'center',
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          mr: 2,
          mt: 5,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          fontFamily: 'Roboto',
          fontWeight: 700,
          color: '#2948ad',
          textDecoration: 'none',
          cursor: 'default',
        }}
      >
        Welcome !
      </Typography>
      {/* <Typography
        variant="body2"
        color="#2948ad"
        sx={{ m: 5, cursor: 'default' }}
        >
          Some text
      </Typography> */}
    </Box>
  );
};

export default Home;