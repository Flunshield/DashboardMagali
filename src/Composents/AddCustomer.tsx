import { AddCustomerInterface } from "../Interfaces/AddCustomerInterface"
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Box, Button, Card, TextField } from "@mui/material";
import '../Css/AddCustomer.css';
import { useState } from "react";

const initialValues: AddCustomerInterface = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    weight: ""
}

export default function AddCustomer() {
    const onSubmit = (values: AddCustomerInterface) => {
        // Il faudra faire le lien vers le back ici
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
        return errors;
    };

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
                        <Field as={TextField} id="firstName" label="Prénom" variant="filled" type="text" name="firstName"/>
                            <ErrorMessage name="firstName" component="div" />
                        </Box>
                        <Box className="BoxFormUnitaire">
                            <Field as={TextField} id="lastName" label="Nom" variant="filled" type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="div" />
                        </Box>
                        <Box className="BoxFormUnitaire">
                            <Field as={TextField} id="email" label="Outlemailined" variant="filled" type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </Box>
                        <Box className="BoxFormUnitaire">
                            <Field as={TextField} id="age" label="Age" variant="filled" type="number" name="age" />
                            <ErrorMessage name="age" component="div" />
                        </Box>
                        <Box className="BoxFormUnitaire">
                            <Field as={TextField} id="weight" label="Poids" variant="filled" type="float" name="weight" />
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