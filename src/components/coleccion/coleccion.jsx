import monstruos from "../monsters/monsters";
import Criatura from "./criatura/criatura";
import { finalStats } from "../usuario/calculo";
import { usersMonsters } from "../usuario/usuario";
import style from "./coleccion.module.css"

const Coleccion = () =>{

    return(
        <div className={style.lista}>
            {usersMonsters.map((M)=>{
                return(<Criatura criatura={finalStats(M)}/>)
            })}
        </div>
    )
}

export default Coleccion