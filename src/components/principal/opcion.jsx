import { useState, useEffect } from "react"
import { useSelector, useDispatch  } from "react-redux"
import { setMonster, setAllObjets } from "../../redux/actions"
import { userObjets } from "../usuario/usuario"

const Opciones = ({monster}) =>{

    const dispatch = useDispatch()
    const opciones = useSelector((state)=> state.allObjets);
    const objet= opciones[0]

    function handleFeed (O){
        const newMonster = {
        nombre: monster.nombre,
        image: monster.image,
        descripcion: monster.descripcion,
        especie: monster.especie,
        nivel: monster.nivel,
        exp:{
            exp_max: monster.exp.exp_max,
            own_exp: monster.exp.own_exp + O.objet.efectos.exp ,
            actual_exp: monster.exp.actual_exp
        },

        hunger:{
            hunger_max: monster.hunger.hunger_max,
            own_hunger: monster.hunger.own_hunger + O.objet.efectos.hunger,
            actual_hunger: monster.hunger.actual_hunger
        },

        joy:{
            joy_max: monster.joy.joy_max,
            own_joy: monster.joy.own_joy + O.objet.efectos.joy ,
            actual_joy: monster.joy.actual_joy
        },

        hp: monster.hp + O.objet.efectos.hp,
        atq: monster.atq + O.objet.efectos.atq,
        def: monster.def + O.objet.efectos.def,
        vel: monster.vel + O.objet.efectos.vel  
        }
       

        dispatch(setMonster(newMonster));
    }


    useEffect(()=>{
        !objet && dispatch(setAllObjets(userObjets))
    },[])

 return(
    <div>
       <ul>
        {opciones?.map((O)=>{
            return(
                <div style={{width: "200px" , overflow: "auto"}}>
                    <p>{O?.objet.nombre}</p>
                    <button onClick={()=>{handleFeed(O)}}>USAR</button>
                </div>
            )
        })}
       </ul> 
    </div>
 )   
}

export default Opciones