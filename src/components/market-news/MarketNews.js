import { makeStyles } from '@material-ui/core/styles';
import NewsBubble from './NewsBubble';
const useStyles= makeStyles({
root:{


}

})

const MarketNews = ()=>{
const classes = useStyles()

    return(


<div className={classes.root}>
<NewsBubble/>
<NewsBubble/>

<NewsBubble/>


</div>


    )

}
export default MarketNews