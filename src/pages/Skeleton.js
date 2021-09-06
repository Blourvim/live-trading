import CryptoDisplay from '../components/crypto-exchange/CryptoDisplay';
import Grid from '@material-ui/core/Grid';
import CenterChart from '../components/center-chart/CenterChart';
import FormsContainer from '../components/forms/FormsContainer';
import Order from '../components/orders-table/Order';
import OrderBook from '../components/order-book/OrderBook';
import MarketNews from '../components/market-news/MarketNews';
import MarketDepth from '../components/market-depth/MarketDepth';
const Skeleton =()=>{


    return(
<Grid container>
    <Grid item xs={12}md={2} >

<CryptoDisplay/>
<MarketNews/>
</Grid>
<Grid item xs={12}md={8}>
    <CenterChart />
    <FormsContainer/>
    <Order/>


    </Grid>
    <Grid item xs={12} md={2}>
<OrderBook/>
<MarketDepth/>
        </Grid>

</Grid>
    )

}

export default Skeleton