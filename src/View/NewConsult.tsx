
import { Box } from '@mui/material';
import AddPatient from '../Composents/AddPatient';
import Footer from '../Composents/Footer';
import HeadBand from '../Composents/Header';
import '../Css/NewConsultPage.css';
import '../Css/General.css';

export default function NewConsul() {

  return (
    <>
      <header>
        <HeadBand />
      </header>
      <Box>
        <AddPatient />
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
