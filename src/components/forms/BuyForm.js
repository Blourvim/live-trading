import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({

    formContainer: {
        width: '50%',
        backgroundColor: '#121621',
        height: '250px',
        padding:'5px'

    },
    form: {
        backgroundColor: '#292D38',
        border: 'none',
        color: "white",
        borderRadius: '3px',
        width: '98%',
        height: '35px',
        margin: 'px',
        fontSize: '0.8rem',
    },


    flex:{
height:'40px'
    },
  
    text: {
        color: 'white',
        margin:'0',
        padding:'0',
        fontSize:'13px'
    },
    button: {
        color: 'white',
        backgroundColor: '#292D38',
        borderWidth: '0px',
        borderRadius: '5px',
        width: '3.5rem',
        margin: '0 5px',
        '&:hover': {
            background: '#B9B9BB',
            cursor: 'pointer'
        }
    },
    bigButton: {
        color: 'white',
        borderWidth: '0px',
        borderRadius: '5px',
        width: '100%',
        height: '37px',
        background: '#35DC83',
        marginTop:'10px',
        alignSelf:'center',
        '&:hover': {
            background: '#159f49',
            cursor: 'pointer'
        }
    },
    seperate:{
        justifyContent:'space-between',
        display:'flex',
        color:'white',
        padding:'0',
        marginBottom:'10px'

    },
    buttonContainer:{
        height:'20px',
        marginBottom:'15px'
    },
    adornment:{
        color:'white',
        zIndex:'2',
        position:'relative',
        float:'right',
        marginRight:'18px',
        marginTop:'-27px'
    }

})


const BuyForm = () => {

    const classes = useStyles()


    return (
        <Grid container className={classes.formContainer}>
            <Grid item xs={12} className={classes.flex}>
                <input type="text" className={classes.form} placeholder="&nbsp;Price" />
                <p className={classes.adornment}>BTC</p>

            </Grid>
            <Grid item xs={12} className={classes.flex}>
                <input type="text" className={classes.form} placeholder="&nbsp;Amount" />
                <p className={classes.adornment}>ETH</p>

            </Grid>
            <Grid className={classes.buttonContainer} item xs={12}>
                <button className={classes.button}>25%</button>
                <button className={classes.button}>50%</button>

                <button className={classes.button}>75%</button>

                <button className={classes.button}>100%</button>

            </Grid>

            <Grid container justifyContent="space-between">



        <Grid className={classes.seperate}item xs={5}>
<p className={classes.text}>Available:</p> <p className={classes.text}>0 BTC = 0 USD</p> 
        </Grid>
        <Grid className={classes.seperate}item xs={5}>
<p className={classes.text} >Available:</p> <p className={classes.text}>0 BTC = 0 USD</p> 
        </Grid>
        <Grid className={classes.seperate}item xs={5}>
<p className={classes.text}>Available:</p> <p className={classes.text}>0 BTC = 0 USD</p> 
        </Grid>
        <Grid className={classes.seperate}item xs={5}>
<p className={classes.text} >Available:</p> <p className={classes.text} >0 BTC = 0 USD</p> 
        </Grid>
        </Grid>
      

            <Grid item xs={12}>
                <button className={classes.bigButton}>BUY</button>
            </Grid>

        </Grid>
    )

};

export default BuyForm;