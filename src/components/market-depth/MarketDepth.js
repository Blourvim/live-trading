import { makeStyles } from '@material-ui/core/styles';
import {useEffect, useState} from 'react';
import Column from './Column';

const useStyles = makeStyles({
root:{
background:'#292D38',
color:'white',
width:'100%',
height:'200px'

},
chart:{
    display:'flex',
    fledirection:'column-reverse',
    height:'200px',
    width:'97%',
    background:'#121621',
    margin:'0 auto',
    WebkitTransform:'rotate(180deg)'
    // I have no shame left at this point

},
title:{
  color:'#8C8F96',
  fontSize:'0.7rem',
  paddingLeft:'10px',
  marginBottom:'4px'
},
subTitle:{
  color:'white',
  fontSize:'0.7rem',
  paddingLeft:'10px',

},
titles:{
paddingBottom:'5px'

}

})

const MarketDepth =()=>{
    const classes = useStyles()
    const [data,setData] = useState(false)

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
                if(response.data){
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
  


      return (
        <div className={classes.root}>
          <div className={classes.titles}>
          <span className={classes.title}>
          Recent Trades
            </span> 
            <span className={classes.subTitle}>
            Market Depth
            </span>
          </div>
    <div className={classes.chart}>

{data.asks && data.bids.map((item)=>{
return(
  <Column color={'red'} height={item[1]}/>
)

})}

{data.asks && data.asks.map((item)=>{
return(
  <Column color={'green'} height={item[1]}/>
)

})}


</div>


     </div>
      );

}

export default MarketDepth