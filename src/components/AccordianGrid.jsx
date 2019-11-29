import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 1050,
    margin: "20px auto",
    '& p': {
        fontSize: "1.8rem"
    }
  },
}));

const AccordianGrid = () => {
  const classes = useStyles();

  return (

    <section>
        <h2 style={{ fontSize: "7.2rem", margin: "50px", marginTop: "100px" }}>Our Step By Step Process</h2>

        <div className={classes.root}>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading} id="step">Step 1: Tell Us About Your Property</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                Fill out our simple step-by-step form below to send us all the details we will need about you and your property.
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={classes.heading} id="step">Step 2: Review Your Property</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                We will recieve your information via email, and review it promptly.
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
            <Typography className={classes.heading} id="step">Step 3: Get Your Offer</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                 Now that the review has been completed, you will recieve a phone call with our offer.
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
            >
            <Typography className={classes.heading} id="step">Step 4: Close The Deal</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                It's time to seal the deal, and our speedy process helps you get your money quicker. We will even have a notary in your area bring your the documents and check at a time and place that is convienant for you.
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    </section>
  );
}

export default AccordianGrid;