import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const OwnerInfo = props => {
    const methods = [
        {
        value: 'phone',
        label: 'Call',
        },
        {
        value: 'text',
        label: 'Text',
        },
        {
        value: 'email',
        label: 'Email',
        }
    ];

    return(
        <>
            <TextField
                id="standard-full-width"
                label="Owner's Full Name"
                style={{ margin: 8 }}
                placeholder="John E. Smith..."
                helperText="Full Name as appears on Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="ownersName"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Other Names"
                style={{ margin: 8 }}
                placeholder="John E. Smith, Jane S. Smith..."
                helperText="List any other names on the title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="otherNames"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Phone"
                style={{ margin: 8, width: '30%' }}
                placeholder="(123)456-7890"
                helperText="Owner's Contact Number"
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="phone"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Email"
                style={{ margin: 8, width: '30%' }}
                placeholder="john@smith.com"
                helperText="Owner's Contact Email"
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="email"
                onChange={props.handleChange}
                value={props.formValues.email}
            />

            <TextField
                id="standard-select-currency"
                select
                label="Select"
                className={props.classes.textField}
                value={props.formValues.contactMethod}
                onChange={props.handleChange}
                SelectProps={{
                    MenuProps: {
                    className: props.classes.menu,
                    },
                }}
                helperText="Preferred Contact Method"
                margin="normal"
                style={{ margin: 8, fontSize: '1.6rem', width: '30%' }}
                name="contactMethod"
            >
                {methods.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </>
    )
}

export default OwnerInfo;