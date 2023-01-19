import { useKeycloak } from '@react-keycloak/web';
import AccueilCustomer from '../Composents/AccueilCustomer';
import BouttonLog from '../Composents/BouttonLog';
import Footer from '../Composents/Footer';
import HeadBand from '../Composents/Header';
import LogoAcceuil from '../Composents/LogoAcceuil';
import '../Css/Home.css';

export default function Home() {

  const { keycloak } = useKeycloak();
  const isLoggin = keycloak.authenticated
  return (
    <>
      <header>
        <HeadBand />
      </header>
      <body>
        {!isLoggin &&
          <>
            <LogoAcceuil />
            <BouttonLog />
          </>}
        {isLoggin &&
          <>
            <LogoAcceuil />
            <AccueilCustomer />
          </>
        }
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
