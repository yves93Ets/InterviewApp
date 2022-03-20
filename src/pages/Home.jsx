import { Fade, Typography } from '@mui/material';
import { Box } from '@mui/system';

function Home() {
  return (
    <Box className="home">
      <Fade in={true} timeout={2500}>
        <Typography variant="h1">Kuva Systems</Typography>
      </Fade>
    </Box>
  );
}

export default Home;
