
import {useEffect,useState} from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state/index";
import CryptoFragment from './CryptoFragment';

const CryptoExchange =()=>{
  const [connection ,setConnection] = useState("")
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { updateOrders } = bindActionCreators(actionCreators, dispatch);
  const subscriptions =[ "btcusd", "btceur", "btcgbp", "gbpusd", "gbpeur", "eurusd", "ethusd", "etheur", "ethbtc", "ethgbp", "ethpax", "ethusdt", "ethusdc", "xrpusd", "xrpeur", "uniusd", "unieur"]
return(
<div>
{subscriptions.map((item,index)=>{
  return(

    <CryptoFragment exchange={item}/>

  )


})}


    </div>
)


}

export default CryptoExchange