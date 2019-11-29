import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const PropertyInfo = props => {
    const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    return(
        <>
            <TextField
                id="standard-full-width"
                label="APN"
                style={{ margin: 8 }}
                placeholder="123-45-678"
                helperText="Assessor's Parcel Number"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="APN"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Address"
                style={{ margin: 8 }}
                helperText="Address Of Property"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="address"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="City"
                style={{ margin: 8 }}
                helperText="City Of Property"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="city"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-select-currency"
                select
                label="Select"
                className={props.classes.textField}
                value={props.formValues.state}
                onChange={props.handleChange}
                SelectProps={{
                    MenuProps: {
                    className: props.classes.menu,
                    },
                }}
                helperText="State Of Property"
                margin="normal"
                style={{ margin: 8, fontSize: '1.6rem', width: '30%' }}
                name="state"
            >
                {states.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="standard-full-width"
                label="County"
                style={{ margin: 8 }}
                helperText="County Of Property"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="county"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Property Size"
                style={{ margin: 8 }}
                helperText="Size Of Property"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="propertySize"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Estimated Value"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="estimatedValue"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Assessed Value"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="assessedValue"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Asking Price"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="askingPrice"
                onChange={props.handleChange}
            />
        </>
    )
}

export default PropertyInfo;