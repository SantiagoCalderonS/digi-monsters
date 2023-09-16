import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react" ;
import { useDispatch, useSelector} from "react-redux";
import { setMonster } from "../../../redux/actions";
import { Link } from 'react-router-dom';


const Criatura = ({criatura}) => {

  const dispatch = useDispatch();

  function changeMonster () {
    dispatch(setMonster(criatura))
  }

    return(
        <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={criatura.image} />
        <Card.Body>
          <Card.Title>{criatura.nombre}</Card.Title>
          <Card.Text>
              {criatura.descripcion}
          </Card.Text>
          <Button onClick={changeMonster}>vanguardia</Button>
        </Card.Body>
      </Card>
    )
}

export default Criatura;