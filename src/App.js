import './App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "./state/index";
import CryptoDisplay from './components/crypto-exchange/CryptoDisplay';
import FormsContainer from './components/forms/FormsContainer';
import Orders from './components/ordersTable/Order';
import CenterChart from './components/centerChart/CenterChart';
import OrderBook from './components/OrderBook/OrderBook';
function App() {


  const state = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const { updateOrders } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
<OrderBook/>
  </>
    );
}

export default App;
