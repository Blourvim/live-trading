
import BuyForm from './BuyForm'
import {makeStyles} from '@material-ui/styles'
import Container from '@material-ui/core/Container'
const useStyles = makeStyles({

    formContainer:{
        display:'flex',
        border:'1px solid #333949',
        margin:'0px',
        padding:'0',
        background:'#121621',
        height:'250px'
    },
    divider:{
        height:'210px',
        width:'2px',
        background:'#333949',
        border:'none',
        alignSelf:'center'
    }


})


const FormsContainer =()=>{

    const classes = useStyles()

return(
<Container className={classes.formContainer}>
<BuyForm/>
<div className={classes.divider}></div>
<BuyForm/>

    </Container>

)

}


export default FormsContainer