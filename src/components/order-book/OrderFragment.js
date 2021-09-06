import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
root:{
    height:'20px',
    width:'100%',
    backgroundColor:'#121621',
    borderBottomStyle:'solid',
    borderBottomWidth:'1px',
    borderBottomColor:'#292D38',
    display:'flex',
    justifyContent:'flex-end',
    color:'white',
},
green:{
    height:'20px',
background:'#206447',
},
red:{
    height:'20px',
background:'#601E26',
},

numbersDiv:{
    position:'absolute',
    display:'flex',
    width:'220px',
    justifyContent:'space-between',

}

})


const OrderFragment =(props={})=>{
const [price, amount] = props.data;
const type = props.type;
const index = props.index
const classes = useStyles();
const isGreen = (type === "green")

const width =(isGreen?`${10 + index *10}%`:`${80 - index *10}%`)
return(
<div className={classes.root}>

<div className={isGreen ? classes.green : classes.red} style={{width:width}}>
</div>
<div className={classes.numbersDiv}>
    <span>{price}</span>
    <span>{amount}</span>
    <span >{Math.floor(price*amount*10000000)}</span>

</div>

</div>
)
}

export default OrderFragment