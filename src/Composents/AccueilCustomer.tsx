import { Typography } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import '../Css/Text.css';
import image from '../Image_Mag_legume.png';

export default function AccueilCustomer() {
    const { keycloak } = useKeycloak();

    const KeycloakFirstName = keycloak?.idTokenParsed?.given_name;
    const KeycloakLastName = keycloak?.idTokenParsed?.family_name;

    return (
        <>
        <img src={image} alt="logo" className='imgLogoLegumeAcceuil' />
        <Typography variant="body1" gutterBottom className="textAcceuil">
            Bonjour {KeycloakFirstName} {KeycloakLastName}
        </Typography>
        </>
    )
}