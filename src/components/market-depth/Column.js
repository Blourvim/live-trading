import { makeStyles } from '@material-ui/core/styles';
import { ColorizeOutlined } from '@material-ui/icons';

const useStyles = makeStyles({

    column:{
        width:'4px',
        height:'70px'
        }
})


const Column = (props)=>{

    const {color} = props
    const classes = useStyles()

    return(
<div style={{background:`${color}`}} className={classes.column}>



</div>



    )
}


export default Column