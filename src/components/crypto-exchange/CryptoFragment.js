//Merhaba, bu çözümü yapıp yapamamam gerektiğinden emin değildim, aklıma gelen en basit yol buydu umarım
//çok kötü değildir, daha iyi bir çözüm bulamadım, nasıl yapmanın ideal olduğunu bilmiyorum, lütfen
//eleştirilerinizle beraber blourvim@gmail.com da bana iletin, teşekkürler
import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    root: {
      height:'30px',
      backgroundColor:'#121621',
      borderBottomStyle:'solid',
      borderBottomWidth:'1px',
      borderBottomColor:'#292D38',
      width:'270px',
      display:'flex',
      padding:'0',
      margin:'0'
    },
    text:{
        color:'white',
        margin:'0',
        padding:'0',
        textAlign:'center',

    },
    middleAlignedText:{
        alignSelf:'center',
        color:'white',
        margin:'0 65px',
        padding:'0',
    },
    gridItem:{
        display:'flex'

    }
   
  });

const CryptoFragment =(props)=>{
const classes = useStyles();
const [data, setData] = useState(false)
useEffect(
    () => {
        const ws = new WebSocket('wss://ws.bitstamp.net');
        ws.onopen = () => {
         
              ws.send(JSON.stringify({
                "event": "bts:subscribe",
                "data": {
                    "channel": `live_trades_${props.exchange}`,

                }
            }))
         
        
          
        
          };
          ws.onmessage = (event) => {
            const response = JSON.parse(event.data);
            console.log(response)
            setData(response)
            


          };
          ws.onclose = () => {
            ws.close();
          };
      
          return () => {
            ws.close();
          
    }},[]
)

return(
<Grid container className={classes.root} alignContent='center'>
    <Grid item xs={4}>
<p className={classes.text}>{props.exchange}</p>
        </Grid>
        <Grid item xs={4} >
<p className={classes.text}>{ data.data.amount_str ? data.data.amount_str :"waiting..."}</p>

        </Grid>
        <Grid item xs={4}>
<p className={classes.text}>{ data.data.price_str ? data.data.price_str :"waiting..."}</p>

        </Grid>
        
</Grid>

)

}

export default CryptoFragment