
import AddCustomer from '../Composents/AddCustomer';
import Footer from '../Composents/Footer';
import HeadBand from '../Composents/Header';
import '../Css/NewConsultPage.css';

export default function NewConsul() {

  return (
    <>
      <header>
        <HeadBand />
      </header>
      <body>
        <AddCustomer />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
