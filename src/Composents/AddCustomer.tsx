import { AddCustomerInterface } from "../Interfaces/AddCustomerInterface"
import { Formik, Form, ErrorMessage } from "formik";
import { Box, Button, Card, TextField } from "@mui/material";
import '../Css/AddCustomer.css';

const initialValues: AddCustomerInterface = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    weight: ""
}

const onSubmit = (values: AddCustomerInterface) => {
    console.log(values);
}

const validate = (values: AddCustomerInterface) => {
    const errors: Partial<AddCustomerInterface> = {};

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

    if (!values.age) {
        errors.age = "Required";
    } else if (Number(values.age) < 0 || Number(values.age) < 99) {
        errors.age = "Invalid age"
    }

    if (!values.weight) {
        errors.weight = "Required";
    } else if (Number(values.age) < 0 || Number(values.age) < 99) {
        errors.age = "Invalid age"
    }

}

export default function AddCustomer() {
    return (
        <Box className="BoxForm">
            <h2 className="">Fiche d'inscription</h2>
            <Card className="FormCard">
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={onSubmit}
                >
                    <Form className="Form">
                        <Box className="BoxFormUnitaire">
                            <TextField id="outlined-basic" label="Prénom" variant="filled" type="text" name="firstName" />
                            <ErrorMessage name="firstName" component="div" />
                        </Box>
                        <Box className="BoxFormUnitaire">
                            <TextField id="outlined-basic" label="Nom" variant="filled" type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="div" />
                        </Box>
                        <Box className="BoxFormUnitaire">
                            <TextField id="outlined-basic" label="Outlemailined" variant="filled" type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </Box>
                        <Box className="BoxFormUnitaire">
                            <TextField id="outlined-basic" label="Age" variant="filled" type="age" name="age" />
                            <ErrorMessage name="age" component="div" />
                        </Box>
                        <Box className="BoxFormUnitaire">
                            <TextField id="outlined-basic" label="Poids" variant="filled" type="weight" name="weight" />
                            <ErrorMessage name="weight" component="div" />
                        </Box>
                        <Button variant="contained" type="submit" className="ButtonForm">
                            <b>Envoyer</b>
                        </Button>
                    </Form>
                </Formik>
            </Card>
        </Box>
    )
}