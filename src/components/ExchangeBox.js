
import React, { useEffect, useRef, useState } from "react"
const ExchangeBox = () => {

    const [state, setState] = useState({price:"0"})
    const [chat, setChat] = useState([])

    const socketRef = useRef()


    return (


        <div>

            {state.price}
        </div>
    )

}

export default ExchangeBox