import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
    paddingLeft: '25px',
    paddingRight: '25px',
    borderRadius: '30px',
    fontSize: '15px',
    color: 'white',
    backgroundImage: 'linear-gradient(180deg, #92def7, #545bc1)',
    "&:hover": {
      boxShadow: '0 5px 8px #887d7d'
    }
  },
}));

function ButtonMessage() {
  const classes = useStyles();

  return (
      <Button className={classes.root} variant="contained">
        Send Message
      </Button>
  );
}
export default ButtonMessage;