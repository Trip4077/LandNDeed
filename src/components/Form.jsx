import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

import OwnerInfo from './OwnerInfo';
import PropertyInfo from './PropertyInfo';
import AdditionalInfo from './AdditionalInfo';
import FormEnd from './FormEnd';

const Form = props => {
   const initialState = {
        //Form 1 - Owner's Information
        ownersName: "",
        otherNames: "",
        phone: "",
        email: "",
        contactMethod: "Phone",
        //Form 2 - Property Information
        APN: "",
        address: "",
        city: "",
        state: "",
        county: "",
        propertySize: "",
        estimatedValue: "",
        assessedValue: "",
        askingPrice: "",
        //Form 3
        freeTitle: "",
        owedAmount: "",
        HOAorPOA: "",
        subdivision: "",
        yearlyDues: "",
        methodOfObtainment: "",
        yearsOwned: "",
        utilities: "",
        //Form 4
        roadAccess: "",
        comments: "",
        paymentMethod: "",
        images: ""
    }

   const [ formValues, setFormValues ] = useState(initialState);
   
   const handleChange = e => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
   }

   const handleSubmit = e => {
       e.preventDefault();

       setFormValues(initialState)
       // props.history.push('/')
   }

   const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 1050,
      width: "100%",
      margin: '0 auto',
      '& label': { 
          fontSize: '1.8rem'
      },
      '& div': {
          fontSize: '2.2rem'
      },
      '& p': {
          fontSize: '1.8rem'
      },
      '& div ul li': {
        fontSize: '2.6rem'
      }
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
    const classes = useStyles();

   return(
        <section className={classes.container} id="contact">
            <h2 style={{ fontSize: "7.2rem", margin: "50px", marginTop: "100px" }}>Property Review Form:</h2>
            
            <form style={{ width: '100%' }}
                  action="https://formspree.io/xqkakdgo" 
                  method="POST"
            >
                <OwnerInfo classes={classes}
                        handleChange={handleChange}
                        formValues={formValues}
                />


                <PropertyInfo classes={classes}
                            handleChange={handleChange}
                            formValues={formValues}
                />                    


                <AdditionalInfo classes={classes}
                                handleChange={handleChange}
                                formValues={formValues}
                />

                <FormEnd classes={classes}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        formValues={formValues}
                />


                <Button variant="contained" 
                        color="primary" 
                        id="cta-btn" 
                        size="large"
                        onClick={props.handleSubmit}
                        type="submit"
                >
                    Submit
                </Button>   
            </form>
        </section>
   )
}

export default Form;