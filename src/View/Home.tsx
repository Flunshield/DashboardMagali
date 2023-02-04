import { useKeycloak } from '@react-keycloak/web';
import { useEffect, useState } from 'react';
import AccueilCustomer from '../Composents/AccueilCustomer';
import BouttonLog from '../Composents/BouttonLog';
import Footer from '../Composents/Footer';
import HeadBand from '../Composents/Header';
import LogoAcceuil from '../Composents/LogoAcceuil';
import '../Css/Home.css';
import '../Css/Loader.css'

export default function Home() {

  const [loading, setLoading] = useState(false)

  const { keycloak } = useKeycloak();
  const isLoggin = keycloak.authenticated

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <header>
        <HeadBand />
      </header>
      <body>
        {loading ? 
          isLoggin ?
            <>
              <LogoAcceuil />
              <AccueilCustomer />
            </>
            :
            <>
              <LogoAcceuil />
              <BouttonLog />
            </>
        :
        <>
        <div className='loader'></div>
        </>}
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
