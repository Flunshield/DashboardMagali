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
      onClick={async () => await keycloak.logout()}
    >
      Logout
    </Button>
  ) : (
    <Button
      variant="contained"
      className='btnWarning'
      onClick={async () => await keycloak.login()}
    >
      Login
    </Button>
  );
};

export default BouttonLog;
