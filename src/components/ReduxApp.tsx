import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store";
import {increment} from "../redux/counterSlice";

const ReduxApp: React.FC = () => {

    const counter = useSelector<RootState, RootState['counter']>((state) => state.counter)
    const dispatch = useDispatch<AppDispatch>()

    const dispatchIncrement = useCallback(() => {
        dispatch(increment())
    }, [dispatch])


    return <div>
        <h1>{counter.count}</h1>
        <button onClick={dispatchIncrement}>increment</button>
    </div>
}

export default  ReduxApp