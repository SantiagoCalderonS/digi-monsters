import { useState, useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { userObjets } from "../usuario/usuario"
import Objeto from "./objeto/objeto"
import { setAllObjets } from "../../redux/actions"

const Bolsa = () => {
    const objets = useSelector((state)=>state.allObjets)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(objets.length === 0){
            dispatch(setAllObjets(userObjets))
        }
    },[])
        

    return(
        <div>
            {userObjets.map((Obj)=><Objeto objeto={Obj}/>)}
        </div>
    )
}


export default Bolsa