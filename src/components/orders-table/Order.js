
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    container:{
        background:'#292D38',
        height:'200px',
        width:'100%',
    },
    buttonContainer:{
        display:'flex',
        height:'30px',
        margin:'0 auto',
        width:'97%'
    },
    button:{
        background:'#292D38',
        border:'none',
        color:'#A4A4A4',
        marginRight:'40px',
        '&:hover':{
            color:'white',
            cursor:'pointer'
        }
    
    },
    chart:{
        background:'#121621',
        width:'98%',
        margin:'0 auto',
        height:'160px',
        display:'flex',
        justifyContent:'space-between'
        
        
    },
    chartItem:{
        color:'#A4A4A4',
        display:'flex',
        margin:'5px',
        fontSize:'0.9rem'

    },
    list:{
        listStyle:'none',
        display: 'inline',
    }
    
        
    })
const Orders = ()=>{
    const classes = useStyles()

    return(
        <div className={classes.container}>
<div className={classes.buttonContainer}>
<button style={{color:'white'}} className={classes.button}>Open Orders</button>
<button className={classes.button}>Close Orders</button>
<button className={classes.button}>Order History</button>
<button className={classes.button}>Balance</button>
    </div>
    <div className={classes.chart}>
        <span className={classes.chartItem}>Time</span>
        <span className={classes.chartItem}>All Pairs</span>
        <span className={classes.chartItem}>All Types</span>
        <span className={classes.chartItem}>Buy/Sell</span>
        <span className={classes.chartItem}>Price</span>
        <span className={classes.chartItem}>Amount</span>
        <span className={classes.chartItem}>Executed</span>
        <span className={classes.chartItem}>Unexecuted</span>

    </div>
 

            </div>
    )
}

export default Orders