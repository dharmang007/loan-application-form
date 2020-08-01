/**
 * @author Dharmang Solanki
 * @description This is the main Application form with 3 step process
 */

/********************* Import ***************************/
import React,{useState,useEffect, Fragment} from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import BasicInformation from './BasicInformation';
import Box from "../stylecomponents/Box";
/********************************************************/

const steps = ['Basic Information', 'Step 2', 'Step 3'];
const useStyles = makeStyles((theme)=>({
    appBar:{
        position:'relative',
        backgroundColor:"#1f403b",    
    },
    stepName:{
        paddingLeft:20,
        fontSize:24,
        textAlign:"left",
    },
    box:{
        backgroundColor: "#434545",
        
        display:"inline",
    }
}));

var getStepContent = (step) => {
    switch(step){
        case 0:
            return <BasicInformation/>
        case 1:
            return <BasicInformation/>
        case 2:
            return <BasicInformation/>
        default:
            throw new Error('Invalid Step Value');

    }
}

const ApplicationForm = () => {
    const classes = useStyles();
    const [activeStep,setActiveStep] = useState(0);
    
    const nextStep = () =>{
        setActiveStep(activeStep + 1);
    };

    const previousStep = () => {
        setActiveStep(activeStep - 1);
    };
    
    return (
        <Fragment>
            <CssBaseline/>
            <AppBar position="absolute" color='default' className={classes.appBar}>
                <Toolbar>
                    <img src="CaminoLogo.png"/>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Loan Application Form
                    </Typography>
                    
                    <Grid container spacing={1}>
                        <Grid item xs={6} >
                            <p className={classes.stepName}> Step {activeStep+1} : {steps[activeStep]}</p>    
                        </Grid>
                        <Grid item xs={6} >
                            <h3>Step {activeStep+1} of {steps.length}</h3>
                            {steps.map((label,index) => {
                                var style = {
                                    backgroundColor: "#949c9c"
                                    };
                                if(activeStep == index){
                                    style = {
                                        backgroundColor: "#1f403b"
                                    };
                                    
                                }
                                
                                return (<Box px={2} mx={0.5} className={classes.box} style={style}/>);
                                
                            })}
                            
                            
                        </Grid>
                    </Grid>
                                        
                </Paper>
            </main>
        </Fragment>
        
    )
}
export default ApplicationForm

