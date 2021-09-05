import './App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "./state/index";

import  Skeleton from './pages/Skeleton';
function App() {


  const state = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const { updateOrders } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
<Skeleton style={{background:'#121621'}}/>
  </>
    )
}

export default App;
