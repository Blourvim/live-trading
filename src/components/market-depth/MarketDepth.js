import { makeStyles } from '@material-ui/core/styles';
import {useEffect, useState} from 'react';
import Column from './Column';

const useStyles = makeStyles({
root:{
background:'#292D38',
color:'white',
width:'400px',

},
legend:{
background:'#121621',
padding:'7px',
color:'white',
fontSize:'0.8em',
height:'200px',
justifyContent:'space-between',
display:'block',
},
legendItem:{
marginBottom:'5%'
},
center:{
justifyContent:'space-between',
display:'flex',
fontSize:'0.8em',
backgroundColor:'#121621',
borderBottomStyle:'solid',
borderBottomWidth:'1px',
borderBottomColor:'#292D38',
},
titles:{
display:'flex'
},
chart:{
    display:'flex',
    height:'300px',
    widht:'300px'

},


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
                console.log(response)
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
        <div className={classes.container}>
    <div className={classes.chart}>
<Column color={'green'}/>

</div>


     </div>
      );

}

export default MarketDepth