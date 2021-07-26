import React, { useEffect } from 'react' 
import { useDispatch } from 'react-redux'
import {startGetCustomers} from '../../Actions/customersAction'
import CustomerForm from './CustomerForm'
import CustomersList from './CustomersList'
//material ui
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}))

const CustomersContainer = (props) =>{
    const dispatch = useDispatch()
    const classes = useStyles()
    useEffect(() =>{
        dispatch(startGetCustomers())
    })
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
         <Grid item xs={9}>
            <Paper className={classes.paper}><CustomersList/></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}><CustomerForm /></Paper>
          </Grid>
          
        </Grid>
      </div>
    )
}
export default CustomersContainer