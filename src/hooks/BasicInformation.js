import React,{useState,useEffect, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

const useStyles = makeStyles((theme)=>({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    
    },
    
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  }));

const loanPurposes = [
    "Personal Loan",
    "Education Loan",
    "Housing Loan",
    "Car Loan",
    "Bussiness Loan"
]
const BasicInformation = () => {
    const classes = useStyles();
    const [fname, setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [ownsBussiness,setOwnsBussiness] = useState(true);
    const [bussinessName,setBussinessName] = useState("");
    const [loanAmount,setLoanAmount] = useState(0);
    return (
        <div>
            <h1>Basic Information </h1>
            <h3>Tell us little bit about yourself and your business loan needs</h3>

            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                id="outlined-name"
                label="Name"
                required
                className={classes.textField}
                value={fname}
                onChange={setFname}
                margin="normal"
                variant="outlined"
                />
            </form>

        </div>
    )
}

export default BasicInformation