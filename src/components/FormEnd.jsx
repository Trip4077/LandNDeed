// roadAccess: "",
// paymentMethod: "",
// images: ""
import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { Button } from "@material-ui/core";

const FormEnd = props => {
    const roads = [ "Paved", "Grave", "Dirt", "County/State", "Deeded Easememt", "Land Locked" ]
    const payments = [ "Cashier's Check", "Wireless Transfer" ]
    
    return (
        <>
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                className={props.classes.textField}
                value={props.formValues.roadAccess}
                onChange={props.handleChange}
                SelectProps={{
                    MenuProps: {
                    className: props.classes.menu,
                    },
                }}
                helperText="Road Access to Property"
                margin="normal"
                style={{ margin: 8, fontSize: '1.6rem', width: '30%' }}
                name="roadAccess"
            >
                {roads.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="standard-select-currency"
                select
                label="Select"
                className={props.classes.textField}
                value={props.formValues.paymentMethod}
                onChange={props.handleChange}
                SelectProps={{
                    MenuProps: {
                    className: props.classes.menu,
                    },
                }}
                helperText="Paymenyt Method"
                margin="normal"
                style={{ margin: 8, fontSize: '1.6rem', width: '30%' }}
                name="paymentMethod"
            >
                {payments.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="standard-full-width"
                label="Comments"
                style={{ margin: 8 }}
                helperText="Any other information you wish to provide"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="comments"
                onChange={props.handleChange}
            />
    
        </>
    )
}

export default FormEnd;