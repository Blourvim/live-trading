import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
root:{
background:'#121621',
color:'white',
padding:'5px',
paddingBottom:'10px',
borderBottomStyle:'solid',
borderBottomWidth:'1px',
borderBottomColor:'#292D38',
fontSize:'0.7rem'

},
background:{
    background:'#292D38',
},
header:{
    fontWeight:'800'
}

})

const NewsBubble = (props)=>{
const classes = useStyles()

    return(


<div className={classes.root}>
<header className={classes.header}>Market News</header>
<p>Lorem ipsum dolar sit amet consequeter requiem emperio dor serene</p>
<div className={classes.background}>
<span>01-20-200-19:42:22</span>

</div>
</div>
    )

}
export default NewsBubble