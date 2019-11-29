import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const AdditionalInfo = props => {
    const optionset1 = [ "Yes", "No" ];
    const optionset2 = [ "Cash Purchase", "Financed", "Traded", "Inherited", "Purchase from Tax/Forclosure Sale" ]

    return(
        <>
            <TextField
                id="standard-full-width"
                label="Is the property title clean of debt or fees?"
                style={{ margin: 8 }}
                placeholder="Back Dues, Leins, Taxes, Etc..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="freeTitle"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="If No, how much is owed?"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="owedAmount"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-select-currency"
                select
                label="Select"
                className={props.classes.textField}
                value={props.formValues.HOAorPOA}
                onChange={props.handleChange}
                SelectProps={{
                    MenuProps: {
                    className: props.classes.menu,
                    },
                }}
                helperText="Is the property located in a subdivision with a POA or HOA?"
                margin="normal"
                style={{ margin: 8, fontSize: '1.6rem', width: '30%' }}
                name="HOAorPOA"
            >
                {optionset1.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="standard-full-width"
                label="If Yes, what is the subdivision?"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="subdivision"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="What are the yearly dues?"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="yearlyDues"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-select-currency"
                select
                label="Select"
                className={props.classes.textField}
                value={props.formValues.methodOfObtainment}
                onChange={props.handleChange}
                SelectProps={{
                    MenuProps: {
                    className: props.classes.menu,
                    },
                }}
                helperText="How did you obtain the property?"
                margin="normal"
                style={{ margin: 8, fontSize: '1.6rem', width: '30%' }}
                name="methodOfObtainment"
            >
                {optionset2.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="standard-full-width"
                label="Years Owned"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="yearsOwned"
                onChange={props.handleChange}
            />

            <TextField
                id="standard-full-width"
                label="Assessed Value"
                style={{ margin: 8 }}
                placeholder="Electric, Sewer, Well, Gas..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                name="utilities"
                onChange={props.handleChange}
            />
        </>
    )
}

export default AdditionalInfo;