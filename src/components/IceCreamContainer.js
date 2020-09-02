import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyIceCream from '../redux/iceCream/iceCreamActions'


function IceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of IceCreams (Hooks) : <span>{numOfIceCreams}</span></h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainer
