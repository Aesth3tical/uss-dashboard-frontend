import React from 'react';
import { Formik } from 'formik';
import { Button, Input } from '@chakra-ui/react';

export function AddEmployee({ history, bid, user, config, addEmployee }) {
    const [employee, setEmployee] = React.useState('Input employee\'s Discord userID here')
    const [buttonText, setButtonText] = React.useState('Add Employee')

    const setText = (text) => setButtonText(text);

    return (
        <div>
            <h2>Add Employee</h2>
            <Formik
                initialValues={{ employee }}
                onSubmit={({ employee }) => {
                    console.log({ bid: config.bid, employee: employee, ownerID: user.uid })
                    addEmployee(config.bid, employee, user.uid)
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <Input
                            type="text"
                            name="employee"
                            onChange={props.handleChange}
                            defaultValue={employee}
                        />
                        <div style={{ paddingTop: 5 }}>
                            <Button type="submit" size="sm" fontSize="12" colorScheme="blue" onClick={() => setText('Submitted! Run !business employees <businessID> to view current employees.')}>
                                {buttonText}
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}