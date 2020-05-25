import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function MyTextareaAutosize(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} >

            <TextareaAutosize
                value={props.value}
                aria-label="minimum height"
                rowsMin={15}
                cols={80}
                onChange={(e)=>{props.onChange(e)}}
                placeholder="Write here :)" 
            />

        </div>
    );
}