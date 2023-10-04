import axios from "axios"
import { finalStats } from "../components/usuario/calculo"

/*export const getRecipes= (name)=>{
const server= `http://localhost:3001/recipe/name?buscar=${name}`
return async (dispatch) => {
    try {
       const {data}= await axios.get(server)
        return dispatch({
          type: 'GET_RECIPES',
          payload: data,
       });
    } catch (error) {
       window.alert(error.response.data)
    }
 };
}*/

export const setMonster= (M)=>{
   return {
       type: "SET_MONSTER",
       payload: M
   }
}

export const setAllMonsters= (Ms)=>{
   return {
       type: "SET_ALLMONSTERS",
       payload: Ms
   }
}

export const setAllObjets= (O)=>{
   return {
       type: "SET_ALLOBJETS",
       payload: O
   }
}

export const puTObjetOnTarget= (P)=>{
    return {
        type: "PUT_OBJET_ON_MONSTER",
        payload: P
    }
}

export const minus= (D)=>{
   return {
       type: "-",
       payload: D
   }
}

export const setShow = ()=>{
   return {
       type: "SHOW",
   }
}