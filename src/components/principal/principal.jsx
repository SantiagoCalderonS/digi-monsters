import monstruos from "../monsters/monsters";
import style from "./principal.module.css"
import {ProgressBar} from 'react-bootstrap';
import { useState, useEffect } from "react" ;
import { useDispatch, useSelector} from "react-redux";
import { setMonster, setAllMonsters, setAllObjets } from "../../redux/actions";
import { usersMonsters, userObjets } from "../usuario/usuario";
import { finalStats } from "../usuario/calculo";

const Principal = () => {
    /*cuando se logue, traera toda la info del usuario, bestias, objetos, etc
    y se guardara en el redux
    */
 

    const dispatch = useDispatch()
    const monster = useSelector((state)=>state.principal);


    useEffect(()=>{
        dispatch(setAllMonsters(usersMonsters))
       !monster.nombre && dispatch(setMonster(finalStats(usersMonsters[0])))
    },[])

    return(
    <div className={style.container}>
        <h1>{monster.nombre}</h1>
        <ProgressBar now={ (monster.exp?.actual/monster.exp?.max)*100} label={`${(monster.exp?.actual/monster.exp?.max)*100}%`} />
            <div className={style.libro} >
                <div className={style.imgContainer}>
                    <img src={monster.image} className={style.img}/>
                </div>
                <div name="stats" className={style.stats}>
                    <div>
                        <h3>{monster.descripcion}</h3>
                    </div>
                    <div className={style.numbers}>
                        <h4>Vitalidad:{monster.hp}</h4>
                        <h4>Fuerza:{monster.atq}</h4>
                        <h4>Resistencia:{monster.def}</h4>
                        <h4>Agilidad:{monster.vel}</h4>
                    </div>   
                </div>
            </div>
    </div>
    )
}

export default Principal;