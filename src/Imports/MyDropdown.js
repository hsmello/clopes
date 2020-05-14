import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function MyDropDown(props) {
    const classes = useStyles();
    // const [state, setState] = React.useState({
    //     age: '',
    //     name: 'hai',
    // });

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     setState({
    //         ...state,
    //         [name]: event.target.value,
    //     });
    // };

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Categoria</InputLabel>
                <Select
                    native
                    value={props.value}
                    onChange={(e) => {props.onChange(e)}}
                    label="Categoria"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option >Cabelos - Finalização</option>
                    <option >Cabelos - Produtos e Resenhas</option>
                    <option >Cabelos - Cuidados</option>
                    <option >Cabelos - Inspirações</option>
                    <option >Beleza</option>
                    <option >Moda</option>
                    <option >Entretenimento</option>
                </Select>
            </FormControl>

        </div>
    );
}
