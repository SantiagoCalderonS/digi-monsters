import { useState } from "react" ;
import { useDispatch, useSelector} from "react-redux"
import { setShow } from "../../redux/actions";
import { Button } from "react-bootstrap";

const Escenario = () => {
    const show = useSelector((state)=> state.show);
    const dispatch = useDispatch();
    

    function showHandler (){
        dispatch(setShow())
    }

    return(
        <div>
            {!show?<Button onClick={showHandler}>sera duelo a muerte con cuchillos</Button>:<h1>duelo a muerte con cuchillos?</h1>}
        </div>
    )
};

export default Escenario