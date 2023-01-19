import Button from '@mui/material/Button/Button';
import { useKeycloak } from '@react-keycloak/web';
import '../Css/Button.css';

const BouttonLog = () => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;
  return isLoggedIn ? (
    <Button
    variant="contained"
    className='btnHeader'
      onClick={() => keycloak.logout()}
    >
      Logout
    </Button>
  ) : (
    <Button
      variant="contained"
      className='btnHeader'
      onClick={() => keycloak.login()}
    >
      Login
    </Button>
  );
};

export default BouttonLog;