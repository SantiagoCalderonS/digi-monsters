import { Button, Card } from "react-bootstrap";

const Objeto = ({objeto}) => {
    
    return(
        <Card style={{ width: '18rem', display: "inline-block", margin: "30px"}} >
        <Card.Img variant="top" src={objeto.objet.img}  style={{height: "300px"}}/>
        <Card.Body>
          <Card.Title>{objeto.objet.nombre}</Card.Title>
          <Card.Text>
              {objeto.objet.descripcion}
          </Card.Text>
          <Button>usar</Button>
          <Button>comprar</Button>
        </Card.Body>
      </Card>
    );
}

export default Objeto