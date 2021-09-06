import { makeStyles } from '@material-ui/core/styles';
import { ColorizeOutlined } from '@material-ui/icons';

const useStyles = makeStyles({

    column:{
        width:'10px',
        }
})


const Column = (props)=>{

    const {color,height} = props
    const classes = useStyles()

    return(
<div style={{background:`${color}`,height:`${height}px`}} className={classes.column}>



</div>



    )
}


export default Column