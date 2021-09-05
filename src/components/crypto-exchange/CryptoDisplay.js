
import CryptoExchange from './CryptoExchange';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
wrapper:{
    width:'100%',
    backgroundColor:'#121621',


},
picker:{
display:'flex',
background:'#1B1F2F',
color:'#6A7584',
fontSize:'0.7em',
justifyContent:'space-between',
border:'#292D38 1px solid',
paddingRight:'5px',
padding:'6px',
fontWeight:'700'
},
legend:{
    height:'20px',
    backgroundColor:'#121621',
    borderBottomStyle:'solid',
    borderBottomWidth:'1px',
    borderBottomColor:'#292D38',
    display:'flex',
    paddingTop:'5px',
    paddingLeft:'7px',
    color:'#6A7584',
    justifyContent:'space-between',
    fontSize:'0.7rem',
 
},
search:{
display:'flex',
backgroundColor: '#121621',
},
form: {
    backgroundColor: '#292D38',
    color: "white",
    border:'none',
    width: '98%',
    height: '25px',
    margin: '5px auto',
    fontSize: '0.7rem',
},


})
const CryptoDisplay =()=>{
const classes= useStyles()

return(
    <div className={classes.wrapper}>
<div className={classes.search}>
<input type="text" className={classes.form} placeholder="&emsp;&#x1F50D;&emsp;Search" />

</div>


    <div className={classes.picker}> 

    
    <span>★</span>

    <span style={{color:'white'}}> BTC</span>
    <span>ETH</span>
    <span>NEO</span>
    <span>USDT</span>
    <span>DAI</span>
    <span>PAX&emsp;</span>



    </div>


<legend className={classes.legend}>
<span >Pairs</span>
<span>Amount</span>
<span>Price&emsp;</span>

</legend>

<CryptoExchange/>
</div>
)
}



export default CryptoDisplay