import './App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "./state/index";
import CryptoExchange from './components/crypto-exchange/CryptoExchange';
import FormsContainer from './components/forms/FormsContainer';
import Orders from './components/ordersTable/Order';
import CenterChart from './components/centerChart/CenterChart';
function App() {


  const state = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const { updateOrders } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
<CenterChart/>
  </>
    );
}

export default App;
