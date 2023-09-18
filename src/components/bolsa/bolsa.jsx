import { useState, useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { plus, minus } from "../../redux/actions"
import { userObjets } from "../usuario/usuario"
import Objeto from "./objeto/objeto"

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
            {userObjets.map((Obj)=><Objeto objeto={Obj}/>)}
        </div>
    )
}


export default Bolsa