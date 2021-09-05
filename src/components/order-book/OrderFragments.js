import OrderFragment from './OrderFragment';



const OrderFragments = (props)=>{

    const {data,type} = props
    console.info(props)
const slicedData = data.slice(0, 8)
    return(
<>
{slicedData.map((item,index)=>{


return(
    <OrderFragment index={index}type={type}data={item}/> 
)

})}
</>

    )

}

export default OrderFragments;