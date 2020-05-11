import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MyTextField(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label={props.label} 
            type={props.type}
            value={props.value}
            variant={props.variant} 
            onChange={(e)=>{props.onChange(e.target.value)}}
            onKeyDown={(event) => {
                if (event.key === 'Enter' && props.OnClickEnter) {
                  event.preventDefault();
                  props.OnClickEnter(event)
              }
            }}
            
        />
    </form>
  );
}
