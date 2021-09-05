
import CryptoFragment from './CryptoFragment';

const CryptoExchange =()=>{

  const subscriptions =[ "btcusd", "btceur", "btcgbp", "gbpusd", "gbpeur", "eurusd", "ethusd", "etheur", "ethbtc", "ethgbp", "ethpax", "ethusdt", "ethusdc", "xrpusd", "xrpeur", "uniusd", "unieur"]
return(
<div>
{subscriptions.map((item,index)=>{
  return(

    <CryptoFragment key={item} exchange={item}/>

  )


})}


    </div>
)


}

export default CryptoExchange