import { useState, useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { plus, minus } from "../../redux/actions"

const Bolsa = () => {
    const count = useSelector((state)=>state.counter)
    const dispatch = useDispatch()

    function oper (e) {
        if(e.target.name === "+"){
            dispatch(plus(1))
        }else{
            count > 0 && dispatch(minus(1))
        }
        
    }

    return(
        <div>
            <button name="+" onClick={oper}>+</button>
            <button name="-" onClick={oper}>-</button>
            <h1>{count}</h1>
        </div>
    )
}


export default Bolsa