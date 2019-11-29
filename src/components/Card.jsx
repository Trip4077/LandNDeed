import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { faEdit, faUserSlash, faClock, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    card: {
      width: 420,
      height: 175,
      marginTop: 35,
      '& h2': {
          fontSize: "2.8rem"
      },
      '& p': {
          fontSize: "1.8rem"
      }
    },
  });

let icon = '';
  
const CardTile = props => {
    const classes = useStyles();

    switch(props.icon) {
        case "edit":
            icon = faEdit;
            break;

        case "realtor":
            icon = faUserSlash;
            break;

        case "clock":
            icon = faClock;
            break;

        case "money":
            icon = faHandHoldingUsd;
            break;
    }
  
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <FontAwesomeIcon icon={icon} size="lg" />
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

export default CardTile;