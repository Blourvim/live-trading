import { makeStyles } from '@material-ui/core/styles';
import NewsBubble from './NewsBubble';
const useStyles= makeStyles({
root:{


},
header:{
    fontWeight:'700',
    background:'#292D38',
    color:'white',
    fontSize:'0.7rem',
    paddingLeft:'7px'
}


})

const MarketNews = ()=>{
const classes = useStyles()

    return(


<div className={classes.root}>
<header className={classes.header}>Market News</header>

<NewsBubble/>
<NewsBubble/>

<NewsBubble/>


</div>


    )

}
export default MarketNews