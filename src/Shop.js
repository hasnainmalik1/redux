import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreator } from './state/index';
const Shop = () => {
    const dispatch = useDispatch();
    let balance=useSelector(state=>state.amount)
    const {Depositmoney,Withdrawmoney}=bindActionCreators(actioncreator,dispatch)
    return (
        <div>
            <h2>Deposit and withdraw money</h2>
            <button className="btn btn-primary mx-2"onClick={()=>(Withdrawmoney(100))}>-</button>
            updatebalance({balance})
            <button className="btn btn-primary mx-2"onClick={()=>(Depositmoney(100))}>+</button>

        </div>
    )
}

export default Shop
