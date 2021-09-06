import { makeStyles } from '@material-ui/core/styles';
import {useEffect, useState} from 'react';
import OrderFragments from './OrderFragments';
const useStyles = makeStyles({
root:{
background:'#292D38',
color:'white',
width:'100%',
fontSize:'0.7em'
},
legend:{
display:'flex',
justifyContent:'space-between',
background:'#121621',
padding:'6px',
color:'#46566A',
fontSize:'0.7em'

},
center:{
justifyContent:'space-between',
display:'flex',
fontSize:'0.7em',
backgroundColor:'#121621',
borderBottomStyle:'solid',
borderBottomWidth:'1px',
borderBottomColor:'#292D38',
},
header:{
    margin:'0px',
    padding:'4px'
}
    
})

const OrderBook =()=>{
    const classes = useStyles()
    const [data, setData] = useState(false)
    useEffect(
        () => {
            const ws = new WebSocket('wss://ws.bitstamp.net');
            ws.onopen = () => {
             
                  ws.send(JSON.stringify({
                    "event": "bts:subscribe",
                    "data": {
                        "channel": `order_book_ethbtc`,
    
                    }
                }))
             
            
              };
              ws.onmessage = (data) => {
                const response = JSON.parse(data.data);
                if(response.data.bids){
                    setData(response.data)
                }
          
                }
                
              ws.onclose = () => {
                ws.close();
              };
          
              return () => {
                ws.close();
              
        }},[]
    )
  
return(
<div className={classes.root}>
    <p className={classes.header}>OrderBook</p>
    <legend className={classes.legend}>
<span>Price(BTC)</span>
<span>Amount(ETH)</span>
<span>PMBB(ETH)</span>
    </legend>

{
data &&<OrderFragments type={"red"} data={data.asks}/>
}

    <div className={classes.center}>


</div>
{data &&<OrderFragments type={"green"} data={data.bids}/>
}


    </div>

)
}

export default OrderBook