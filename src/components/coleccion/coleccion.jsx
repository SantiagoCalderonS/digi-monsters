import monstruos from "../monsters/monsters";
import Criatura from "./criatura/criatura";
import { finalStats } from "../usuario/calculo";
import { usersMonsters } from "../usuario/usuario";
import style from "./coleccion.module.css"
import { useSelector } from "react-redux";

const Coleccion = () =>{

    const leader = useSelector((state)=>state.principal)

    return(
        <div>
            <h1>Preparado: {leader.nombre}</h1>
            {usersMonsters.map((M)=>{
                return(<Criatura criatura={finalStats(M)}/>)
            })}
        </div>
    )
}

export default Coleccion