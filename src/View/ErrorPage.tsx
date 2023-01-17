import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Grid xs={6}>
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                                alt=""
                                width={500} height={250}
                            />
                        </Grid>
                        <Typography variant="h6">
                            La page que vous recherchez n'existe pas.
                        </Typography>
                        <Grid>
                            <Button variant="contained" href='/' className='btn'>Acceuil</Button>
                            <Button variant="contained" className='btn'
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                Page précédente
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}