
import BuyForm from './BuyForm'
import {makeStyles} from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles({
container:{
    margin:'0px',
    paddingBottom:'15px',
    background:'#121621',
    width:'100%'
},

    formContainer:{
        display:'flex',
        margin:'0px',
        padding:'0',
        background:'#121621',
    },
    divider:{
        height:'200px',
        width:'2px',
        background:'#333949',
        border:'none',
        alignSelf:'center'
    },
    tabs:{
        height:'18px',
        background:'#121621',
        display:'flex',
    },
    button:{
        border:'none',
        background:'#121621',
        color:'#5C5C61',
        fontSize:'12px',
        marginRight:'20px',
        marginBottom:'20px',
        '&:hover':{
            color:'white',
            cursor:'pointer'
        }
    }


})


const FormsContainer =()=>{

    const classes = useStyles()
    const matches = useMediaQuery('(min-width:630px)');

return(<div className={classes.container}>
    <div className={classes.tabs}>
<button style={{color:'white',}} className={classes.button}> 
    Limit
</button>
<button className={classes.button}> 
    Market
</button>

<button className={classes.button}> 
    Stop Limit
</button>
<button className={classes.button}> 
    Stop Market
</button>



    </div>

<Container className={classes.formContainer}>

<BuyForm isMobile={matches}isBuy={true}/>
{matches &&<div className={classes.divider}></div>}
{matches &&<BuyForm isMobile={matches}/>}

    </Container>
</div>
)

}


export default FormsContainer