import { Formik, Form, ErrorMessage, Field } from "formik";
import { Box, Button, Card, TextField } from "@mui/material";
import '../Css/AddPatient.css';
import { AddPatientInterface } from "../Interfaces/AddPatientInterface";

const initialValues: AddPatientInterface = {
    firstName: "",
    lastName: "",
    email: "",
    age: undefined,
    weight: undefined,
    patientNumber: undefined
}

export default function AddPatient() {
    var monTableau = Object.keys(initialValues).map(function (cle) {
        return cle
    });
    console.log(monTableau)
    const onSubmit = (values: AddPatientInterface) => {
        // Il faudra faire le lien vers le back ici
        console.log(values)
    }

    const validate = (values: AddPatientInterface) => {
        const errors: Partial<AddPatientInterface> = {};
        if (!values.firstName) {
            errors.firstName = "Required";
        }

        if (!values.lastName) {
            errors.lastName = "Required";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        return errors;
    };

    return (
        <Box className="BoxForm">
            <h2 className="labelForm">Fiche d'inscription</h2>
            <Card className="FormCard">
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={onSubmit}
                >
                    <Form className="Form">
                        {monTableau.map((cle) =>
                            <Box className="BoxFormUnitaire">
                                <Field as={TextField} id={cle} label={cle} variant="filled" type="text" name={cle} />
                                <ErrorMessage name={cle} component="div" />
                            </Box>
                        )}
                        <Button variant="contained" type="submit" className="ButtonForm">
                            <b>Envoyer</b>
                        </Button>
                    </Form>
                </Formik>
            </Card>
        </Box>
    )
}