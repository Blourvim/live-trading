//Merhaba, bu çözümü yapıp yapamamam gerektiğinden emin değildim, aklıma gelen en basit yol buydu umarım
//çok kötü değildir, daha iyi bir çözüm bulamadım, nasıl yapmanın ideal olduğunu bilmiyorum, lütfen
//eleştirilerinizle beraber blourvim@gmail.com da bana iletin, teşekkürler
import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    root: {
      backgroundColor:'#121621',
      borderBottomStyle:'solid',
      borderBottomWidth:'1px',
      borderBottomColor:'#292D38',
      display:'flex',
      paddingTop:'5px',
      paddingLeft:'7px'
    },
    text:{
        color:'white',
        margin:'0',
        padding:'0',
        textAlign:'center',
        fontSize:'0.56rem',
        textTransform: 'uppercase',
    },
    glowText:{
      color:'white',
      margin:'0',
      padding:'0',
      textAlign:'center',
      fontSize:'0.6rem',
      textTransform: 'uppercase',
      fontWeight:'600',
    },
    gridItem:{
        display:'flex'

    },
    star:{

      color:'#667280',
      margin:'0',
      padding:'0',
      textAlign:'start',
      fontSize:'0.6rem',
      textTransform: 'uppercase',
    },
    end:{
right:'-6px' ,
position:'relative'   
    }
   
  });

const CryptoFragment =(props)=>{
const classes = useStyles();
const [data, setData] = useState(false)
const [glow, setGlow] = useState(false)
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
            if(Object.entries(response.data).length !== 0){
              setData(response)
              setGlow(true)
              const timer = setTimeout(() => {
               setGlow(false)
              }, 500);
              return () => clearTimeout(timer);



            }
            


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
    <Grid item xs={1}>
    <span className={glow ?  classes.glowText: classes.star}>★</span>
    
    </Grid>

    
    <Grid item xs={3}>
<p  className={glow ?  classes.glowText: classes.text} style={{marginLeft:'-20px'}} > 
 {props.exchange.substring(0,3)}
 /{props.exchange.substring(3,7)}
 </p>
        </Grid>
        <Grid item xs={4} >
<p className={glow ?  classes.glowText: classes.text}>{ data ? data.data.amount:"None"}</p>

        </Grid>
        <Grid item xs={4}>
          <div className={classes.end}>
<p className={glow ?  classes.glowText: classes.text}>{ data ? data.data.price :"Yet"}</p>
</div>
        </Grid>
        
</Grid>

)

}

export default CryptoFragment