import lizard from "./monstersImg/lizard.png";
import goblin from "./monstersImg/goblin.png";

const monstruos = [{
    nombre: "Duende salvaje",
    image: goblin,
    descripcion: "verde y enojon, pero no tan carismatico como Shrek",
    hp: 10,
    atq: 2,
    def: 2,
    vel: 5, 
},{
    nombre: "Dragon acorazado",
    image: lizard,
    descripcion: "las escamas no eran suficiente carajo",
    hp: 10,
    atq: 4,
    def: 3,
    vel: 2
}]

export default monstruos